<template>
  <div class="loginCard">
    <MaskView v-show="$store.state.loadingState" tip="登录中"></MaskView>
    <!-- 1.登录卡片 -->
    <div class="inputCard">
      <div style="margin: 26px 0">
        <h1>后台登录</h1>
      </div>
      <div class="inputCardOne">
        <div>
          <a-input
            placeholder="请输入账号"
            :maxLength="10"
            v-model="inputNickName"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </div>
        <div style="margin: 1rem 0">
          <div>
            <a-input
              placeholder="请输入密码"
              :maxLength="10"
              v-model="inputPassWord"
              @keyup.enter.native="userLoginBtn"
              type="password"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </div>
        </div>

        <div class="loginBtn">
          <div class="nologin" @click="nowOnlineMe">马上联系？</div>

          <a-button type="primary" @click="userLoginBtn"> 登录 </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { adminLogin } from "@/network/apiFunc";
import MaskView from "@/components/maskView.vue";
export default {
  data() {
    return {
      inputNickName: "",
      inputPassWord: "",
      // ip地址
      location: "",
      address: "",
      loading: false,
    };
  },
  mounted() {},
  methods: {
    userLoginBtn() {
      console.log("用户登录");
      this.loading = true;
      let data = {
        userName: this.inputNickName,
        password: this.inputPassWord,
      };
      // 校验账号或密码不能为空;
      if (this.inputNickName != "" && this.inputPassWord != "") {
        adminLogin(data).then((res) => {
          if (res.code == 1) {
            localStorage.setItem("Btoken", res.token);
            localStorage.setItem("adminID", res.data.admin_id);
            localStorage.setItem("username", res.data.username);
            setTimeout(() => {
              this.$message.success("登录成功");
            }, 886);
            setTimeout(() => {
              this.$router.replace("/");
            }, 1666);
          } else {
            setTimeout(() => {
              this.$message.error("账号或密码错误");
            }, 886);
          }
        });
      } else {
        this.$message.error("账号或密码不能为空");
      }
    },
    // 联系我
    nowOnlineMe() {
      this.$notification["success"]({
        message: "业务咨询",
        description: "飞机：【09788822022】",
        duration: 6666,
      });
    },
  },
  components: { MaskView },
};
</script>

<style>
.loginCard {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

  display: flex;
  justify-content: center;
  align-items: center;
}
.inputCard {
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.1);

  border-radius: 12px;
  /* background: #000000; */

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
}
.inputCard:hover {
  /* width: 306px; */
  /* height: 306px; */
  cursor: pointer;
  box-shadow: 0px 1px 6px #433f5c;
}
/* .inputCardOne {
  border: 1px solid turquoise;
} */

.loginBtn {
  display: flex;
  /* border: 1px solid green; */
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

.nologin {
  font-size: 13px;
  text-decoration: underline;

  color: #409eff;
}
.nologin:hover {
  cursor: pointer;
}
</style>