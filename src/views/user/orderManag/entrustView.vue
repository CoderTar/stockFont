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
      ></div>
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
    title: "策略ID",
    dataIndex: "ID",
    key: "ID",
    align: "center",
    width: "3rem",
  },
  {
    title: "类型",
    dataIndex: "strType",
    key: "strType",
    align: "center",
    width: "5rem",
  },
  {
    title: "昵称",
    dataIndex: "strName",
    key: "strategyName",
    align: "center",
    width: "5rem",
  },

  {
    title: "手机号",
    dataIndex: "strNum",
    key: "strNum",
    align: "center",
    width: "5rem",
  },

  {
    title: "股票代码",
    dataIndex: "strCode",
    key: "strCode",
    align: "center",
    width: "5rem",
  },
  {
    title: "股票昵称",
    dataIndex: "strCodeName",
    key: "strCodeName",
    align: "center",
    width: "5rem",
  },
  {
    title: "买入价",
    dataIndex: "strBuy",
    key: "strBuy",
    align: "center",
    width: "5rem",
  },
  {
    title: "卖出价",
    dataIndex: "strSell",
    key: "strSell",
    width: "5rem",
    align: "center",
  },
  {
    title: "委托数量",
    dataIndex: "strCount",
    key: "strCount",
    width: "5rem",
    align: "center",
  },
  {
    title: "实际数量",
    dataIndex: "actualCount",
    key: "actualCount",
    width: "5rem",
    align: "center",
  },
  {
    title: "委托状态",
    dataIndex: "srtState",
    key: "srtState",
    width: "5rem",
    align: "center",
  },
  {
    title: "委托单号",
    dataIndex: "srtOrder",
    key: "srtOrder",
    width: "5rem",
    align: "center",
  },
  {
    title: "保证金",
    dataIndex: "strEnsure",
    key: "strEnsure",
    width: "5rem",
    align: "center",
  },
  {
    title: "盈亏",
    dataIndex: "strPl",
    key: "strPl",
    width: "5rem",
    align: "center",
  },
  {
    title: "交易模式",
    dataIndex: "strMode",
    key: "strMode",
    width: "5rem",
    align: "center",
  },
  {
    title: "委托时间",
    dataIndex: "strTime",
    key: "strTime",
    width: "5rem",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "strOperate",
    key: "strOperate",
    width: "5rem",
    align: "center",
  },
];

const data = [
  {
    key: "1",
    ID: "1",
    strType: "默认",
    strName: "默认",
    strNum: "123",
    strCode: "234444",
    strCodeName: "茅台",
    strBuy: "1222",
    strSell: "-111",
    strCount: 123,
    actualCount: "测试",
    srtState: "默认",
    srtOrder: "订单",
    strEnsure: "测试",
    strPl: "pl",
    strMode: "吃啥",
    strTime: "时间",
    strOperate: "操作",
  },
  {
    key: "1",
    ID: "1",
    strType: "默认",
    strName: "默认",
    strNum: "123",
    strCode: "234444",
    strCodeName: "茅台",
    strBuy: "1222",
    strSell: "-111",
    strCount: 123,
    actualCount: "测试",
    srtState: "默认",
    srtOrder: "订单",
    strEnsure: "测试",
    strPl: "pl",
    strMode: "吃啥",
    strTime: "时间",
    strOperate: "操作",
  },
  {
    key: "1",
    ID: "1",
    strType: "默认",
    strName: "默认",
    strNum: "123",
    strCode: "234444",
    strCodeName: "茅台",
    strBuy: "1222",
    strSell: "-111",
    strCount: 123,
    actualCount: "测试",
    srtState: "默认",
    srtOrder: "订单",
    strEnsure: "测试",
    strPl: "pl",
    strMode: "吃啥",
    strTime: "时间",
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