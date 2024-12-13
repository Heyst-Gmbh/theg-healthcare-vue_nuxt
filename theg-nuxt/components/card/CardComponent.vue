<template>
  <div class="body_wrap">
    <div class="wrapper">
      <div class="v-card">
        <header>
          <img :src="`/card/images/${imageName}.png`" :alt="`${firstname} ${lastname}`" />
        </header>
        <main>
          <h2>{{ firstname }} {{ lastname }}</h2>
          <span>{{ position }}</span>
          <div class="contact">

            <a v-if="officeMail.length > 5" :href="`mailto:${officeMail}`">
              <span>{{officeMail}}</span>
            </a>

            <hr>

            <a v-if="officePhone.length > 5" :href="`tel:+49${cleanPhone(officePhone)}`">
              <span>{{officePhone}}</span>
            </a>

            <hr>

            <a href="https://www.the-healthcare.group" target="_blank" style="margin-bottom: 50px;">
              <span>Kontakt aufnehmen</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>

            <div class="buttons">
              <a v-if="linkedin.length > 5" :href="linkedin" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
              <a v-if="instagram.length > 5" :href="instagram" target="_blank">
                <i class="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a v-if="xing.length > 5" :href="xing" target="_blank">
                <i class="fa-brands fa-xing"></i>
                <span>Xing</span>
              </a>
            </div>
          </div>

          <a class="main-button ct_button" :href="`/card/vcards/${vcardName}.vcf`">
            <i class="fa-solid fa-user-plus"></i>
            <span>Kontakt speichern</span>
          </a>
        </main>

        <footer>
          <p><strong>T H E The Healthcare Experts Group GmbH</strong><br>Solmsstraße 83<br>60486 Frankfurt am Main</p>
          <a href="https://www.the-healthcare.group" target="_blank">the-healthcare.group</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  props: {
    firstname: String,
    lastname: String,
    position: String,
    instagram: String,
    linkedin: String,
    xing: String,
    officePhone: String,
    officeMail: String,
    imageName: String,
    vcardName: String
  },
  computed: {
    formattedPhoneNumber() {
      return `+49 (0) ${this.cleanPhone(this.officePhone)}`;
    }
  },
  methods: {
    cleanPhone(input) {
      return input.replace(/[/\- ]/g, '').slice(1); // Bereinigt das Format
    }
  },
  setup() {
    // `useHead` muss hier innerhalb der setup-Methode aufgerufen werden
    useHead({
      link: [
        { rel: 'stylesheet', href: '/card/fontawesome/css/fontawesome.css' },
        { rel: 'stylesheet', href: '/card/fontawesome/css/brands.css' },
        { rel: 'stylesheet', href: '/card/fontawesome/css/solid.css' },
        { rel: 'stylesheet', href: '/card/style.css' }
      ]
    });
  },
  mounted() {

  }
};
</script>

<style scoped>
/* Passe hier die Stile an, um dein Design anzupassen. Du kannst auch die ursprüngliche CSS-Datei importieren. */
</style>
