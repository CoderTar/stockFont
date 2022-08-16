<template>
  <div class="centerCard">
    <div class="centerTop">
      <LabelPage
        v-for="(item, index) in test"
        :key="index"
        :activeState="item"
      ></LabelPage>
    </div>
    <!-- 数据展示区域 -->
    <div class="centerTab">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LabelPage from "../labelPage.vue";
export default {
  data() {
    return {
      test: this.$store.state.topTabl,
    };
  },
  methods: {
    btn() {
      this.testArray.push(5);
    },
  },
  components: { LabelPage },
};
</script>

<style>
.centerCard {
  border: 1px solid tomato;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.centerTop {
  border: 1px solid rebeccapurple;
  height: 6%;
  display: flex;
  align-items: center;
}

.centerTab {
  border: 1px solid gold;
  /* background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%); */
  height: 90%;
}
</style>