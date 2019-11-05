<template>
    <div>
        <Navbar></Navbar>
        <MHearder></MHearder>
        <Purse></Purse>
        <Tool></Tool>
        <Family></Family>
    </div>
</template>

<script>
import Navbar from 'components/navbar/navbar';
import MHearder from './mheader';
import Purse from './purse';
import Tool from './tool';
import Family from './family'

export default {
    components: {
        Navbar,
        MHearder,
        Purse,
        Tool,
        Family
    }
}
</script>