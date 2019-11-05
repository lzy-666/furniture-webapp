<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Welfare/>
        <Service/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "components/m-header/m-header"
import Footor from "components/footer/footer"
import Navbar from "components/navbar/navbar"
import Slider from "./islider"
import Welfare from "./welfare"
import Service from "./service"
export default {
    components: {
        Heador,
        Slider,
        Welfare,
        Service,
        Footor,
        Navbar,
    },
}
</script>
