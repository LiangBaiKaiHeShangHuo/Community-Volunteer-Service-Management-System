import Vuex from "vuex";
const store = new Vuex.Store({
  state: {
    //错误的name和password
    cuoname: "",
    cuopassword: "",
    //错误页面
    hecuowu: "",
    ishecuowushow: false,
    //小弹窗
    Xioatanchuangneirong: "",
    ifisshowtanchaung: false,

    //工作台页面，登录页状态
    isgongzuotaishow: localStorage.getItem("isifgongzuotaishow") === "true",
    isdenglu:
      localStorage.getItem("isifdenglu") == null
        ? true
        : localStorage.getItem("isifdenglu") === "true",
    //修改文字
    dengluwanceng:
      localStorage.getItem("gaishuzi") == null ? "登录" : localStorage.getItem("gaishuzi"),
    //是否登录
    isifdenglu:
      localStorage.getItem("denglutoken") == null ? false : localStorage.getItem("denglutoken"),
    //用户信息
    vuexuserarr:
      localStorage.getItem("userxingxi") == null
        ? []
        : JSON.parse(localStorage.getItem("userxingxi")),
  },
  mutations: {
    //commit('方法名')
    //错误页面
    Cuowu(state, cuo) {
      state.hecuowu = cuo;
    },
    Cuowushow(state, cuo) {
      state.ishecuowushow = cuo;
    },
    //弹窗
    tanchaung(state, zhi) {
      state.Xioatanchuangneirong = zhi;
    },
    tanchuangshow(state, zhi) {
      state.ifisshowtanchaung = zhi;
    },
    //工作台、登录页面状态
    ifisgongzuotaishow(state, trueorfalse) {
      state.isgongzuotaishow = trueorfalse;
      state.isdenglu = !trueorfalse;
      localStorage.setItem("isifgongzuotaishow", trueorfalse);
      localStorage.setItem("isifdenglu", !trueorfalse);
    },
    //登录成功，改字
    dlcg(state, jieguo) {
      state.dengluwanceng = jieguo;
      localStorage.setItem("gaishuzi", jieguo);
    },
    //用户信息
    yonghuxx(state, yonghuarr) {
      state.vuexuserarr = yonghuarr;
    },
  },
  actions: {},
  modules: {},
});

export default store;
