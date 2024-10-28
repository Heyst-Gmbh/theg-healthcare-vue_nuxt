<template>
    <div id="card">
      <nuxt-page/>
    </div>
</template>

<script>

export default {
  name: 'CardLayout',
};
</script>


<style scoped>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 1s ease;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
