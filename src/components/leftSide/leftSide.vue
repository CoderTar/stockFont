<template>
  <div>
    <a-menu
      style="width: 200px"
      mode="inline"
      :open-keys="openKeys"
      :inlineIndent="0"
      @click="handleClick"
      @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="compass" theme="twoTone" /><span>个人中心</span></span
        >
        <a-menu-item key="1-1">个人信息</a-menu-item>
        <a-menu-item key="1-2">修改密码</a-menu-item>
        <a-menu-item key="1-3">对冲设置</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="contacts" theme="twoTone" /><span>组织架构</span></span
        >
        <a-menu-item key="2-1"> 结算中心</a-menu-item>
        <a-menu-item key="2-2"> 运营中心</a-menu-item>
        <a-menu-item key="2-3"> 赠金日志</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub3" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="experiment" theme="twoTone" /><span
            >产品管理</span
          ></span
        >
        <a-menu-item key="3-1"> 产品列表</a-menu-item>
        <a-menu-item key="3-2"> 策略模式</a-menu-item>
        <a-menu-item key="3-3"> 热门推荐</a-menu-item>
        <a-menu-item key="3-4"> 交易费用</a-menu-item>
        <a-menu-item key="3-5"> 策略周期</a-menu-item>
        <a-menu-item key="3-6"> 交易杠杆</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub4" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="property-safety" theme="twoTone" /><span
            >会员管理</span
          ></span
        >
        <a-menu-item key="4-1"> 资金变动</a-menu-item>
        <a-menu-item key="4-2"> 会员列表</a-menu-item>
        <a-menu-item key="4-3"> 赠金日志</a-menu-item>
        <a-menu-item key="4-4"> 虚拟用户</a-menu-item>
        <a-menu-item key="4-5"> 资金变动</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub5" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="trophy" theme="twoTone" /><span>订单管理</span></span
        >
        <a-menu-item key="5-1">委托订单</a-menu-item>
        <a-menu-item key="5-2">持仓订单</a-menu-item>
        <a-menu-item key="5-3">平仓订单</a-menu-item>
        <a-menu-item key="5-4">强制平仓</a-menu-item>
        <a-menu-item key="5-5">交割订单</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub6" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="euro" theme="twoTone" /><span>财务管理</span></span
        >
        <a-menu-item key="6-1">递延费记录</a-menu-item>
        <a-menu-item key="6-2">代理商收入</a-menu-item>
        <a-menu-item key="6-3">经纪人收入</a-menu-item>
        <a-menu-item key="6-4">用户充值记录</a-menu-item>
        <a-menu-item key="6-5">用户出金记录</a-menu-item>
        <a-menu-item key="6-6">代理商出金记录</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub7" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="customer-service" theme="twoTone" /><span
            >新股申购</span
          ></span
        >
        <a-menu-item key="7-1">新股订单</a-menu-item>
        <a-menu-item key="7-2">新股申购</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub8" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="appstore" theme="twoTone" /><span>对公管理</span></span
        >
        <a-menu-item key="8-1">佣金规则</a-menu-item>
        <a-menu-item key="8-2">支付方式</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub9" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="credit-card" theme="twoTone" /><span
            >跟买管理</span
          ></span
        >
        <a-menu-item key="9-1">跟买列表</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub10" @titleClick="titleClick">
        <span slot="title"
          ><a-icon type="file-excel" theme="twoTone" /><span
            >系统管理</span
          ></span
        >
        <a-menu-item key="10-1"> 广告列表</a-menu-item>
        <a-menu-item key="10-2"> 添加新股</a-menu-item>
        <a-menu-item key="10-3"> 软文管理</a-menu-item>
        <a-menu-item key="10-4"> 券商账户</a-menu-item>
        <a-menu-item key="10-5"> 高危股票</a-menu-item>
        <a-menu-item key="10-6"> 系统设置</a-menu-item>
        <a-menu-item key="10-7"> 软件配置</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认选中
      openKeys: ["sub1"],
      // 导航栏列表
      rootSubmenuKeys: [
        "sub1",
        "sub2",
        "sub3",
        "sub4",
        "sub5",
        "sub6",
        "sub7",
        "sub8",
        "sub9",
        "sub10",
      ],
    };
  },
  methods: {
    // 导航栏标题
    titleClick(e) {
      console.log("导航栏标题", e.key);
    },
    // 导航栏子标题
    handleClick(e) {
      console.log("子标题", e.key);
      switch (e.key) {
        case "1-1":
          this.$router.push("/product");
          this.$store.commit("addTabl", "个人信息");
          break;
        case "1-2":
          this.$router.push("/product");
          break;
        case "1-3":
          this.$router.push("/product");
          break;
        case "2-1":
          this.$router.push("/settlement");
          break;
        case "2-2":
          this.$router.push("/operate");
          break;
        case "2-3":
          this.$router.push("/give");
          break;
        case "3-1":
          this.$router.push("/settlement");
          break;
        case "3-2":
          this.$router.push("/operate");
          break;
        case "3-3":
          this.$router.push("/give");
          break;
        case "4-1":
          this.$router.push("/capital");
          break;
        case "4-2":
          this.$router.push("/listView");
          break;
        case "4-3":
          this.$router.push("/givelog");
          break;
        case "5-1":
          this.$router.push("/entrust");
          break;
        case "5-2":
          this.$router.push("/position");
          break;
        case "5-3":
          this.$router.push("/flatorder");
          break;
        case "5-4":
          this.$router.push("/forceorder");
          break;
        case "6-1":
          this.$router.push("/passMoney");
          break;
        case "6-4":
          this.$router.push("/userRecharge");
          break;
        case "6-5":
          this.$router.push("/userWithdrawal");
          break;
        case "7-2":
          this.$router.push("/addStock");
          break;
        case "8-2":
          this.$router.push("/addBank");
          break;
        case "10-1":
          this.$router.push("/adimage");
          break;
        case "10-7":
          this.$router.push("/mobile");
          break;
      }
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style>
</style>