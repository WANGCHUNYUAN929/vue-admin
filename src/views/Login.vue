<!--
 * @Descripttion: 
 * @version: 
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-03 19:39:58
 * @LastEditTime: 2021-11-04 13:21:54
-->
<template>
  <div>
    <div class="mt-40 dmeo">login</div>
    <div class="mt-40">login</div>
    <div class="mt-40">login</div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
  }
}
</script>

<style lang="scss" scoped>
.dmeo {
  color: $theme-color;
}
</style>
