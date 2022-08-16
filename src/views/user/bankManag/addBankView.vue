<template>
  <div class="tableOutPage">
    <div class="tableOutPageTop">
      <div style="display: flex">
        <div style="margin-right: 1rem">
          <a-button type="primary" icon="plus" size="small">
            添加支付方式
          </a-button>
        </div>
        <div>
          <a-button type="primary" icon="sync" size="small"> 刷新 </a-button>
        </div>
      </div>
      <div style="color: black; display: flex; font-weight: bold">
        <p>共有数据：</p>
        <p>1231条</p>
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
            <a-tag color="gold">停用 </a-tag>
          </div>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "支付方式",
    dataIndex: "bankTitle",
    key: "bankTitle",
    align: "center",
    width: "5rem",
  },
  {
    title: "收款人",
    dataIndex: "collectionPerson",
    key: "collectionPerson",
    align: "center",
    width: "3rem",
  },
  {
    title: "银行卡账号",
    dataIndex: "bankCard",
    key: "bankCard",
    align: "center",
    width: "6rem",
  },

  {
    title: "开户银行",
    dataIndex: "openBank",
    key: "openBank",
    align: "center",
    width: "3rem",
  },

  {
    title: "开户支行",
    dataIndex: "bankTree",
    key: "bankTree",
    align: "center",
    width: "4rem",
  },
  {
    title: "状态",
    dataIndex: "cardState",
    key: "cardState",
    width: "3rem",
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
    bankTitle: "银行账户",
    collectionPerson: "张三丰",
    bankCard: "6230780100030904115",
    openBank: "恒丰银行",
    bankTree: "烟台市芝罘支行	",
    cardState: "已启用",
  },
  {
    key: "2",
    bankTitle: "对公银行",
    collectionPerson: "公司对公账户结算中！",
    bankCard: "公司对公账户结算中！",
    openBank: "公司对公账户结算中！",
    bankTree: "公司对公账户结算中！	",
    cardState: "已启用",
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
.ant-table-tbody > tr > td {
  padding: 0.3rem;
}

.ant-table-thead > tr > th {
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
  align-items: center;
  justify-content: space-between;
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