<template>
  <div class="inputCard">
    <div style="margin: 0 1rem">{{ inputTitle }}：</div>
    <div style="flex: 0 0 80%">
      <a-textarea
        @change="change"
        v-model="inputValue"
        :placeholder="placeholder"
        auto-size
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    inputTitle: String,
    placeholder: String,
  },

  methods: {
    change() {
      this.$emit("inputValue", this.inputValue);
    },
  },
};
</script>

<style>
.inputCard {
  border: 1px solid tomato;
  display: flex;
  width: 100%;
}
</style>