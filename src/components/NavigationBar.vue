<template>

    <body>
        <!-- 侧边导航栏 -->
        <div class="sidebar" v-show="$store.state.isgongzuotaishow">
            <div class="logo">

                <h1>志愿社区管家</h1>
                <h1>CVSMS</h1>
            </div>

            <div class="nav-section">
                <h2>主要功能</h2>
                <!-- 工作台 -->
                <div class="nav-item" :class="{ active: $route.path === '/FunctiontWorkbench' }" data-page="dashboard">
                    <i class="fas fa-th-large"></i>
                    <RouterLink to="/FunctiontWorkbench" class="daohanlan-text">工作台</RouterLink>
                </div>
                <!-- 活动管理 -->
                <div class=" nav-item" :class="{ active: $route.path === '/FunctiontActivity' }" data-page="activity">
                    <i class="fas fa-calendar-alt"></i>
                    <RouterLink to="/FunctiontActivity" class="daohanlan-text">活动管理</RouterLink>
                </div>
                <!-- 积分中心 -->
                <div class="nav-item" :class="{ active: $route.path === '/FunctiontIntegral' }" data-page="profile">
                    <i class="fas fa-user-circle"></i>
                    <RouterLink to="/FunctiontIntegral" class="daohanlan-text">积分中心</RouterLink>
                </div>
                <!-- 数据分析 -->
                <div class="nav-item" :class="{ active: $route.path === '/FunctiontData' }" data-page="analysis">
                    <i class="fas fa-chart-line"></i>
                    <RouterLink to="/FunctiontData" class="daohanlan-text">数据分析</RouterLink>
                </div>
            </div>

            <div class="nav-section">
                <h2>个人中心</h2>
                <!-- 服务证书 -->
                <div class="nav-item" :class="{ active: $route.path === '/PersonageServe' }" data-page="certificate">
                    <i class="fas fa-file-certificate"></i>
                    <RouterLink to="/PersonageServe" class="daohanlan-text">服务证书</RouterLink>
                </div>
                <!-- 我的档案 -->
                <div class="nav-item" :class="{ active: $route.path === '/PersonageMy' }" data-page="profile">
                    <i class="fas fa-id-card"></i>
                    <RouterLink to="/PersonageMy" class="daohanlan-text">我的档案</RouterLink>
                </div>
                <!-- 活动设置 -->
                <div class="nav-item" :class="{ active: $route.path === '/PersonageActivity' }" data-page="settings">
                    <i class="fas fa-cog"></i>
                    <RouterLink to="/PersonageActivity" class="daohanlan-text">活动设置</RouterLink>
                </div>
            </div>
        </div>


        <!-- 主内容区域 -->
        <div class="main-content" :class="{ main_content_jia: !$store.state.isifdenglu }">
            <RouterView></RouterView>
        </div>
    </body>

</template>
<script>
import { mapState } from 'vuex';
export default {
    created() {
    },
    computed: {
        ...mapState(['vuexuserarr']),
    },
};
</script>

<style scoped>
a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-right: 100px;
}
</style>
