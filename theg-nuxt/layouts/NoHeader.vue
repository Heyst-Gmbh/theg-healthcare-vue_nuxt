<template>
  <div id="theg">
    <div id="noheader">
      <div class="main-wrapper">
        <main-header :isBright="true"/>
      </div>
      <div class="">
        <nuxt-page/>
      </div>
      <main-footer/>
    </div>
  </div>
</template>

<script>

import MainFooter from "~/components/pagelayouts/MainFooter.vue";
import MainHeader from "~/components/pagelayouts/MainHeader.vue";


export default {
  name: 'NoHeaderLayout',
  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style scoped>
.sidebar-wrapper {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #f5f5f5;
  padding: 15px;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}
.layout-enter-active,
.layout-leave-active {
  transition: opacity 1s ease;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
