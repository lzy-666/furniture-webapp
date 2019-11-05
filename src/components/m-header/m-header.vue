<template>
  <div :class="$style.header">
    <div :class="$style.icon">
      家有家具泛商城
    </div>
  </div>
</template>

<script>
import btn from "base/btn";
export default {
  components: {
    btn
  }
};
</script>

<style lang="scss" module>
.header{
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    background: #fff;
    background-size: auto 50%;
    z-index: 100;
    .icon{
      font-size: 28px;
      height: 30px;
      line-height: 60px;
      text-align: center;
      margin: 17px 0 0 18px;
      color: RGB(14,215,237);
    }
}
</style>
