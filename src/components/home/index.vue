<template>
  <div>
    <hea></hea>
    <Hslider></Hslider>
    <Everyday></Everyday>
    <Ada></Ada>
    <Shopping></Shopping>
    <Navbar></Navbar>
    <Find></Find>
  </div>
</template>

<script>
import Hea from "components/m-header/m-header";
import Footor from "components/footer/footer";
import Navbar from "components/navbar/navbar";
import Hslider from "./hslider";
import Everyday from "./everyday";
import Ada from "./ada";
import Shopping from "./shopping";
import Find from "./find"

export default {
  components: {
    Hea,
    Hslider,
    Everyday,
    Navbar,
    Ada,
    Shopping,
    Find
  }
};
</script>