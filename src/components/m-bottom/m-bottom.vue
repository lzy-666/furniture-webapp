<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <img width="25px" height="25" display="" src="../../assets/icon/home.svg"/>
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">分类</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">购物</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<style scoped>
</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    margin-top: 530px
    border:2px solid #a1a1a1
    border-radius:25px
</style>
