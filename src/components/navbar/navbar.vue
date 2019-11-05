<template lang="html">
    <Panel title="导航条" :class="$style.panel">
        <ul :class="$style.content">
            <li>
                <router-link :to="{ name: 'home'}">
                    <img :src="flag ? imgUrl : imgUrl2" alt="">
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'sort'}">
                    <img :src="flag2 ? imgUrl3 : imgUrl4" alt="">
                    <p>分类</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'find'}">
                    <img :src="flag3 ? imgUrl5 : imgUrl6" alt="">
                    <p>发现</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'shop'}">
                    <img :src="flag4 ? imgUrl7 : imgUrl8" alt="">
                    <p>购物车</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'my'}">
                    <img :src="flag5 ? imgUrl9 : imgUrl10" alt="">
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from "base/panel"
export default {
    data() {
      return {
        flag:this.$route.name === 'home',
        flag2:this.$route.name === 'sort',
        flag3:this.$route.name === 'find',
        flag4:this.$route.name === 'shop',
        flag5:this.$route.name === 'my',
        imgUrl:require('images/homeRed.png'),
        imgUrl2:require('images/home.png'),
        imgUrl3:require('images/sortRed.png'),
        imgUrl4:require('images/sort.png'),
        imgUrl5:require('images/findRed.png'),
        imgUrl6:require('images/find.png'),
        imgUrl7:require('images/shopCartRed.png'),
        imgUrl8:require('images/shopCart.png'),
        imgUrl9:require('images/myRed.png'),
        imgUrl10:require('images/my.png')
      }
    },
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
  @import "~css/element.scss";
  .panel{
    @include panel;
    position: fixed;
    left:0;
    right: 0;
    bottom: 0;
    height: 100px;
    margin: 0;
    >h4{
      display: none;
    }
    .content{
      @include flex(row);
      justify-content: space-around;
      li{
        text-align: center;
        a{
          text-decoration: none;
        }
        img{
          width: 44px;
          height: 44px;
          display: inline-block;
          margin: 12px auto 6px;
        }
        p{
          font-size: 22px;
          color: #656565;
        }
      }
    }
  }
</style>
