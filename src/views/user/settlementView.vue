<template>
  <div class="settlementPage">
    <div class="settlementTop">
      <div><a-input size="small" placeholder="登录名" /></div>
      <div><a-input size="small" placeholder="真名" /></div>
      <div><a-input size="small" placeholder="手机号" /></div>
      <div><a-input size="small" placeholder="上级管理" /></div>
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
      </div>
    </div>
    <div class="settlementDown">
      <!-- 表头操作 -->
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0.5rem 0;
        "
      >
        <div>
          <a-button type="primary" icon="search" size="small"
            >添加用户
          </a-button>
        </div>
        <div class="tabtopRight">
          <div style="color: #0000ff">
            <p>余额总计：&#165;</p>
            <p style="font-weight: bold">12312.00</p>
          </div>
          <div style="color: #008000">
            <p>提现总计：&#165;</p>
            <p style="font-weight: bold">12312.00</p>
          </div>
          <div style="color: #ffa500">
            <p>收入总计：&#165;</p>
            <p style="font-weight: bold">12312.00</p>
          </div>
          <div style="color: #333333">
            <p>共有数据：</p>
            <p style="font-weight: bold">12312条</p>
          </div>
        </div>
      </div>
      <!-- 表格数据 -->
      <div class="tabData">
        <a-table
          bordered
          :columns="columns"
          :data-source="data"
          :pagination="false"
        >
          <!-- < a slot="name" slot-scope="text">{{ text }}</a> -->
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
    title: "真名",
    dataIndex: "realName",
    key: "realName",
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
    title: "上级管理",
    dataIndex: "topAdmin",
    key: "topAdmin",
    align: "center",
    width: "8rem",
  },
  {
    title: "盈利(返)",
    dataIndex: "profitBack",
    key: "profitBack",
    align: "center",
    width: "8rem",
  },
];

const data = [
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    realName: "江小白",
    phoneNumber: "18213445566",
    topAdmin: "狄仁杰",
    profitBack: "2234132",
  },
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    realName: "江小白",
    phoneNumber: "18213445566",
    topAdmin: "狄仁杰",
    profitBack: "2234132",
  },
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    realName: "江小白",
    phoneNumber: "18213445566",
    topAdmin: "狄仁杰",
    profitBack: "2234132",
  },
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    realName: "江小白",
    phoneNumber: "18213445566",
    topAdmin: "狄仁杰",
    profitBack: "2234132",
  },
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    realName: "江小白",
    phoneNumber: "18213445566",
    topAdmin: "狄仁杰",
    profitBack: "2234132",
  },
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    realName: "江小白",
    phoneNumber: "18213445566",
    topAdmin: "狄仁杰",
    profitBack: "2234132",
  },
  {
    key: "1",
    ID: "1",
    loginNum: "18213445566",
    realName: "江小白",
    phoneNumber: "18213445566",
    topAdmin: "狄仁杰",
    profitBack: "2234132",
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