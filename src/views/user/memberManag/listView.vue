<template>
  <div class="settlementPage">
    <MaskView v-show="$store.state.loadingState" tip="加载中"></MaskView>
    <div class="settlementTop">
      <div><a-input size="small" placeholder="登录名" /></div>
      <div><a-input size="small" placeholder="昵称" /></div>
      <div><a-input size="small" placeholder="手机号" /></div>
      <div style="display: flex; align-items: center">
        <div>
          <a-select
            default-value="状态"
            style="width: 120px"
            @change="handleChange"
            size="small"
          >
            <a-select-option value="正常"> 正常 </a-select-option>
            <a-select-option value="禁用"> 禁用 </a-select-option>
            <a-select-option value="待审核"> 待审核 </a-select-option>
          </a-select>
        </div>
        <div style="margin-left: 10px">
          <a-button type="primary" icon="search" size="small"> 搜索 </a-button>
        </div>
        <div style="margin-left: 10px">
          <a-button type="primary" icon="sync" size="small" @click="refresh">
            刷新
          </a-button>
        </div>
      </div>
    </div>
    <div class="settlementDown">
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
        <div style="display: flex">
          <p>余额总计：</p>
          <p style="font-weight: bold; color: #0000ff">{{ moneyTotal }}</p>
        </div>
        <div style="display: flex">
          <p>共有数据：</p>
          <p style="font-weight: bold">{{ totalList }}条</p>
        </div>
      </div>
      <!-- 表格数据 -->
      <div class="tabData">
        <a-table
          bordered
          :columns="columns"
          :data-source="data"
          :pagination="false"
          :rowKey="(record, index) => record.user_id"
        >
          <div slot="interior" slot-scope="text">
            <a-tag color="#dd514c" v-show="text == 1">内部账户 </a-tag>
            <a-tag color="#5eb95e" v-show="text == 0">会员账户 </a-tag>
          </div>

          <div slot="memberState" slot-scope="text, record">
            <a-switch
              :defaultChecked="1 == text ? true : false"
              @change="onChange(record, $event)"
              checked-children="开"
              un-checked-children="关"
              size="small"
            />
          </div>

          <div slot="operation" class="lastUserBtn" slot-scope="text, record">
            <a-tag
              style="cursor: pointer"
              color="#dd514c"
              slot="userType"
              @click="deleteByid(record)"
              >删除</a-tag
            >
            <a-tag style="cursor: pointer" color="#5a98de" slot="userType"
              >编辑</a-tag
            >
            <a-tag color="#5eb95e" slot="userType">详情</a-tag>

            <a-tag
              style="cursor: pointer"
              color="#f37b1d"
              slot="userType"
              @click="updateUserPwd(record)"
              >密码</a-tag
            >
            <a-tag color="#dd514c" slot="userType">解绑</a-tag>
            <a-tag color="#3bb4f2" slot="userType">API</a-tag>
          </div>
        </a-table>
      </div>
    </div>

    <!-- 底部分页操作 -->
    <div style="border: 1px solid gold; text-align: center">
      <a-pagination
        :current="current"
        :total="totalPage"
        @change="showSizeChange"
      />
    </div>

    <!-- 修改密码弹框 -->
    <div>
      <a-modal
        width="20%"
        v-model="showDialog"
        centered
        title="修改密码"
        okText="确定"
        cancelText="取消"
        @cancel="cancel"
        @ok="ok"
      >
        <a-input
          ref="userNameInput"
          v-model="newPwd"
          placeholder="输入新密码"
          :maxLength="10"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input>
      </a-modal>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "ID",
    dataIndex: "user_id",
    key: "user_id",
    align: "center",
    width: "5rem",
  },
  {
    title: "登录名",
    dataIndex: "userName",
    key: "userName",
    align: "center",
    width: "6rem",
  },
  {
    title: "账户类型",
    dataIndex: "interior",
    key: "interior",
    align: "center",
    width: "5rem",
    scopedSlots: { customRender: "interior" },
  },
  {
    title: "昵称",
    dataIndex: "nickName",
    key: "nickName",
    align: "center",
    width: "6rem",
  },
  // {
  //   title: "姓名",
  //   dataIndex: "realName",
  //   key: "realName",
  //   align: "center",
  //   width: "4rem",
  // },
  // {
  //   title: "手机号",
  //   dataIndex: "phoneNumber",
  //   key: "phoneNumber",
  //   align: "center",
  //   width: "6rem",
  // },
  // {
  //   title: "API比例",
  //   dataIndex: "apiPro",
  //   key: "apiPro",
  //   align: "center",
  //   width: "3rem",
  // },
  {
    title: "账户余额",
    dataIndex: "account",
    key: "account",
    align: "center",
    width: "6rem",
  },
  {
    title: "注册时间",
    dataIndex: "create_time",
    key: "create_time",
    align: "center",
    width: "8rem",
  },
  {
    title: "账号状态",
    dataIndex: "state",
    key: "memberState",
    align: "center",
    width: "4rem",
    scopedSlots: { customRender: "memberState" },
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    width: "20rem",
    align: "center",
    scopedSlots: { customRender: "operation" },
  },
];

import { PageAlluser } from "./operateFunc";
import MaskView from "@/components/maskView.vue";

import {
  updateUserState,
  deleteUser,
  updateUserPwd,
} from "./../../../network/apiFunc";
export default {
  data() {
    return {
      data: [],
      columns,

      // 活跃页/总页数/余额总计/总条数
      current: 1,
      totalPage: 0,
      moneyTotal: 0,
      totalList: 0,

      // 修改密码弹框
      showDialog: false,
      // 修改的id和新密码
      newPwd: "",
      updateId: "",
    };
  },
  mounted() {
    PageAlluser(10, 1).then((res) => {
      if (res.code == 1) {
        console.log("会员列表", res);
        this.data = res.data;
        this.totalPage = res.pages;
        this.moneyTotal = res.moneyTotal;
        this.totalList = res.total;
      } else {
        setTimeout(() => {
          this.$message.error("请稍后重试");
        }, 1000);
      }
    });
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },

    // 用户状态开启或关闭
    onChange(value, state) {
      let data = {
        id: value.user_id,
        state: null,
      };

      if (state) {
        data.state = 1;
      } else {
        data.state = 0;
      }
      updateUserState(data).then((res) => {
        if (res.code == 1) {
          setTimeout(() => {
            this.$message.success("修改成功");
          }, 1000);
        } else {
          setTimeout(() => {
            this.$message.error("请稍后重试");
          }, 1000);
        }
      });
    },

    // 分页事件
    showSizeChange(index) {
      console.log("index", index);

      PageAlluser(10, index).then((res) => {
        if (res.code == 1) {
          console.log("会员列表", res);
          this.data = res.data;
          this.totalPage = res.pages;
          this.moneyTotal = res.moneyTotal;
          this.totalList = res.total;

          this.current = index;
        } else {
          setTimeout(() => {
            this.$message.error("请稍后重试");
          }, 1000);
        }
      });
    },

    // 刷新事件
    refresh() {
      PageAlluser(10, 1).then((res) => {
        if (res.code == 1) {
          console.log("会员列表", res);
          this.data = res.data;
          this.totalPage = res.pages;
          this.moneyTotal = res.moneyTotal;
          this.totalList = res.total;

          this.current = 1;

          setTimeout(() => {
            this.$message.success("刷新成功");
          }, 1000);
        } else {
          setTimeout(() => {
            this.$message.error("请稍后重试");
          }, 1000);
        }
      });
    },

    // 删除某个会员
    deleteByid(item) {
      let that = this;
      this.$confirm({
        title: "是否确定永久删除该账号?",
        content: `《${item.nickName}》`,
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        centered: true,
        onOk() {
          deleteUser(item.user_id).then((res) => {
            if (res.code == 1) {
              // 账号删除后重新获取
              PageAlluser(10, 1).then((res) => {
                if (res.code == 1) {
                  console.log("会员列表", res);
                  that.data = res.data;
                  that.totalPage = res.pages;
                  that.moneyTotal = res.moneyTotal;
                  that.totalList = res.total;

                  this.current = 1;
                }
              });

              setTimeout(() => {
                that.$message.success("账号删除成功");
              }, 1000);
            } else {
              setTimeout(() => {
                that.$message.error("删除失败请稍后重试!");
              }, 1000);
            }
          });
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },

    // 修改会员密码
    updateUserPwd(value) {
      console.log("value", value);

      this.updateId = value.user_id;
      this.showDialog = true;
      this.newPwd = "";
    },
    // 确定修改
    ok() {
      // 校验是否为空
      if (this.newPwd != "") {
        // 校验密码不能少于六位
        if (this.newPwd.length >= 6) {
          console.log("确定修改", this.newPwd.length);

          let data = {
            id: this.updateId,
            newPwd: this.newPwd,
          };
          this.showDialog = false;
          updateUserPwd(data).then((res) => {
            if (res.code == 1) {
              setTimeout(() => {
                this.$message.success("密码修改成功");
              }, 1000);

              this.newPwd = "";
            } else {
              setTimeout(() => {
                this.$message.error("密码修改失败");
              }, 1000);

              this.newPwd = "";
            }
          });
        } else {
          this.$message.error("密码不能少于六位");
          this.newPwd = "";
        }
      } else {
        this.$message.error("提交内容不能为空");
      }
    },
    cancel() {
      console.log("取消修改");
    },
  },
  components: { MaskView },
};
</script>

<style>
.ant-table-tbody > tr > td {
  padding: 0.3rem;
}

.ant-table-thead > tr > th {
  padding: 0.5rem;
}
.settlementPage {
  border: 1px solid rgb(47, 0, 255);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.settlementTop {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
  flex: 0 0 5%;
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

.settlementDown {
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
  /* border: 1px solid tomato; */
}
</style>