<template>
  <div class="topBar">
    <!-- 1.左边 -->
    <div style="display: flex; align-items: center; justify-content: center">
      <div style="display: flex; align-items: center">
        <a-icon :style="{ fontSize: '40px', color: 'gold' }" type="github" />
        <p>后台管理系统</p>
      </div>
      <div style="margin-left: 1rem">
        <h2>消息提示</h2>
      </div>
    </div>
    <!-- 2.右边 -->
    <div style="display: flex; align-items: center; justify-content: center">
      <div>欢迎您！</div>
      <div class="nickName">
        <a-dropdown placement="bottomCenter">
          <p>admin<a-icon type="down" /></p>
          <a-menu slot="overlay">
            <a-menu-item>
              <p>个人信息</p>
            </a-menu-item>
            <a-menu-item>
              <p>修改密码</p>
            </a-menu-item>
            <a-menu-item>
              <p>退出系统</p>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="skin">
        <a-dropdown placement="bottomCenter">
          <div>
            <a-icon type="skin" :style="{ fontSize: '20px', color: '#08c' }" />
          </div>
          <a-menu slot="overlay">
            <a-menu-item>
              <p>默认</p>
            </a-menu-item>
            <a-menu-item>
              <p>蓝色</p>
            </a-menu-item>
            <a-menu-item>
              <p>绿色</p>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    preventDefault(e) {
      console.log(e);
    },
  },
};
</script>

<style>
.topBar {
  /* border: 1px solid tomato; */
  display: flex;
  justify-content: space-between;
}

.skin {
  padding: 0 1rem;
}
.skin:hover {
  cursor: pointer;
  background: rgb(172, 125, 125);
}

.nickName {
  padding: 0 1rem;
}
.nickName:hover {
  cursor: pointer;
  background: gray;
}
</style>