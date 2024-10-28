<template>
  <header id="mainheader">
    <div>
      <router-link class="mainlogo" to="/">
        <img v-if="isBright" src="~/assets/img/theg-logo-inverse.svg" alt="Logo"/>
        <img v-else src="~/assets/img/theg-logo-colored.svg" alt="Logo"/>
      </router-link>
      <template v-if="isMobileView">
        <div class="navwrapper">
          <span @click="toggleMenu" class="button" :class="menuOpened ? 'full' : 'outline'">
            <span>Menü</span><!-- Dynamisches Icon, falls die `icon`-Prop gesetzt ist -->
            <div class="ellipse-wrapper">
              <svg v-show="!menuOpened" id="menu-deep" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path id="Pfad_32938" data-name="Pfad 32938" d="M4,6H20" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Pfad_32939" data-name="Pfad 32939" d="M7,12H20" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Pfad_32940" data-name="Pfad 32940" d="M10,18H20" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <svg v-show="menuOpened" xmlns="http://www.w3.org/2000/svg" width="21.634" height="21.634" viewBox="0 0 21.634 21.634">
                <g id="Gruppe_19915" data-name="Gruppe 19915" transform="translate(11,-22) rotate(45)">
                  <path id="Pfad_17504" data-name="Pfad 17504" d="M0,0H19.634" transform="translate(23.14 13.323) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  <path id="Pfad_17505" data-name="Pfad 17505" d="M0,0H19.634" transform="translate(32.957 23.14) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g>
              </svg>

            </div>
          </span>
          <nav :class="{ active: menuOpened }">
            <router-link to="/">Start</router-link>
            <router-link to="/about">Über THE Group</router-link>
            <router-link to="/kompetenzbereiche">Kompetenzbereiche</router-link>
            <router-link to="/kontakt">Kontakt</router-link>
          </nav>
        </div>
      </template>
      <template v-if="!isMobileView">
        <nav>
          <router-link to="/">Start</router-link>
          <router-link to="/about">Über THE Group</router-link>
          <router-link to="/kompetenzbereiche">Kompetenzbereiche</router-link>
          <router-link to="/kontakt">Kontakt</router-link>
        </nav>
      </template>

    </div>
    <img v-if="isBright" class="konturlinie" src="~/assets/img/konturlinie_grey.svg"/>
    <img v-else class="konturlinie" src="~/assets/img/konturlinie.svg"/>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    isBright: {
      type: Boolean,
      default: false // Standardmäßig auf false setzen
    }
  },
  data() {
    return {
      isMobileView: false,
      menuOpened:false,
    }
  },
  methods: {
    toggleMenu(){

      this.menuOpened = !this.menuOpened;
      (this.menuOpened);
    },
    checkMediaQuery() {
      this.isMobileView = window.matchMedia('(max-width: 1024px)').matches;
      (this.isMobileView);
    },
  },
  mounted() {
    this.checkMediaQuery();
    window.addEventListener('resize', this.checkMediaQuery);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMediaQuery);
  },
  watch: {
    $route(to, from) {
      // Overlay schließen, wenn die Route wechselt
      this.menuOpened = false;
    },
  },
};
</script>

<style scoped>

</style>
