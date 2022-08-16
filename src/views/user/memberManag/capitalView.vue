<template>
  <div class="settlementPage">
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
            <a-select-option value="状态"> 状态 </a-select-option>
            <a-select-option value="正常"> 正常 </a-select-option>
            <a-select-option value="禁用"> 禁用 </a-select-option>
          </a-select>
        </div>
        <div style="margin-left: 10px">
          <a-button type="primary" icon="search" size="small"> 搜索 </a-button>
        </div>
        <div style="margin-left: 10px">
          <a-button type="primary" icon="sync" size="small"> 刷新 </a-button>
        </div>
      </div>
    </div>
    <div class="settlementDown">
      <!-- 表头操作 -->
      <div
        style="
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin: 0.5rem 0;
          color: #333333;
          padding: 0 3rem;
        "
      >
        <p>共有数据：</p>
        <p style="font-weight: bold">12312条</p>
      </div>
      <!-- 表格数据 -->
      <div class="tabData">
        <a-table
          bordered
          :columns="columns"
          :data-source="data"
          :pagination="false"
        >
          <a-tag color="green" slot="memberState"> 正常 </a-tag>
          <div slot="operation">
            <a-button type="primary" size="small"> 入金 </a-button>
            <a-button type="danger" size="small" style="margin-left: 6px">
              扣除
            </a-button>
          </div>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
    align: "center",
    width: "3rem",
  },
  {
    title: "登录名",
    dataIndex: "loginNum",
    key: "loginNum",
    align: "center",
    width: "8rem",
  },
  {
    title: "昵称",
    dataIndex: "nickName",
    key: "nickName",
    align: "center",
    width: "6rem",
  },
  {
    title: "手机号",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    align: "center",
    width: "8rem",
  },
  {
    title: "账户余额",
    dataIndex: "balance",
    key: "balance",
    align: "center",
    width: "8rem",
  },
  {
    title: "注册时间",
    dataIndex: "createTime",
    key: "createTime",
    align: "center",
    width: "8rem",
  },
  {
    title: "状态",
    dataIndex: "memberState",
    key: "memberState",
    align: "center",
    width: "8rem",
    scopedSlots: { customRender: "memberState" },
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    align: "center",
    width: "8rem",
    scopedSlots: { customRender: "operation" },
  },
];

const data = [
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    nickName: "江小白",
    phoneNumber: "18213445566",
    balance: "0.00",
    createTime: "2022-06-05 11:26:22",
  },
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    nickName: "江小白",
    phoneNumber: "18213445566",
    balance: "0.00",
    createTime: "2022-06-05 11:26:22",
  },
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    nickName: "江小白",
    phoneNumber: "18213445566",
    balance: "0.00",
    createTime: "2022-06-05 11:26:22",
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
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
</style>