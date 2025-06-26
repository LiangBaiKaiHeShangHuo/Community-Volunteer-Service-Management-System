<template>

  <div id="register" class="content-page">
    <div class="register-container">
      <div class="page-header">
        <h2>创建新账户</h2>
        <p>加入志愿社区管家平台</p>
      </div>

      <div class="form-content">
        <div class="form-row">
          <!-- 左 -->
          <div class="form-col">
            <!-- 用户名 -->
            <div class="form-group">
              <label for="register-name">用户名</label>
              <input type="text" id="register-name" class="form-control" placeholder="姓名由中文、大小写英语、数字组成的十个字"
                name="username" v-model="name" @blur="yhname">
              <span class="error-message" id="username-error">{{ cwname }}</span>
            </div>
            <!-- 密码 -->
            <div class="form-group">
              <label for="register-password">密码</label>
              <input type="password" id="register-password" class="form-control" placeholder="密码由数字、大小写英语组成的十个字符"
                name="Password" v-model="password" @blur="yhpassword">
              <span class="error-message" id="password-error">{{ cwpassword }}</span>
            </div>

            <!-- 电子邮件 -->
            <div class="form-group">
              <label for="register-email">电子邮箱</label>
              <input type="txet" id="register-email" class="form-control" placeholder="电子邮件由字符: 字母、数字、特殊字符组成"
                name="email" v-model="email" @blur="yhemail">
              <span class="error-message" id="email-error">{{ cwemail }}</span>
            </div>
          </div>
          <!-- 右 -->
          <div class="form-col">
            <!-- 手机号 -->
            <div class="form-group">
              <label for="register-phone">手机号码</label>
              <input type="tel" id="register-phone" class="form-control" placeholder="请输入11位手机号码" name="phone"
                v-model="phone" @blur="yhphone">
              <span class="error-message" id="phone-error">{{ cwphone }}</span>
            </div>

            <!-- 二次密码 -->
            <div class="form-group">
              <label for="register-confirm-password">确认密码</label>
              <input type="password" id="register-confirm-password" class="form-control" placeholder="请再次输入密码"
                v-model="againpassword" @blur="yhagainpassword">
              <span class="error-message" id="confirm-password-error">{{ cwagainpassword }}</span>
            </div>

            <!-- 验证码 -->
            <div class="form-group">
              <label for="verification-code">验证码</label>
              <div class="verification-group">
                <input type="text" id="verification-code" class="form-control" placeholder="请输入6位验证码"
                  name="verificationCodes" v-model="yanzhengma">
                <button :disabled="isDisabled" type="button" class="verification-code-btn" id="verification-btn"
                  @click="btnyanzhengma">
                  获取验证码
                </button>
              </div>
              <span class="error-message" id="verification-error"></span>
            </div>
          </div>
        </div>
        <!-- 政策 -->
        <div class="agreement-group">
          <input type="checkbox" id="agree" v-model="tongyi" @click="iftongyi">
          <label for="agree">我已阅读并同意<a href="#">《服务协议》</a>和<a href="#">《隐私政策》</a></label>
        </div>
        <!-- 注册 -->
        <button :disabled="isDisabled1" class="btn" id="registerBtn" @click="zhuce">{{ annuvalue }}</button>
        <!-- 立即登录 -->
        <div class="login-link">
          <p>已有账号? <a href="#" id="goToLogin" @click="lijidenglu">立即登录</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import yanzengma from '@/store/SendData';
import qingqiu from '@/store/AjaxRequest';
export default {

  data() {
    return {
      //name
      name: "",
      cwname: '',

      //phone
      phone: "",
      cwphone: '',

      //password
      password: "",
      cwpassword: '',

      //again  password
      againpassword: "",
      cwagainpassword: "",

      //Email
      email: "",
      // email: "",
      cwemail: '',

      // yanzhengma
      yanzhengma: '',

      //同意协议
      tongyi: false,

      //按钮
      isDisabled: false,
      isDisabled1: false,
      annuvalue: '注册',

      //客户信息
      userarr: [],
    };
  },
  methods: {
    //获取验证码
    btnyanzhengma() {
      this.$store.commit("tanchaung", "验证码已发送，注意查收")
      this.$store.commit("tanchuangshow", true)

      this.isDisabled = true;
      const data = new URLSearchParams({ email: this.email });
      const jsonData = data.toString()
      yanzengma(jsonData, true)
      this.isDisabled = false;
    },

    //注册按钮
    zhuce() {
      this.isDisabled1 = true;
      this.annuvalue = "注册中..."

      const chuanxinxi = new URLSearchParams();
      chuanxinxi.append("name", this.name);
      chuanxinxi.append("password", this.password);
      chuanxinxi.append("email", this.email);
      chuanxinxi.append("phone", this.phone);
      chuanxinxi.append("verificationCodes", this.yanzhengma);
      // chuanxinxi.append("username", "54188");
      // chuanxinxi.append("password", "88888888");
      // chuanxinxi.append("email", "hm2897135735@qq.com");
      // chuanxinxi.append("phone", "88888888888");
      // chuanxinxi.append("verificationCodes", this.yanzhengma);

      const jsonData = chuanxinxi.toString();

      const duixinag = { "pattern": "POST", "url": "http://8.148.31.153:3030/signin", "shuju": jsonData }
      if (this.tongyi) {
        qingqiu(duixinag, (qinqiushuju) => {
          this.userarr = JSON.parse(qinqiushuju.responseText).success == false ? JSON.parse(qinqiushuju.responseText).message : JSON.parse(qinqiushuju.responseText)
          // console.log(JSON.parse(qinqiushuju.responseText))
          if (JSON.parse(qinqiushuju.responseText).success) {
            const times1 = setTimeout(() => { this.$router.push({ name: "UserLogin" }) }, 2000)
            times1
            this.isDisabled1 = false;
          } else {
            //数据错误
            this.$store.commit("Cuowu", this.userarr == '缺少必填字段:[verificationCodes]' ? "验证码错误" : this.userarr)
            this.$store.commit("Cuowushow", true)
            this.annuvalue = "注册"
            this.isDisabled1 = false
          }
        }, false)
      } else {
        //不同意  
        this.annuvalue = "注册"
        this.$store.commit("tanchaung", "同意协议方可登录")
        this.$store.commit("tanchuangshow", true)
        this.tongyi = true;
        this.isDisabled1 = false
      }

    },
    //name
    yhname() {
      if (/^[\u4e00-\u9fa5a-z0-9@._-]{1,20}$/.test(this.name)) {
        this.cwname = ""
        return;
      } else if (this.name == "") {
        (this.cwname = "用户名不能为空")
        return;
      } else if (/\s/.test(this.name)) {
        (this.cwname = "用户名不能有空格")
        return;
      } else {
        (this.cwname = "用户名不应该超过20个字");
        return;
      }
    },

    //phone
    yhphone() {
      /^1[3-9]\d{9}$/.test(this.phone) ? this.cwphone == "" :
        this.phone == ""
          ? (this.cwphone = "手机号不能为空")
          : (this.cwphone = "请输入正确手机号");
    },

    //password
    yhpassword() {
      /^.{8}$/.test(this.password)
        ? this.cwcpassword = ""
        : this.password === ""
          ? (this.cwpassword = "密码不能为空")
          : (this.cwpassword = "密码应为8个字符");
    },

    //again  password
    yhagainpassword() {
      if (this.password == this.againpassword) {
        this.cwagainpassword = ""
      } else {
        (this.cwagainpassword = "第二次密码错误");
      }
    },

    //Email
    yhemail() {
      if (this.email === "") {
        this.cwemail = "电子邮件不能为空";
        return;
      }
      if (/\s/.test(this.email)) {
        this.cwemail = "电子邮件不能有空格";
        return;
      }
      if (!/^[a-zA-Z0-9\u4e00-\u9fa5._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) {
        this.cwemail = "电子邮件格式不正确";
        return;
      }
      if (this.email.length > 64) {
        this.cwemail = "电子邮件不应超过64个字符";
        return;
      }
      this.cwemail = "";
    },
    //同意
    iftongyi() {
      this.tongyi = !this.tongyi
    },

    lijidenglu() {
      this.$router.push("UserLogin");
    },
  },
};
</script>
<style></style>
