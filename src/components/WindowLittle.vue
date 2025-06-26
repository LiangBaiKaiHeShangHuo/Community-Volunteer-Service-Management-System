<template>
    <div class="div1" v-show="ifisshowtanchaung" @click="guan">
        <div class="div2">
            {{ $store.state.Xioatanchuangneirong }}
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    methods: {
        guan() {
            this.$store.commit("tanchuangshow", false)
        }
    },
    computed: {
        ...mapState(['ifisshowtanchaung']),
    }
};
</script>

<style scoped>
.div1 {
    display: flex;
    position: absolute;
    background-color: rgb(255, 255, 255, 0);
    /* background-color: rgb(245, 198, 206, 0.5); */
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 10;
}

.div2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    border: 2px solid #bcd5ff;
    transition: all 0.3s ease;
}
</style>
