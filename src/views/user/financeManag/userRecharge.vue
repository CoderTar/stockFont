<template>
  <div class="tableOutPage">
    <MaskView v-show="$store.state.loadingState" tip="加载中"></MaskView>
    <div class="tableOutPageTop">
      <div><a-input size="small" placeholder="入金人" /></div>
      <div><a-input size="small" placeholder="手机号" /></div>
      <div><a-input size="small" placeholder="入金单号" /></div>
      <div><a-input size="small" placeholder="结算中心" /></div>
      <div><a-input size="small" placeholder="运营中心" /></div>
      <div>
        <a-select
          default-value="入金通道"
          style="width: 120px"
          @change="handleChange"
          size="small"
        >
          <a-select-option value="微信"> 微信</a-select-option>
          <a-select-option value="支付宝"> 支付宝 </a-select-option>
          <a-select-option value="银行卡"> 银行卡</a-select-option>
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
          <p>本页入金总计：</p>
          <p style="font-weight: bold">&#165;{{ moneyTotal }}</p>
        </div>
        <div style="display: flex; color: #ffa500">
          <p>总共入金：</p>
          <p style="font-weight: bold">{{ inTotal }}笔</p>
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
          <!-- 1.状态插槽 -->
          <div slot="inMoneyState" slot-scope="value">
            <p v-show="value == 1">已完成</p>
            <p v-show="value == -1">已拒绝</p>
            <p v-show="value == 0">待审核</p>
          </div>

          <!-- 2.尾部操作插槽 -->
          <div slot="lastOperation" slot-scope="text, record">
            <a-tag color="green" v-show="text == 1">已通过 </a-tag>
            <a-tag color="red" v-show="text == -1">已拒绝 </a-tag>
            <a-tag color="#87d068" v-show="text == 0" @click="through(record)"
              >通过</a-tag
            >
            <a-tag color="#f50" v-show="text == 0" @click="refused(record)"
              >拒绝</a-tag
            >
          </div>
        </a-table>
      </div>
    </div>

    <!-- 底部分页操作 -->
    <div style="border: 1px solid gold; text-align: center">
      <a-pagination
        :current="current"
        :total="total"
        @change="showSizeChange"
      />
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "充值编号",
    dataIndex: "id",
    key: "rechargeID",
    align: "center",
    width: "4rem",
  },
  {
    title: "入金单号",
    dataIndex: "orderID",
    key: "orderID",
    align: "center",
    width: "7rem",
  },
  {
    title: "入金人",
    dataIndex: "realName",
    key: "inMoneyName",
    align: "center",
    width: "4rem",
  },
  {
    title: "入金状态",
    dataIndex: "state",
    key: "inMoneyState",
    align: "center",
    width: "3rem",
    scopedSlots: { customRender: "inMoneyState" },
  },

  {
    title: "手机号",
    dataIndex: "phone",
    key: "phone",
    align: "center",
    width: "4rem",
  },

  {
    title: "入金金额",
    dataIndex: "amount",
    key: "inPrice",
    align: "center",
    width: "4rem",
  },
  {
    title: "转账用户",
    dataIndex: "userName",
    key: "transferName",
    width: "3rem",
    align: "center",
  },
  {
    title: "入金通道",
    dataIndex: "inPort",
    key: "moneyPass",
    width: "3rem",
    align: "center",
  },
  {
    title: "入金时间",
    dataIndex: "createTime",
    key: "inMoneyTime",
    width: "6rem",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "state",
    key: "lastOperation",
    width: "7rem",
    align: "center",
    scopedSlots: { customRender: "lastOperation" },
  },
];

import { updateRecharge } from "@/network/apiFunc";
import { PageRecharge } from "./operateFunc";
import MaskView from "@/components/maskView.vue";
export default {
  data() {
    return {
      data: [],
      columns,
      userInfo: {},
      // 分页和总数
      current: 1,
      total: 0,
      // 入金总数
      moneyTotal: 0,
      // 入金笔数
      inTotal: 0,
      // 弹窗显示
      showAdtext: true,
      // 选页保留
      index: 1,

      // 刷新状态
      refreshIcon: "reload",
    };
  },
  mounted() {
    // 获取充值列表
    PageRecharge(10, 1).then((res) => {
      // console.log(res);
      if (res.code == 1) {
        this.data = res.data;

        this.inTotal = res.total;
        this.total = res.pages;
        this.moneyTotal = res.moneyTotal;
      } else {
        this.$message.error(`获取失败`);
      }
    });
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    // 分页事件
    showSizeChange(index) {
      this.index = index;
      PageRecharge(10, index).then((res) => {
        // console.log(res);
        if (res.code == 1) {
          this.data = res.data;
          this.inTotal = res.total;
          this.total = res.pages;
          this.moneyTotal = res.moneyTotal;

          this.current = index;
        } else {
          this.$message.error(`获取失败`);
        }
      });
    },
    // 通过申请
    through(record) {
      // 格式化金额
      let intPrice = 0;
      intPrice = record.amount.replace("¥", "");
      intPrice = intPrice.replace(",", "");

      var that = this;
      this.$confirm({
        title: "审核提示",
        content: `通过用户【${record.realName}】入金申请`,
        okText: "确定",
        cancelText: "取消",
        onOk() {
          let data = {
            id: record.id,
            state: 1,
            userID: record.userID,
            account: intPrice,
          };
          // 审核金融
          updateRecharge(data).then((res) => {
            if (res.code == 1) {
              PageRecharge(10, that.index).then((res) => {
                // console.log(res);
                if (res.code == 1) {
                  that.data = res.data;
                  that.inTotal = res.total;
                  that.total = res.pages;
                  that.moneyTotal = res.moneyTotal;
                } else {
                  that.$message.error(`获取失败`);
                }
              });
              setTimeout(() => {
                that.$message.success(`用户${record.realName}审核通过`);
              }, 300);
            } else {
              console.log("修改失败", res);
              setTimeout(() => {
                that.$message.error(`用户${record.realName}审核失败`);
              }, 300);
            }
          });
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },
    // 拒绝申请
    refused(record) {
      var that = this;
      this.$confirm({
        title: "审核提示",
        content: `拒绝用户【${record.realName}】入金申请`,
        okText: "确定",
        cancelText: "取消",
        onOk() {
          let data = {
            id: record.id,
            state: -1,
            userID: record.userID,
            account: 0,
          };
          updateRecharge(data).then((res) => {
            if (res.code == 1) {
              PageRecharge(10, that.index).then((res) => {
                // console.log(res);
                if (res.code == 1) {
                  that.data = res.data;
                  that.inTotal = res.total;
                  that.total = res.pages;
                  that.moneyTotal = res.moneyTotal;
                } else {
                  that.$message.error(`获取失败`);
                }
              });
              setTimeout(() => {
                that.$message.success(`用户${record.realName}拒绝通过`);
              }, 300);
            } else {
              console.log("修改失败", res);
              setTimeout(() => {
                that.$message.error(`用户${record.realName}审核失败`);
              }, 300);
            }
          });
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },

    // 重新加载刷新
    refresh() {
      console.log("刷新");
      this.refreshIcon = "loading";

      this.current = 1;

      // 获取充值列表
      PageRecharge(10, 1).then((res) => {
        // console.log(res);
        if (res.code == 1) {
          this.data = res.data;
          this.inTotal = res.total;
          this.total = res.pages;
          this.moneyTotal = res.moneyTotal;

          setTimeout(() => {
            this.refreshIcon = "reload";
            this.$notification["success"]({
              message: "刷新成功",
            });
          }, 300);
        } else {
          setTimeout(() => {
            this.refreshIcon = "reload";
            this.$notification["error"]({
              message: "刷新失败",
            });
          }, 300);
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
  background-color: white;
}

.tabData {
  border: 1px solid green;
}

.lastUserBtn {
  display: flex;
  justify-content: center;
}
</style>