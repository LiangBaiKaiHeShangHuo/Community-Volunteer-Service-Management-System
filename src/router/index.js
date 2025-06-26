import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //默认
  {
    path: "/",
    redirect: "/FunctiontWorkbench/UserLogin",
  },
  //工作台
  {
    path: "/FunctiontWorkbench",
    name: "FunctiontWorkbench",
    component: () => import("../views/Functiont/FunctiontWorkbench.vue"),
    children: [
      {
        path: "UserLogin",
        name: "UserLogin",
        component: () => import("../views/User/UserLogin.vue"),
      },
      // 注册
      {
        path: "UserRegistration",
        name: "UserRegistration",
        component: () => import("../views/User/UserRegistration.vue"),
      },
    ],
  },
  // 活动管理
  {
    path: "/FunctiontActivity",
    name: "FunctiontActivity",
    component: () => import("../views/Functiont/FunctiontActivity.vue"),
  },
  //积分中心
  {
    path: "/FunctiontIntegral",
    name: "FunctiontIntegral",
    component: () => import("../views/Functiont/FunctiontIntegral.vue"),
  },
  //数据分析
  {
    path: "/FunctiontData",
    name: "FunctiontData",
    component: () => import("../views/Functiont/FunctiontData.vue"),
  },

  //服务证书
  {
    path: "/PersonageServe",
    name: "PersonageServe",
    component: () => import("../views/Personage/PersonageServe.vue"),
  },
  //我的档案
  {
    path: "/PersonageMy",
    name: "PersonageMy",
    component: () => import("../views/Personage/PersonageMy.vue"),
  },
  //活动设置
  {
    path: "/PersonageActivity",
    name: "PersonageActivity",
    component: () => import("../views/Personage/PersonageActivity.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
