<template>
  <div id="theg">
    <div class="frontpage-headerbackground">
      <div class="main-wrapper">
        <main-header/>
        <div class="frontpage-headerbackground-text">
          <h1>Willkommen bei THE Healthcare Experts Group</h1>
          <span class="subheadline">
            Ihr holistischer Partner im Gesundheitsmarkt.
          </span>
          <ButtonComponent
              url="/about"
              buttonText="Mehr erfahren"
              class="outline"
              icon="chevron-right.svg"
          />
        </div>
      </div>
    </div>
    <div>
      <NuxtPage />
    </div>
    <main-footer/>
  </div>
</template>

<script>


import MainFooter from "~/components/pagelayouts/MainFooter.vue";
import MainHeader from "~/components/pagelayouts/MainHeader.vue";
import ButtonComponent from "~/components/content/ButtonComponent.vue";

definePageMeta({
  pageTransition: { name: 'layout', mode: 'out-in' },
  layoutTransition: { name: 'layout', mode: 'out-in' },
})
export default {
  name: 'FrontpageLayout',
  components: {
    ButtonComponent,
    MainHeader,
    MainFooter
  }
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

<style>

</style>
