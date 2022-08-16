<template>
  <div class="tableOutPage">
    <div class="tableOutPageTop">
      <div><a-input size="small" placeholder="股票代码" /></div>
      <div><a-input size="small" placeholder="股票昵称" /></div>

      <div style="display: flex; align-items: center">
        <div style="margin-left: 10px">
          <a-button type="primary" icon="search" size="small"> 搜索 </a-button>
        </div>
        <div style="margin-left: 10px">
          <a-button type="primary" icon="sync" size="small"> 刷新 </a-button>
        </div>
        <div style="margin-left: 10px">
          <a-button type="primary" icon="plus" size="small">
            添加新股
          </a-button>
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
      ></div>
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
            <a-tag color="red">删除 </a-tag>
            <a-tag color="blue">编辑</a-tag>
          </div>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "申购代码",
    dataIndex: "buyCode",
    key: "buyCode",
    align: "center",
    width: "5rem",
  },
  {
    title: "股票代码",
    dataIndex: "stockCode",
    key: "stockCode",
    align: "center",
    width: "3rem",
  },
  {
    title: "股票代码(包括交易所)",
    dataIndex: "stockExchange",
    key: "stockExchange",
    align: "center",
    width: "6rem",
  },

  {
    title: "股票名称",
    dataIndex: "stockName",
    key: "stockName",
    align: "center",
    width: "3rem",
  },

  {
    title: "发行价格",
    dataIndex: "releasePrice",
    key: "releasePrice",
    align: "center",
    width: "4rem",
  },
  {
    title: "申购价格",
    dataIndex: "applyPrice",
    key: "applyPrice",
    width: "3rem",
    align: "center",
  },
  {
    title: "最新申购",
    dataIndex: "lowApply",
    key: "lowApply",
    width: "3rem",
    align: "center",
  },
  {
    title: "申购时间",
    dataIndex: "applyTime",
    key: "applyTime",
    width: "5rem",
    align: "center",
  },
  {
    title: "上市时间",
    dataIndex: "matureTime",
    key: "matureTime",
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
    buyCode: "测试",
    stockCode: "sz001268",
    stockExchange: "sz001268",
    stockName: "测试	",
    releasePrice: "100.00",
    applyPrice: "200",
    lowApply: "50",
    applyTime: "2022-06-06 11:29",
    matureTime: "2022-06-30",
  },
  {
    key: "2",
    buyCode: "爆发",
    stockCode: "sz001268",
    stockExchange: "sz001268",
    stockName: "测试	",
    releasePrice: "100.00",
    applyPrice: "200",
    lowApply: "50",
    applyTime: "2022-06-06 11:29",
    matureTime: "2022-06-30",
  },
  {
    key: "3",
    buyCode: "测试",
    stockCode: "sz001268",
    stockExchange: "sz001268",
    stockName: "测试	",
    releasePrice: "100.00",
    applyPrice: "200",
    lowApply: "50",
    applyTime: "2022-06-06 11:29",
    matureTime: "2022-06-30",
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
    // 查看详情
    seeDetail(record) {
      console.log("record=", record);
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
</style>