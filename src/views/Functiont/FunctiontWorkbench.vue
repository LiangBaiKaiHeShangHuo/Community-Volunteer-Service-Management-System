<template>
    <div id="dashboard" class="content-page active" v-show="$store.state.isgongzuotaishow">
        <div class="top-bar">
            <div class="user-info">
                <div class="user-avatar"> {{ usernameInitial }}</div>
                <div class="user-name">{{ username }}志愿者</div>
            </div>
            <div class="auth-actions">
                <RouterLink to="/FunctiontWorkbench/UserLogin" @click="isdenglu" class="btn btn-primary" id="logoutBtn"
                    style="padding-right: 20px">
                    {{
                        $store.state.dengluwanceng }}
                    <i class="fas fa-sign-out-alt"></i>
                </RouterLink>
            </div>
        </div>


        <div class="top-bar">
            <div class="stat-card blue">
                <div class="stat-value">0h</div>
                <div class="stat-label">累计服务时长</div>
            </div>
            <div class="stat-card green">
                <div class="stat-value">0</div>
                <div class="stat-label">本月活动数</div>
            </div>
            <div class="stat-card orange">
                <div class="stat-value">第0名</div>
                <div class="stat-label">社区报名</div>
            </div>
            <div class="stat-card aqua">
                <div class="stat-value">第0名</div>
                <div class="stat-label">社区报名</div>
            </div>
        </div>

        <h2 class="section-title">
            <i class="fas fa-calendar-day"></i>
            近期活动安排
        </h2>

        <div class="activities-grid">
            <!-- 环保活动 -->
            <div class="activity-card environment">
                <div class="activity-header">
                    <div class="activity-title">社区环境整治</div>
                    <div class="activity-type team">环保（团队活动）</div>
                </div>
                <div class="activity-time">
                    <i class="fas fa-clock"></i>
                    2023-12-15 09:00-11:30
                </div>
                <div class="progress-container">
                    <div class="progress-info">
                        <span>报名人数</span>
                        <span>27/30 (0%)</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill enrollment"></div>
                    </div>
                </div>
            </div>

            <!-- 教学活动 -->
            <div class="activity-card education">
                <div class="activity-header">
                    <div class="activity-title">长者智能课堂</div>
                    <div class="activity-type individual">教学个人服务</div>
                </div>
                <div class="activity-time">
                    <i class="fas fa-clock"></i>
                    2023-12-20 14:00-16:00
                </div>
                <div class="progress-container">
                    <div class="progress-info">
                        <span>报名人数</span>
                        <span>18/20 (00%)</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill education"></div>
                    </div>
                </div>
            </div>

            <!-- 健康活动 -->
            <div class="activity-card health">
                <div class="activity-header">
                    <div class="activity-title">社区健康义诊</div>
                    <div class="activity-type team">医疗服务</div>
                </div>
                <div class="activity-time">
                    <i class="fas fa-clock"></i>
                    2023-12-22 10:00-12:00
                </div>
                <div class="progress-container">
                    <div class="progress-info">
                        <span>报名人数</span>
                        <span>14/20 (00%)</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill health"></div>
                    </div>
                </div>
            </div>
            <!-- 养老院 -->
            <div class="activity-card aqua">
                <div class="activity-header">
                    <div class="activity-title">爱心养老院</div>
                    <div class="activity-type team">医疗服务</div>
                </div>
                <div class="activity-time">
                    <i class="fas fa-clock"></i>
                    2023-12-22 10:00-12:00
                </div>
                <div class="progress-container">
                    <div class="progress-info">
                        <span>报名人数</span>
                        <span>14/20 (00%)</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill health"></div>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="section-title">
            <i class="fas fa-plus-circle"></i>
            活动发布
        </h2>

        <div class="publish-form">
            <div class="form-grid">
                <div class="form-group">
                    <label>活动名称</label>
                    <input type="text" class="form-control" placeholder="请输入活动名称">
                </div>
                <div class="form-group">
                    <label>活动类型</label>
                    <select class="form-control">
                        <option>社区服务</option>
                        <option>环保活动</option>
                        <option>医疗服务</option>
                        <option>教育培训</option>
                        <option>老人关怀</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>活动日期</label>
                    <input type="text" class="form-control" placeholder="yyyy/mm/dd">
                </div>
                <div class="form-group">
                    <label>活动时间</label>
                    <input type="text" class="form-control" placeholder="开始时间 - 结束时间">
                </div>
            </div>

            <button class="btn btn-publish">
                <i class="fas fa-arrow-right"></i>
                下一步
            </button>
        </div>
    </div>
    <RouterView></RouterView>
</template>
<script>

import store from '@/store';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            userarr: null
        }
    },

    methods: {
        // 退出登录
        isdenglu() {
            store.commit("ifisgongzuotaishow", false)
            if (localStorage.getItem("denglutoken")) {
                localStorage.clear()
                this.$store.commit("yonghuxx", null);
                this.$store.commit("dlcg", "登录");
            }
        }
    },
    //计算属性
    computed: {
        ...mapState(['vuexuserarr']),
        username() {
            //可选链操作符      ?.
            return this.vuexuserarr?.userinfos?.USERNAME || "未获取用户";
        },

        // 获取用户名首字母（用于头像）
        usernameInitial() {
            return this.username?.charAt(0) || "无";
        }
    },
}
</script>

<style scoped></style>
