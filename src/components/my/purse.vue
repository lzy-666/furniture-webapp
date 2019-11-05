<template>
  <div :class="$style.purse">
    <div :class="$style.txt2">
      <p>我的钱包</p>
    </div>
    <section :class="$style.list">
      <div>
        <ul>
          <li>
            <h4>4张</h4>
            <p>优惠劵</p>
          </li>
          <li>
            <h4>1个</h4>
            <p>热币积分</p>
          </li>
          <li>
            <h4>0.00元</h4>
            <p>钱包余额</p>
          </li>
          <li>
            <h4>0张</h4>
            <p>热拍E卡</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss" module>
@import "~css/element";
.purse {
  margin-top: 20px;
  .txt2 {
    background: #fff;
    border-bottom: 2px solid #ddd;
    padding-top: 25px;
    padding-bottom: 25px;
    overflow: hidden;
    height: 25px;
    p {
      font-size: 30px;
      padding-left: 32px;
      height: 0;
      color: RGB(130, 130, 130);
    }
  }
  .list {
    @include list(row);
    background: #fff;
    padding-top: 5px;
    padding-bottom: 15px;
    justify-content: space-around;
    ul {
      li {
        display: inline-block;
        padding-right: 30px;
        padding-left: 30px;
        h4 {
          padding: 2px 15px 2px 20px;
          font-size: 20px;
          color: red;
          text-align: center;
        }
        p {
          font-size: 24px;
          text-align: center;
        }
      }
    }
  }
}
</style>