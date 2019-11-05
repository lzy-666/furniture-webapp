<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Adc/>
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "components/m-header/m-header"
import Footor from "components/footer/footer"
import Navbar from "components/navbar/navbar"
import Slider from "./mslider"
import Ada from "./ada"
import Money from "./money"
import Adb from "./adb"
import Finance from "./finance"
import Adc from "./adc"
export default {
    components: {
        Heador,
        Slider,
        Ada,
        Money,
        Adb,
        Finance,
        Adc,
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
