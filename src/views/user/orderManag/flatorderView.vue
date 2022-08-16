<template>
  <div class="settlementPage">
    <div class="settlementTop">
      <div><a-input size="small" placeholder="策略ID" /></div>
      <div><a-input size="small" placeholder="昵称" /></div>
      <div><a-input size="small" placeholder="手机号" /></div>
      <div><a-input size="small" placeholder="股票代码" /></div>
      <div><a-input size="small" placeholder="股票名称" /></div>
      <div><a-input size="small" placeholder="结算中心" /></div>
      <div><a-input size="small" placeholder="运营中心" /></div>

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
        <div style="display: flex; color: #008000">
          <p>建仓费总计：</p>
          <p style="font-weight: bold">&#165;123432423412</p>
        </div>
        <div style="display: flex; color: #ffa500">
          <p>递延费总计：</p>
          <p style="font-weight: bold">&#165;123432423412</p>
        </div>
        <div style="display: flex; color: #ffa500">
          <p>盈亏总计：</p>
          <p style="font-weight: bold">&#165;123432423412</p>
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
        >
          <div slot="lastOperation">
            <a-tag color="#5a98de">详情</a-tag>
            <a-tag color="#5e9b5e">返点</a-tag>
          </div>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "策略ID",
    dataIndex: "ID",
    key: "ID",
    align: "center",
    width: "3rem",
  },
  {
    title: "昵称",
    dataIndex: "nickName",
    key: "nickName",
    align: "center",
    width: "3rem",
  },
  {
    title: "手机号",
    dataIndex: "phoneNum",
    key: "phoneNum",
    align: "center",
    width: "4rem",
  },

  {
    title: "股票代码",
    dataIndex: "stockCode",
    key: "stockCode",
    align: "center",
    width: "3rem",
  },

  {
    title: "股票名称",
    dataIndex: "stockName",
    key: "stockName",
    align: "center",
    width: "4rem",
  },
  {
    title: "买入价",
    dataIndex: "buyPrice",
    key: "buyPrice",
    width: "3rem",
    align: "center",
  },
  {
    title: "卖出价",
    dataIndex: "sellPrice",
    key: "sellPrice",
    width: "3rem",
    align: "center",
  },
  {
    title: "卖出数量",
    dataIndex: "sellNums",
    key: "sellNums",
    width: "3rem",
    align: "center",
  },
  {
    title: "保证金",
    dataIndex: "ensurePrice",
    key: "ensurePrice",
    width: "3rem",
    align: "center",
  },
  {
    title: "盈亏",
    dataIndex: "WinLose",
    key: "WinLose",
    width: "3rem",
    align: "center",
  },
  {
    title: "穿仓金额",
    dataIndex: "passMoney",
    key: "passMoney",
    width: "4rem",
    align: "center",
  },
  {
    title: "买入时间",
    dataIndex: "buyTime",
    key: "buyTime",
    width: "5rem",
    align: "center",
  },
  {
    title: "交易模式",
    dataIndex: "transMode",
    key: "transMode",
    width: "5rem",
    align: "center",
  },
  {
    title: "卖出时间",
    dataIndex: "sellTime",
    key: "sellTime",
    width: "5rem",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "lastOperation",
    key: "lastOperation",
    width: "7rem",
    align: "center",
    scopedSlots: { customRender: "lastOperation" },
  },
];

const data = [
  {
    key: "1",
    ID: "1",
    nickName: "金色3699",
    phoneNum: "16635003699",
    stockCode: "600611	",
    stockName: "大众交通",
    buyPrice: "3.19	",
    sellPrice: "3.14",
    sellNums: "10000",
    ensurePrice: "0.00",
    WinLose: "-500.00",
    passMoney: "-500.00	",
    buyTime: "2022-06-02 13:56",
    transMode: "自动延续",
    sellTime: "2022-06-06 11:29",
    strOperate: "操作",
  },
  {
    key: "1",
    ID: "1",
    nickName: "金色3699",
    phoneNum: "16635003699",
    stockCode: "600611	",
    stockName: "大众交通",
    buyPrice: "3.19	",
    sellPrice: "3.14",
    sellNums: "10000",
    ensurePrice: "0.00",
    WinLose: "-500.00",
    passMoney: "-500.00	",
    buyTime: "2022-06-02 13:56",
    transMode: "自动延续",
    sellTime: "2022-06-06 11:29",
    strOperate: "操作",
  },
  {
    key: "1",
    ID: "1",
    nickName: "金色3699",
    phoneNum: "16635003699",
    stockCode: "600611	",
    stockName: "大众交通",
    buyPrice: "3.19	",
    sellPrice: "3.14",
    sellNums: "10000",
    ensurePrice: "0.00",
    WinLose: "-500.00",
    passMoney: "-500.00	",
    buyTime: "2022-06-02 13:56",
    transMode: "自动延续",
    sellTime: "2022-06-06 11:29",
    strOperate: "操作",
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
.flatorderTable.ant-table-tbody > tr > td {
  padding: 0.3rem;
}

.flatorderTable.ant-table-thead > tr > th {
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