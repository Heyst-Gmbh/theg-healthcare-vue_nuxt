<template>
  <section class="section mdl-SectionLocationsCol">
    <div class="main-wrapper">
      <div class="mdl-SectionLocationsCol-content">
        <div class="col1">
          <span class="sectionHeadline">Unser Standort</span>
          <img v-if="!noKontur" class="konturlinie" src="~/assets/img/konturlinie_grey.svg" />
        </div>
      </div>
      <div class="mdl-SectionLocationsCol-content">
        <div class="col1">
          <h3>T H E The Healthcare Experts Group GmbH</h3>
        </div>
        <div class="col2">
          <p>
            Solmsstraße 83<br />
            60486 Frankfurt am Main
          </p>
          <a href="#" @click.prevent="decodeAndSendEmail">info@the-healthcare.group</a>
        </div>
        <div class="col3"></div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

export default {
  name: "SectionLocationsCol",
  components: { ButtonComponent },
  props: {
    sectionHeadline: {
      type: String,
      required: true,
    },
    noKontur: {
      type: Boolean,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      email: "info@the-healthcare.group", // Deine echte E-Mail-Adresse
      encodedEmail: "", // Wird später verschlüsselt
    };
  },
  methods: {
    encodeEmail(email) {
      return btoa(email); // Base64-Verschlüsselung der E-Mail-Adresse
    },
    decodeEmail(encodedEmail) {
      return atob(encodedEmail); // Base64-Entschlüsselung der E-Mail-Adresse
    },
    decodeAndSendEmail() {
      const decodedEmail = this.decodeEmail(this.encodedEmail);
      const mailtoLink = `mailto:${decodedEmail}`;
      window.location.href = mailtoLink; // Öffne den Mail-Client mit der entschlüsselten E-Mail-Adresse
    },
  },
  mounted() {
    // Verschlüssele die E-Mail-Adresse, sobald die Komponente gemountet ist
    this.encodedEmail = this.encodeEmail(this.email);
    console.log(this.email);
    console.log(this.encodedEmail);
  },
};
</script>
