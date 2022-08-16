<template>
  <div class="tableOutPage">
    <MaskView v-show="$store.state.loadingState" tip="加载中"></MaskView>
    <div class="tableOutPageTop">
      <div><a-input size="small" placeholder="登录名" /></div>
      <div><a-input size="small" placeholder="手机号" /></div>
      <div>
        <a-select
          default-value="状态"
          style="width: 120px"
          @change="handleChange"
          size="small"
        >
          <a-select-option value="代付中"> 代付中</a-select-option>
          <a-select-option value="待审核"> 待审核 </a-select-option>
          <a-select-option value="已拒绝"> 已拒绝</a-select-option>
          <a-select-option value="已到账"> 已到账</a-select-option>
        </a-select>
      </div>

      <div style="display: flex; align-items: center">
        <div style="margin-left: 10px">
          <a-button type="primary" icon="search" size="small"> 搜索 </a-button>
        </div>
        <div style="margin-left: 10px">
          <a-button
            type="primary"
            :icon="refreshIcon"
            size="small"
            @click="refresh"
          >
            刷新
          </a-button>
        </div>
        <div style="margin-left: 10px">
          <a-button type="primary" icon="check-square" size="small">
            今日流水
          </a-button>
        </div>
        <div style="margin-left: 10px">
          <a-button type="danger" icon="delete" size="small">清空列表</a-button>
        </div>
      </div>
    </div>
    <div class="headerOperation">
      <!-- 表头操作 -->
      <div
        style="
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: 0.5rem 0;
          color: #333333;
          padding: 0 3rem;
        "
      >
        <div style="display: flex; color: #008000">
          <p>出金总计：</p>
          <p style="font-weight: bold">&#165;{{ moneyTotal }}</p>
        </div>
        <div style="display: flex; color: #ffa500">
          <p>到账总计：</p>
          <p style="font-weight: bold">&#165;{{ arriveMoneyTotal }}</p>
        </div>
        <div style="display: flex; color: blue">
          <p>手续费总计：</p>
          <p style="font-weight: bold">&#165;{{ tipTotal }}</p>
        </div>
        <div style="display: flex; color: black">
          <p>共有数据：</p>
          <p style="font-weight: bold">{{ total }}条</p>
        </div>
      </div>
      <!-- 表格数据 -->
      <div class="tabData">
        <a-table
          class="flatorderTable"
          bordered
          :columns="columns"
          :data-source="data"
          :pagination="false"
          :rowKey="(record, index) => record.id"
        >
          <div slot="outState" slot-scope="text, record">
            <a-tag color="green" v-show="text == 1">已通过 </a-tag>
            <a-tag color="red" v-show="text == -1">已拒绝 </a-tag>
            <a-tag
              style="cursor: pointer"
              color="#87d068"
              v-show="text == 0"
              @click="through(record)"
              >通过</a-tag
            >
            <a-tag
              style="cursor: pointer"
              color="#f50"
              v-show="text == 0"
              @click="refused(record)"
              >拒绝</a-tag
            >
          </div>


          
          <div slot="lastOperation" slot-scope="text, record">
            <a-tag
              color="blue"
              @click="seeDetail(record)"
              style="cursor: pointer"
              >查看详情
            </a-tag>
          </div>
        </a-table>
      </div>
    </div>

    <!--提现确认弹框 -->
    <div>
      <a-modal
        v-model="showDialog"
        title="身份认证"
        @ok="handleOk"
        @cancel="cancelBtn"
        centered
        cancelText="取消"
        okText="确定"
      >
        <div>
          <a-input
            ref="userNameInput"
            v-model="paypwd"
            placeholder="请输入支付密码"
            :maxLength="6"
          >
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </div>
      </a-modal>
    </div>

    <!-- 底部分页操作 -->
    <div style="border: 1px solid gold; text-align: center">
      <a-pagination
        :default-current="current"
        :total="totalPage"
        @change="showSizeChange"
      />
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: "5rem",
  },
  {
    title: "登录号码",
    dataIndex: "phone",
    key: "phone",
    align: "center",
    width: "4rem",
  },
  {
    title: "用户昵称",
    dataIndex: "realName",
    key: "realName",
    align: "center",
    width: "4rem",
  },
  {
    title: "出金金额",
    dataIndex: "outMoney",
    key: "outMoney",
    align: "center",
    width: "4rem",
  },
  {
    title: "手续费",
    dataIndex: "tip",
    key: "tip",
    width: "3rem",
    align: "center",
  },
  {
    title: "实际到账",
    dataIndex: "arriveMoney",
    key: "arriveMoney",
    width: "3rem",
    align: "center",
  },
  {
    title: "申请时间",
    dataIndex: "createTime",
    key: "createTime",
    width: "5rem",
    align: "center",
  },
  {
    title: "审核时间",
    dataIndex: "updateTime",
    key: "updateTime",
    width: "5rem",
    align: "center",
  },
  {
    title: "审核人",
    dataIndex: "updateBy",
    key: "updateBy",
    width: "3rem",
    align: "center",
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state  ",
    width: "2rem",
    align: "center",
    scopedSlots: { customRender: "outState" },
  },
  {
    title: "操作",
    dataIndex: "lastOperation",
    key: "lastOperation",
    width: "3rem",
    align: "center",
    scopedSlots: { customRender: "lastOperation" },
  },
];

import { pageWithdrawal } from "./operateFunc";
import { checkWithdrawal } from "../../../network/apiFunc";
import MaskView from "@/components/maskView.vue";
export default {
  data() {
    return {
      data: [],
      columns,

      // 入金总数
      moneyTotal: 0,
      // 入金笔数
      inTotal: 0,
      // 总计条数
      total: 0,
      // 手续费总计
      tipTotal: 0,
      // 到账总计
      arriveMoneyTotal: 0,

      // 查看详情弹框
      showDialog: false,

      // 支付密码
      paypwd: "",

      // 操作itme
      operationItem: "",

      // 当前页和分页总数
      current: 1,
      totalPage: 0,

      // 刷新状态
      refreshIcon: "reload",
    };
  },
  mounted() {
    pageWithdrawal(10, 1).then((res) => {
      if (res.code == 1) {
        console.log("用户提现记录", res.data);
        this.data = res.data;
        this.moneyTotal = res.moneyTotal;
        this.tipTotal = res.tipTotal;
        this.total = res.total;
        this.moneyTotal = res.moneyTotal;
        this.arriveMoneyTotal = res.arriveMoneyTotal;

        this.totalPage = res.pages;
      }
    });
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    // 查看详情
    seeDetail(record) {
      console.log("record=", record);
    },

    // 提现通过
    through(record) {
      this.showDialog = true;
      this.operationItem = record;
      this.operationItem.memo = 1;
      this.paypwd = "";
    },

    // 提现拒绝
    refused(record) {
      this.showDialog = true;
      this.operationItem = record;
      this.operationItem.memo = -1;
      this.paypwd = "";
    },

    // 弹窗事件
    handleOk() {
      // 校验支付密码不能为空
      if (this.paypwd != "") {
        let data = {
          adminId: localStorage.getItem("adminID"),
          paypwd: this.paypwd,
          id: this.operationItem.id,
          state: this.operationItem.memo,
          updateBy: localStorage.getItem("username"),
        };

        checkWithdrawal(data).then((res) => {
          if (res.code == 1) {
            setTimeout(() => {
              this.$message.success("操作成功");
            }, 1000);

            // 重新获取提现记录
            pageWithdrawal(10, 1).then((res) => {
              if (res.code == 1) {
                this.data = res.data;
                this.moneyTotal = res.moneyTotal;
                this.tipTotal = res.tipTotal;
                this.total = res.total;
                this.moneyTotal = res.moneyTotal;
                this.arriveMoneyTotal = res.arriveMoneyTotal;

                this.totalPage = res.pages;
              }
            });
            this.showDialog = false;
          } else {
            setTimeout(() => {
              this.$message.error("操作失败");
            }, 1000);
            this.showDialog = false;
          }
        });
      } else {
        this.$message.warning("支付密码不能为空");
      }
    },

    cancelBtn() {
      this.showDialog = false;
      console.log(this.operationItem);
    },

    // 分页事件
    showSizeChange(index) {
      pageWithdrawal(10, index).then((res) => {
        if (res.code == 1) {
          console.log("用户提现记录", res.data);
          this.data = res.data;
          this.moneyTotal = res.moneyTotal;
          this.tipTotal = res.tipTotal;
          this.total = res.total;
          this.moneyTotal = res.moneyTotal;
          this.arriveMoneyTotal = res.arriveMoneyTotal;

          // 总页数
          this.totalPage = res.pages;
        } else {
          this.$message.error("获取失败，请稍后重试");
        }
      });
    },

    // 刷新重新加载
    refresh() {
      console.log("刷新");
      this.refreshIcon = "loading";

      this.current = 1;

      pageWithdrawal(10, 1).then((res) => {
        if (res.code == 1) {
          console.log("用户提现记录", res.data);
          this.data = res.data;
          this.moneyTotal = res.moneyTotal;
          this.tipTotal = res.tipTotal;
          this.total = res.total;
          this.moneyTotal = res.moneyTotal;
          this.arriveMoneyTotal = res.arriveMoneyTotal;

          this.totalPage = res.pages;

          this.refreshIcon = "reload";

          setTimeout(() => {
            this.$message.success("刷新成功");
          }, 1000);
        }
      });
    },
  },
  components: { MaskView },
};
</script>

<style>
.flatorderTable.ant-table-tbody > tr > td {
  padding: 0.3rem;
}

.flatorderTable.ant-table-thead > tr > th {
  padding: 0.5rem;
}
.tableOutPage {
  border: 1px solid rgb(47, 0, 255);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.tableOutPageTop {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  flex: 0 0 5%;
}
.tableOutPageTop > div {
  margin: 0 0.8rem;
}

.tabtopRight {
  /* border: 1px solid green; */
  display: flex;
}

.tabtopRight > div {
  /* border: 1px solid tomato; */
  display: flex;
  margin: 0 0.2rem;
}

.headerOperation {
  margin-top: 10px;
  border: 1px solid red;
  flex: 0 0 90%;
  background-color: #f5fafe;
}

.tabData {
  border: 1px solid green;
}

.lastUserBtn {
  display: flex;
  justify-content: center;
}
/* 弹框样式 */

.modelStyle {
  border: 1px solid green;
  height: 100%;
}

.gutter-row {
  display: flex;
  background-color: pink;
  justify-content: center;
}
</style>