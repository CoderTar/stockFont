<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header> <TopSide></TopSide></a-layout-header>
      <a-layout>
        <a-layout-sider>
          <LeftSide></LeftSide>
        </a-layout-sider>
        <a-layout-content>
          <CenterSide></CenterSide>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import TopSide from "@/components/topSide/topSide.vue";
import LeftSide from "../components/leftSide/leftSide.vue";
import CenterSide from "@/components/centerSide/centerSide.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { TopSide, LeftSide, CenterSide },
};
</script>

<style>
#components-layout-demo-basic {
  height: 100%;
  width: 100%;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
  overflow: hidden;
}

#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  text-align: center;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgb(213, 227, 241);
  color: #fff;
  height: 100%;
}

#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

.ant-layout {
  height: 100%;
}
</style>
