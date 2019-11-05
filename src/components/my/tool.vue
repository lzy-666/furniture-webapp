<template>
  <div :class="$style.purse">
    <div :class="$style.txt">
      <p>常用工具</p>
    </div>
    <div :class="$style.list">
      <div>
        <ul>
          <li>
            <img src="~images/xinxin.png" />
            <p>我的礼包</p>
          </li>
          <li>
            <img src="~images/xinxin.png" />
            <p>收藏&足迹</p>
          </li>
          <li>
            <img src="~images/xinxin.png" />
            <p>收货地址</p>
          </li>
          <li>
            <img src="~images/xinxin.png" />
            <p>购物基因</p>
          </li>
          <li>
            <img src="~images/xinxin.png" />
            <p>会员中心</p>
          </li>
          <li>
            <img src="~images/xinxin.png" />
            <p>客服中心</p>
          </li>
          <li>
            <img src="~images/xinxin.png" />
            <p>帮助反馈</p>
          </li>
        </ul>
      </div>
    </div>
    <div :class="$style.txt2">
      <h4>设置</h4>
      <p>切换账号管理&nbsp;></p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" module>
.purse {
  .txt {
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
    background: #fff;
    ul {
      li {
        display: inline-block;
        height: 140px;
        width: 149px;
        border-bottom: 2px solid #ddd;
        border-right: 2px solid #ddd;
        img {
          height: 50px;
          width: 50px;
          padding: 25px 0px 0px 47px;
        }
        p {
          font-size: 24px;
          text-align: center;
          padding: 5px 10px 0px 10px;
        }
      }
    }
  }
  .txt2 {
    margin-top: 15px;
    background: #fff;
    border-bottom: 2px solid #ddd;
    padding-top: 25px;
    padding-bottom: 25px;
    overflow: hidden;
    height: 25px;
    h4{
    font-size: 30px;
    padding-left: 32px;
    color: RGB(130, 130, 130);
    height: 0;
    }
    p {
      font-size: 24px;
      padding-right: 28px;
      height: 0;
      color: RGB(130, 130, 130);
      float: right;
    }
  }
}
</style>