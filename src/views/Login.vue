<!--
 * @Descripttion: 
 * @version: 
 * @Author: WANGCHUNYUAN
 * @Date: 2021-11-03 19:39:58
 * @LastEditTime: 2021-11-05 17:06:45
-->
<template>
  <div>
    <div class="mt-40 dmeo"></div>
    <div class="mt-40">login</div>
    <div class="mt-40">login</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['userInfo'])
  },
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
