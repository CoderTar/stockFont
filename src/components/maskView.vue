<template>
  <div class="popContainer">
    <a-spin size="large" :tip="tip" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  props: {
    tip: {
      type: String,
      default: "提交中",
    },
  },
};
</script>
<style>
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(169, 169, 169, 0.9);
  z-index: 100;

  border: 1px solid tomato;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>