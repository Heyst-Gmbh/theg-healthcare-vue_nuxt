<template>
  <div id="theg" :class="{ backdrop: backdropStore.isBackdropActive }">
    <div class="default-headerbackground">
      <div class="main-wrapper">
        <main-header/>
        <div class="default-headerbackground-text">
          <h1>{{ currentHeadline }}</h1>
        </div>
      </div>
    </div>
    <div>
      <nuxt-page/>
    </div>
    <main-footer/>
  </div>
</template>

<script>
import MainFooter from "~/components/pagelayouts/MainFooter.vue";
import MainHeader from "~/components/pagelayouts/MainHeader.vue";
import ButtonComponent from "~/components/content/ButtonComponent.vue";
import {useBackdropStore} from "~/stores/backdrop.js";

export default {
  name: 'DefaultLayout',
  components: {
    ButtonComponent,
    MainHeader,
    MainFooter
  },
  data() {
    return {
      backdropStore: useBackdropStore(), // Pinia-Store in der Datenoption speichern
    };
  },
  created() {
    this.backdropStore = useBackdropStore();
  },
  computed: {
    // Greife auf die Headline im Router meta-Feld zu
    currentHeadline() {
      return this.$route.meta.headline || 'Standard-Headline';
    }
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
