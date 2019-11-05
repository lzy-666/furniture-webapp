<template lang="html">
        <div :class="$style.list">
          <h4>新发现</h4>
          <div style="float:left; width:50%;"><img width="320px" height="320px" src="~images/find1.jpeg" alt=""></div>
          <div style="float:right; width:50%;"><img width="320px" height="160px" src="~images/find2.jpeg" alt=""></div>
          <div style="float:left; width:25%;"><img width="160px" height="160px" src="~images/find3.jpeg" alt=""></div>
          <div style="float:right; width:25%;"><img width="160px" height="160px" src="~images/find4.jpeg" alt=""></div>
        </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
* {
  padding: 0;
  margin: 0;
  border: none;
}
.list {
  background: #fff;
  margin-bottom: 500px;
  h4 {
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    color: #FF9900;
  }
}
</style>
