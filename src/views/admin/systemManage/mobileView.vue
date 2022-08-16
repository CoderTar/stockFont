<!-- 1.公司昵称 -->
<!-- 2.股票交易时间 -->
<!-- 3.首页公告 -->
<!-- 4.公司地址 -->
<!-- 5.弹窗公告 -->
<!-- 6.提现状态 -->

<template>
  <div class="mobileConfig">
    <MaskView style="margin: 0" v-show="$store.state.loadingState"></MaskView>
    <div>
      <p style="font-weight: bolder; font-size: 1.5rem; color: black">
        基础配置
      </p>
    </div>
    <div>
      <div style="flex: 0 0 6%; text-align: center">公司昵称：</div>
      <a-input
        style="flex: 0 0 60%"
        v-model="companyName"
        placeholder="请输入公司昵称"
      ></a-input>
    </div>

    <div>
      <div style="flex: 0 0 6%; text-align: center">轮播公告：</div>
      <a-input
        style="flex: 0 0 60%"
        v-model="swipeNotic"
        placeholder="请输入轮播公告"
      ></a-input>
    </div>

    <div>
      <div style="flex: 0 0 6%; text-align: center">弹窗公告：</div>
      <a-input
        style="flex: 0 0 60%"
        v-model="popupNotic"
        placeholder="请输入弹窗公告"
      ></a-input>
    </div>

    <div>
      <div style="flex: 0 0 6%; text-align: center">公司地址：</div>
      <a-input
        style="flex: 0 0 60%"
        v-model="companyAddress"
        placeholder="请输入公司地址"
      ></a-input>
    </div>

    <div>
      <div style="flex: 0 0 6%; text-align: center">提现状态：</div>
      <a-input
        style="flex: 0 0 60%"
        v-model="withdrawalState"
        placeholder="1表示可以提现,0不支持提现"
      ></a-input>
    </div>

    <div>
      <div style="flex: 0 0 6%; text-align: center">股票交易时间：</div>
      <a-input
        style="flex: 0 0 60%"
        v-model="tradingTime"
        placeholder="请输入股票交易时间"
      ></a-input>
    </div>

    <div>
      <a-button type="primary" style="flex: 0 0 5%" @click="systemBtn">
        提交
      </a-button>
      <div style="flex: 0 0 49%"></div>
    </div>
  </div>
</template>

<script>
import { updatebasisconfig, basisconfig } from "@/network/apiFunc";
import MaskView from "@/components/maskView.vue";
export default {
  components: { MaskView },
  data() {
    return {
      maskLoad: false,

      tradingTime: "",
      withdrawalState: 1,
      popupNotic: "",
      swipeNotic: "",
      companyName: "",
      companyAddress: "",
    };
  },
  mounted() {
    basisconfig().then((res) => {
      console.log(res.data);

      this.companyName = res.data.company_title;
      this.companyAddress = res.data.company_address;
      this.swipeNotic = res.data.swipe_notice;
      this.popupNotic = res.data.popup_notice;
      this.withdrawalState = res.data.withdrawal_state;
    });
  },
  methods: {
    inputValue(value) {
      console.log(value);
    },

    // 提交修改基础配置
    systemBtn() {
      let data = {
        title: this.companyName,
        address: this.companyAddress,
        swipeNotic: this.swipeNotic,
        popupNotic: this.popupNotic,
        withdrawalState: this.withdrawalState,
      };
      updatebasisconfig(data).then((res) => {
        if (res.code == 1) {
          console.log(res);
          setTimeout(() => {
            // this.$message.success("配置更新成功");
            this.$notification["success"]({
              message: "成功",
              description: "配置更新成功",
              duration: 2,
            });
          }, 886);
        }
      });
    },
  },
};
</script>

<style>
.mobileConfig {
  border: 1px solid red;
  color: black;
}

.mobileConfig > div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}
</style>