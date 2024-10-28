<template>
  <footer id="mainfooter">
    <div class="main-wrapper">
      <div class="mainfooter-flex">
        <div class="col1">
          <router-link class="mainlogo" to="/">
            <img src="~/assets/img/theg-logo-inverse.svg" alt="Logo"/>
          </router-link>
        </div>
        <div class="col2">
          <ul aria-label="Weitere Inhalte">
            <li>
              <router-link to="/impressum">
                Impressum
              </router-link>
            </li>
            <li>
              <router-link to="/datenschutz">
                Datenschutz
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <img class="konturlinie" src="~/assets/img/konturlinie_grey.svg"/>
    <div class="main-wrapper">
      <div class="mainfooter-flex">
        <div class="col1">
          <p class="copyright">© {{ currentYear }} T H E The Healthcare Experts Group GmbH</p>
        </div>
        <div class="col2">
          <ButtonComponent
              scroll-top="true"
              buttonText="Zum Seitenanfang"
              class="none"
              icon="chevron-up.svg"
          />
        </div>
      </div>
    </div>


  </footer>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

export default {
  name: 'Footer',
  components: {ButtonComponent},
  data() {
    return {
      // Lege das aktuelle Jahr beim Laden der Komponente fest
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
/* Füge hier dein CSS für den Footer hinzu */
</style>
