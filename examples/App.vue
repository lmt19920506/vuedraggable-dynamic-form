<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <t-form-design></t-form-design>
  </div>
</template>

<script>
import leftMenuItem from "./views/leftMenu/leftMenuItem";
export default {
  components: {
    leftMenuItem
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  // background: red;
}
</style>
