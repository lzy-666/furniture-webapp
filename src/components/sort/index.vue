<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Daily/>
        <In/>
        <More/>
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "components/m-header/m-header"
import Footor from "components/footer/footer"
import Navbar from "components/navbar/navbar"
import Slider from "./rslider"
import Daily from "./daily"
import In from "./in"
import More from "./more"
export default {
    components: {
        Heador,
        Slider,
        Daily,
        In,
        More,
        Footor,
        Navbar,
    },
}
</script>

<style lang="scss">
  .mfooter{
    margin-top: 0!important;
    ul{
      li:first-child{
        display: none;
      }
    }
  }
</style>
