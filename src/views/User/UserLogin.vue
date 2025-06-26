<template>
  <!-- <button @click="$store.commit('guan')"> x</button> -->
  <div id=" login" class="content-page" v-show="$store.state.isdenglu">
    <div style="
        max-width: 450px; 
        margin: 0 auto;
        background: white;
        border-radius: 16px;
        box-shadow: var(--card-shadow);
        overflow: hidden;
        width: 395px;
      ">
      <div style="background: var(--primary-color); color: white; text-align: center; padding: 30px">
        <h2 style="font-size: 28px; margin-bottom: 10px">欢迎回来</h2>
        <p>志愿社区管家平台</p>
      </div>
      <div style="padding: 30px">
        <div class="form-group">
          <label for="login-username">用户名</label>
          <input type="text" id="login-username" class="form-control" placeholder="请输入用户名" name="email" v-model="name"
            @blur="jiancename" />
          <span class="yonghumingcuowu">{{ yonghuname }}</span>
        </div>
        <div class="form-group">
          <label for="login-password">密码</label>
          <input type="password" id="login-password" class="form-control" placeholder="请输入密码" name="Password"
            v-model="password" @blur="jiancepassword" />
          <span class="yonghumingcuowu">{{ yonghupassword }}</span>
        </div>
        <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          ">
          <div>
            <input type="checkbox" id="remember" v-model="tongyi" @click="iftongyi" />
            <label for="remember" style="margin-left: 5px ;color: var(--primary-color)">同意协议</label>
          </div>
          <!-- <div>
            <input type="checkbox" id="remember" v-model="ifjizhume" @click="jizhume" />
            <label for="remember" style="margin-left: 5px">记住我</label>
          </div> -->
          <a href="#" style="color: var(--primary-color); text-decoration: none" @click="wnagijpassdorw">忘记密码?</a>
        </div>

        <button :disabled="isDisabled" class="btn btn-primary btn-block" id="loginBtn" type="submit" @click="denglu">
          {{ annuvalue }}
        </button>

        <div style="
            display: flex;
           justify-content: center;
            align-items: center;
            margin-top: 20px;
          ">
        </div>
        <div style="
            text-align: center;
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
          ">
          <p>
            还没有账号?
            <a href="#" id="goToRegister" style="color: var(--primary-color); text-decoration: none; font-weight: 500"
              @click="lijizhuce">立即注册</a>
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import api from "@/store/axiosqingqiu";
import qingqiu from "@/store/AjaxRequest";
// import { mapState } from "vuex";

export default {
  data() {
    return {
      //name
      name: "",
      yonghuname: "",

      //password
      password: "",
      yonghupassword: "",

      //记住我
      ifjizhume: false,

      //同意协议
      tongyi: false,

      //用户信息
      userarr: "",

      //登录错误
      dengluname: '',
      denglupassword: "",

      //按钮
      isDisabled: false,
      annuvalue: "登录"
    };
  },
  created() {

  },
  methods: {
    //输入用户名
    jiancename() {
      //name
      console.log()
      if (/^[\u4e00-\u9fa5a-z0-9@._-]{1,20}$/.test(this.name)) {
        this.yonghuname = ""
        return;
      } else if (this.name == "") {
        (this.yonghuname = "用户名不能为空")
        return;
      } else if (/\s/.test(this.name)) {
        (this.yonghuname = "用户名不能有空格")
        return;
      } else {
        (this.yonghuname = "用户名不应该超过20个字");
        return;
      }

    },
    //输入密码
    jiancepassword() {
      //password
      // /^[a-zA-Z0-9]{8}$/.test(this.password)
      /^.{8}$/.test(this.password)
        ? this.yonghupassword = ""
        : this.password === ""
          ? (this.yonghupassword = "密码不能为空")
          : (this.yonghupassword = "密码应为8个字符");
    },
    //记住我
    jizhume() {
      this.ifjizhume = !this.ifjizhume
      if (this.ifjizhume) {
        this.$store.commit("ifjizhuwo")
        console.log(this.$store.state.jizhuwo)
      }
    },
    //同意协议
    iftongyi() {
      this.tongyi = !this.tongyi
    },
    //忘记密码
    wnagijpassdorw() {
      alert("你真的忘记密码了？");
      alert("你个sb");
    },
    //注册
    lijizhuce() {
      this.$router.push("UserRegistration");
    },
    //登录
    denglu() {
      this.isDisabled = true;
      this.annuvalue = "登录中..."
      // 请求数据
      const chuanxinxi = new URLSearchParams();
      // chuanxinxi.append("email", "hm2897135735@qq.com");
      // chuanxinxi.append("password", "88888888");
      chuanxinxi.append("email", this.name);
      chuanxinxi.append("password", this.password);

      const jsonData = chuanxinxi.toString().replace(/%40/g, '@');

      const shuju1 = { "pattern": "POST", "url": "http://8.148.31.153:3030/login", "shuju": jsonData }
      qingqiu(shuju1, (qinqiushuju) => {
        // console.log(qinqiushuju)
        this.userarr = JSON.parse(qinqiushuju.responseText).success == false ? JSON.parse(qinqiushuju.responseText).message : JSON.parse(qinqiushuju.responseText)
        // console.log(JSON.parse(qinqiushuju.responseText))
        if (JSON.parse(qinqiushuju.responseText).success) {
          //数据正确
          if (this.tongyi) {
            //同意
            //本地存储
            localStorage.setItem("denglutoken", true)
            //改文字
            this.$store.commit("dlcg", "退出登录")
            //登录成功的用户信息
            this.$store.commit("yonghuxx", this.userarr)
            localStorage.setItem("userxingxi", JSON.stringify(this.userarr));
            const times1 = setTimeout(() => { this.$router.push({ name: "FunctiontWorkbench" }), this.$store.commit("ifisgongzuotaishow", true) }, 2000)
            times1
            this.isDisabled = false
          } else {
            //不同意  
            this.annuvalue = "登录"
            this.$store.commit("tanchaung", "同意协议方可登录")
            this.$store.commit("tanchuangshow", true)
            this.tongyi = true;
            this.isDisabled = false
          }
        } else {
          //数据错误
          this.$store.commit("Cuowu", this.name == '' && this.password == "" ? "账号或密码不能为空" : this.userarr)
          this.$store.commit("Cuowushow", true)
          this.annuvalue = "登录"
          this.isDisabled = false
        }
      },
        false)

      //使用axios请求
      // api({
      //   url: "http://8.148.70.85:3030/login",
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     "Accept": "application/json"
      //   },
      //   data: new URLSearchParams({ // 关键修复：使用 URLSearchParams 编码数据
      //     username: "0001",
      //     password: "root1212"
      //   }).toString()
      // }).then(rel => {
      //   console.log(rel);
      // }).catch(error => {
      //   console.error("请求失败：", error);
      // });
    },
  },
};
</script>
<style scoped>
#login {
  margin: 0 auto;
}
</style>
