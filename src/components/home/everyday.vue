<template>
  <Panel title="每日快报" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <ul>
          <li>
            <img src="~images/everyday.png" alt />
          </li>
          <li>
            <h5>钱包功能开放啦!</h5>
            <h4>
              <span :class="$style.red">折扣</span>瞅一瞅被犒劳
            </h4>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from "base/panel";

export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "~css/element";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    background-color:#F0F0F0;
    height: 90px;
    .item {
      width: 100%;
      ul {
        li {
          display: inline-block;
          img {
            width: 90px;
            height: 80px;
            border-right: 1px solid #ddd;
          }
          h5 {
            font-size: 30px;
            line-height: 40px;
          }
          h4 {
            font-size: 26px;
            line-height: 50px;
          }
          .red {
            color: #f00;
          }
        }
      }
    }
  }
}
</style>