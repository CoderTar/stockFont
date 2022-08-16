<template>
  <div class="settlementPage">
    <div class="settlementTop">
      <div><a-input size="small" placeholder="策略ID" /></div>
      <div><a-input size="small" placeholder="昵称" /></div>
      <div><a-input size="small" placeholder="手机号" /></div>
      <div><a-input size="small" placeholder="股票代码" /></div>
      <div><a-input size="small" placeholder="股票名称" /></div>

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
        <div style="display: flex; color: #0000ff">
          <p>保证金总计：</p>
          <p style="font-weight: bold">&#165;123432423412</p>
        </div>
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
          class="positionTable"
          bordered
          :columns="columns"
          :data-source="data"
          :pagination="false"
        >
          <div slot="lastOperation">
            <a-tag color="#dd514c">平仓</a-tag>
            <a-tag color="#5a98de">详情</a-tag>
            <a-tag color="#5e9b5e">返点</a-tag>
            <a-tag color="#f37b1d">送股</a-tag>
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
    width: "4rem",
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
    width: "5rem",
  },

  {
    title: "股票代码",
    dataIndex: "stockCode",
    key: "stockCode",
    align: "center",
    width: "5rem",
  },

  {
    title: "股票名称",
    dataIndex: "stockName",
    key: "stockName",
    align: "center",
    width: "5rem",
  },
  {
    title: "委托价",
    dataIndex: "entrustPrice",
    key: "entrustPrice",
    align: "center",
    width: "4rem",
  },
  {
    title: "委托数",
    dataIndex: "entrustNum",
    key: "entrustNum",
    align: "center",
    width: "4rem",
  },
  {
    title: "委托单号",
    dataIndex: "entrustOrder",
    key: "entrustOrder",
    width: "5rem",
    align: "center",
  },
  {
    title: "成交价",
    dataIndex: "transPrice",
    key: "transPrice",
    width: "4rem",
    align: "center",
  },
  {
    title: "成交数量",
    dataIndex: "transNums",
    key: "transNums",
    width: "5rem",
    align: "center",
  },
  {
    title: "现价",
    dataIndex: "nowPrice",
    key: "nowPrice",
    width: "3rem",
    align: "center",
  },
  {
    title: "保证金",
    dataIndex: "ensurePrice",
    key: "ensurePrice",
    width: "4rem",
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
    title: "市值",
    dataIndex: "marketValue",
    key: "marketValue",
    width: "3rem",
    align: "center",
  },
  {
    title: "止损",
    dataIndex: "stopLoss",
    key: "stopLoss",
    width: "3rem",
    align: "center",
  },
  {
    title: "止盈",
    dataIndex: "stopWin",
    key: "stopWin",
    width: "3rem",
    align: "center",
  },
  {
    title: "建仓费",
    dataIndex: "storePrice",
    key: "storePrice",
    width: "4rem",
    align: "center",
  },
  {
    title: "递延费/天",
    dataIndex: "passDayPrice",
    key: "passDayPrice",
    width: "5rem",
    align: "center",
  },
  {
    title: "递延费合计",
    dataIndex: "deferredTotal",
    key: "deferredTotal",
    width: "5rem",
    align: "center",
  },
  {
    title: "下单时间",
    dataIndex: "orderTime",
    key: "orderTime",
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
    title: "免息截止日",
    dataIndex: "endTime",
    key: "endTime",
    width: "5rem",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "lastOperation",
    key: "lastOperation",
    width: "13rem",
    align: "center",
    scopedSlots: { customRender: "lastOperation" },
  },
];

const data = [
  {
    key: "1",
    ID: "1",
    nickName: "默认",
    phoneNum: "默认",
    stockCode: "123",
    stockName: "234444",
    entrustPrice: "茅台",
    entrustNum: "1222",
    entrustOrder: "-111",
    transPrice: 123,
    transNums: "测试",
    nowPrice: "默认",
    ensurePrice: "订单",
    WinLose: "测试",
    marketValue: "pl",
    stopLoss: "吃啥",
    stopWin: "时间",
    storePrice: "操作",
    passDayPrice: "23213",
    deferredTotal: "2312",
    orderTime: "343",
    transMode: 123,
    endTime: "shij",
  },
  {
    key: "1",
    ID: "1",
    nickName: "默认",
    phoneNum: "默认",
    stockCode: "123",
    stockName: "234444",
    entrustPrice: "茅台",
    entrustNum: "1222",
    entrustOrder: "-111",
    transPrice: 123,
    transNums: "测试",
    nowPrice: "默认",
    ensurePrice: "订单",
    WinLose: "测试",
    marketValue: "pl",
    stopLoss: "吃啥",
    stopWin: "时间",
    storePrice: "操作",
    passDayPrice: "23213",
    deferredTotal: "2312",
    orderTime: "343",
    transMode: 123,
    endTime: "shij",
  },
  {
    key: "1",
    ID: "1",
    nickName: "默认",
    phoneNum: "默认",
    stockCode: "123",
    stockName: "234444",
    entrustPrice: "茅台",
    entrustNum: "1222",
    entrustOrder: "-111",
    transPrice: 123,
    transNums: "测试",
    nowPrice: "默认",
    ensurePrice: "订单",
    WinLose: "测试",
    marketValue: "pl",
    stopLoss: "吃啥",
    stopWin: "时间",
    storePrice: "操作",
    passDayPrice: "23213",
    deferredTotal: "2312",
    orderTime: "343",
    transMode: 123,
    endTime: "shij",
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
.positionTable.ant-table-tbody > tr > td {
  padding: 0.3rem;
  font-size: 0.6rem;
}

.positionTable.ant-table-thead > tr > th {
  padding: 0.5rem;
  font-size: 0.5rem;
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