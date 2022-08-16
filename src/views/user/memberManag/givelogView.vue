<template>
  <div class="settlementPage">
    <div class="settlementTop">
      <div><a-input size="small" placeholder="登录名" /></div>
      <div><a-input size="small" placeholder="手机号" /></div>
      <div style="display: flex; align-items: center">
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
          justify-content: space-evenly;
          align-items: center;
          margin: 0.5rem 0;
          color: #333333;
          padding: 0 3rem;
        "
      >
        <div style="display: flex">
          <p>入金总计：</p>
          <p style="font-weight: bold; color: #0000ff">123432423412&#165;</p>
        </div>
        <div style="display: flex">
          <p>入金记录：</p>
          <p style="font-weight: bold">123条</p>
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
    title: "用户ID",
    dataIndex: "userID",
    key: "userID",
    align: "center",
    width: "5rem",
  },
  {
    title: "登录名",
    dataIndex: "loginNum",
    key: "loginNum",
    align: "center",
    width: "6rem",
  },

  {
    title: "昵称",
    dataIndex: "nickName",
    key: "nickName",
    align: "center",
    width: "6rem",
  },

  {
    title: "入金余额",
    dataIndex: "inBalance",
    key: "inBalance",
    align: "center",
    width: "6rem",
  },
  {
    title: "入金时间",
    dataIndex: "inTime",
    key: "inTime",
    align: "center",
    width: "8rem",
  },
  {
    title: "入金人",
    dataIndex: "inName",
    key: "inName",
    align: "center",
    width: "1rem",
  },
  {
    title: "备注",
    dataIndex: "inMemo",
    key: "inMemo",
    width: "10rem",
    align: "center",
  },
];

const data = [
  {
    key: "1",
    ID: "1",
    userID: "BBC001",
    loginNum: "18213445566",
    nickName: "江小白",
    phoneNumber: "18213445566",
    inName: "张三",
    inBalance: "0.00",
    inTime: "2022-06-05 11:26:22",
    inMemo: "入金备注",
  },
  {
    key: "1",
    ID: "1",
    userID: "BBC001",
    loginNum: "18213445566",
    nickName: "江小白",
    phoneNumber: "18213445566",
    inName: "张三",
    inBalance: "0.00",
    inTime: "2022-06-05 11:26:22",
    inMemo: "入金备注",
  },
  {
    key: "1",
    ID: "1",
    userID: "BBC001",
    loginNum: "18213445566",
    nickName: "江小白",
    phoneNumber: "18213445566",
    inName: "张三",
    inBalance: "0.00",
    inTime: "2022-06-05 11:26:22",
    inMemo: "入金备注",
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
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  flex: 0 0 5%;
}
.settlementTop > div {
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
}
</style>