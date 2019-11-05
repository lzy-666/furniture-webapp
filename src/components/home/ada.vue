<template lang="html">
    <Panel title="大礼包" :class="$style.panel">
        <section :class="$style.content">
            <img src="~images/giftPackage.jpeg" alt="">
        </section>
    </Panel>
</template>

<script>
import Panel from "base/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
  @import "~css/element.scss";
  .panel{
    @include panel;
    >h4{
      display: none;
    }
    .content{
      img{
        width: 100%;
        height: 168px;
        display: block;
      }
    }
  }
</style>
