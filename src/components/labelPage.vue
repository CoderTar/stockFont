<template>
  <div>
    <a-tag closable @close="log"> Tag{{ activeState }}</a-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    activeState: String,
  },
  methods: {
    log() {
      console.log("close");
    },
  },
};
</script>

<style>
.lablePage {
  color: black;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0.4rem 0.5rem;
  background: #e7eaed;
}

.active {
  background: white;
}
</style>