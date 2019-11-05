<template>
  <div>
    <div :class="$style.mheader">
      <img :class="$style.news" src="~images/news.png" />
      <img :class="$style.image" src="~images/me.jpeg" />
      <div :class="$style.text">
        <h4>181****4180</h4>
        <span>青铜会员&nbsp;></span>
      </div>
      <span :class="$style.txt">账号管理&nbsp;></span>
    </div>
    <div :class="$style.txt2">
        <p>全部订单</p>
        <span>查看全部订单&nbsp;></span>
    </div>
    <section :class="$style.list">
      <div>
        <ul>
          <li>
            <img src="~images/obligation.png" />
            <p>待付款</p>
          </li>
          <li>
            <img src="~images/shipped.png" />
            <p>待发货</p>
          </li>
          <li>
            <img src="~images/received.png" />
            <p>待收货</p>
          </li>
          <li>
            <img src="~images/evaluated.png" />
            <p>待评论</p>
          </li>
          <li>
            <img src="~images/order.png" />
            <p>已完成</p>
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
.txt2{
  background: #fff;
  border-bottom: 2px solid #ddd;
  padding-top: 25px;
  padding-bottom: 25px;
  overflow: hidden;
  p{
    font-size: 30px;
    padding-left: 32px;
    height: 0;
    color: RGB(130,130,130);
  }
  span{
    font-size: 25px;
    color: RGB(161,161,161);
    float: right;
  }
}
.list {
  @include list(row);
  background: #fff;
  padding-top: 5px;
  padding-bottom: 15px;
  justify-content: space-around;
  h4 {
    font-size: 26px;
    line-height: 40px;
  }
  ul {
    li {
      display: inline-block;
      padding-right: 15px;
      padding-left: 15px;
      img {
        width: 80px;
        height: 80px;
        display: inline-block;
      }
      p {
        font-size: 20px;
        text-align: center;
      }
    }
  }
}
.mheader {
  height: 300px;
  width: 100%;
  background: RGB(222, 94, 55);
  overflow: hidden;
  .news {
    float: right;
    margin: 20px 10px;
  }
  .image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 100px 40px;
  }
  .text {
    height: 0px;
    width: 200px;
    margin: 110px 0 0 160px;
    font-size: 28px;
    h4 {
      color: aliceblue;
      margin-bottom: 20px;
    }
    span {
      color: aliceblue;
      padding: 10px 20px 10px 40px;
      border: 2px solid #ddd;
      border-radius: 30px;
      font-size: 22px;
      background-color: RGB(217, 64, 17);
    }
  }
  .txt {
    color: aliceblue;
    font-size: 22px;
    float: right;
    margin: 20px 20px;
  }
}
</style>
