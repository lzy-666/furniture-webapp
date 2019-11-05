<template lang="html">
    <Panel title="神劵满" :class="$style.panel">
        <section :class="$style.list">
                <h4>16点场剩余时间&nbsp;&nbsp;&nbsp;01:22:14</h4>
                <ul>
                    <li>
                      <img src="~images/shopping1.jpeg" alt="">
                      <p>¥0.1</p>
                    </li>
                    <li>
                      <img src="~images/shopping2.jpeg" alt="">
                      <p>¥1</p>
                    </li>
                    <li>
                      <img src="~images/shopping3.jpeg" alt="">
                      <p>¥2.6</p>
                    </li>
                    <li>
                      <img src="~images/shopping4.jpeg" alt="">
                      <p>¥4.03</p>
                    </li>
                </ul>
        </section>
    </Panel>
</template>

<script>
import Panel from "base/panel.vue";
export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "~css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .list {
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    h4 {
      font-size: 26px;
      line-height: 40px;
    }
    ul {
      li {
        display: inline-block;
        img {
          width: 150px;
          height: 150px;
          display: inline-block;
        }
        p{
          font-size: 26px;
          color: red;
          text-align: center;
        }
      }
    }
  }
}
</style>
