<template>
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "base/slider.vue"
export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "home",
                src: require("images/slider1.jpg"),
            }, {
                href: "home",
                src: require("images/slider2.jpg"),
            }, {
                href: "home",
                src: require("images/slider3.jpg"),
            }],
            enters: [{
                href: "signIn",
                img: require("images/signIn.png"),
                title: "签到",
            }, {
                href: "member",
                img: require("images/member.png"),
                title: "会员",
            }, {
                href: "getMoney",
                img: require("images/getMoney.png"),
                title: "领钱了",
            }, {
                href: "cheap",
                img: require("images/cheap.png"),
                title: "拼便宜",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import "~css/element.scss";
  .slider{
    margin-top: 120px;
    img{
      width: 100%;
    }
  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
