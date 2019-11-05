<template>
  <div :class="$style.family">
    <div :class="$style.txt">
      <p>家族APP</p>
    </div>
    <section :class="$style.list">
      <div>
        <ul>
          <li>
            <img src="~images/logo1.png" alt />
          </li>
          <li>
            <img src="~images/logo2.png" alt />
          </li>
          <li>
            <img src="~images/logo3.png" alt />
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
.family {
  margin: 20px 0 200px 0;
  .txt {
    background: #fff;
    padding-top: 25px;
    padding-bottom: 25px;
    overflow: hidden;
    height: 30px;
    p {
      font-size: 30px;
      padding-left: 32px;
      height: 0;
      color: RGB(130, 130, 130);
    }
  }
  .list {
    @include list(row);
    background: #fff;
    padding-top: 5px;
    padding-bottom: 15px;
    justify-content: space-around;
    ul {
      li {
        display: inline-block;
        img{
            height: 120px;
            width: 120px;
            border: 4px solid #ddd;
            margin-bottom: 10px;
            margin-right: 50px;
        }
      }
    }
  }
}
</style>