<template>
  <el-container class="layout-main">
    <!-- 顶栏 -->
    <el-header>
      <div class="logo-group" :style="{width: collapse ? asideWidthCollapse : asideWidth}">
        <img v-if="collapse" :src="`/static/image/theme/${themeName}/logo/icon-only.png`">
        <img v-else :src="`/static/image/theme/${themeName}/logo/all.png`">
      </div>
      <div class="toggle-aside-btn" @click="collapse = !collapse">
        <d2-icon name="bars"/>
      </div>
      <d2-layout-main-menu-header/>
      <d2-layout-main-header-right/>
    </el-header>
    <!-- 下面 主体 -->
    <el-container>
      <!-- 主体 侧边栏 -->
      <el-aside :style="{width: collapse ? asideWidthCollapse : asideWidth}">
        <d2-layout-main-menu-side :collapse="collapse"/>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <transition name="fade-transverse">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'd2-layout-main',
  components: {
    'd2-layout-main-menu-side': () => import('./components/-menu-side'),
    'd2-layout-main-menu-header': () => import('./components/-menu-header'),
    'd2-layout-main-header-right': () => import('./components/-header-right')
  },
  data () {
    return {
      collapse: false,
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px'
    }
  },
  computed: {
    ...mapState({
      themeName: state => state.theme.name
    })
  },
  mounted () {
    // 加载主题
    this.loadTheme()
  },
  methods: {
    ...mapMutations([
      'loadTheme'
    ])
  }
}
</script>

<style lang="scss">
// 主题
@import '~@/assets/style/theme/d2/index.scss';
@import '~@/assets/style/theme/line/index.scss';
@import '~@/assets/style/theme/star/index.scss';
</style>
