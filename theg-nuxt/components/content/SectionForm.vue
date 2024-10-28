<template>
  <section class="section mdl-SectionForm">
    <div class="main-wrapper">
      <div class="mdl-SectionForm-content">
        <div class="col1">
          <p>Schildern Sie uns kurz Ihr Anliegen per E-Mail – wir nehmen umgehend Kontakt zu Ihnen auf und kümmern uns schnellstmöglich darum.</p>
          <img style="width:100%;" src="~/assets/img/cta-background.svg"/>
        </div>
        <div class="col2">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="input-group">
              <select name="anrede" id="anrede" required>
                <option value="" disabled selected>Geschlecht*</option>
                <option value="Mann">Mann</option>
                <option value="Frau">Frau</option>
                <option value="Divers">Divers</option>
              </select>
            </div>
            <div class="input-group">
              <label>
                <input type="text" placeholder="Vorname*" name="vorname" required/>
              </label>
            </div>
            <div class="input-group">
              <label>
                <input type="text" placeholder="Nachname*" name="nachname" required/>
              </label>
            </div>
            <div class="input-group">
              <label>
                <input type="text" placeholder="Unternehmen (optional)" name="unternehmen"/>
              </label>
            </div>
            <div class="input-group">
              <label>
                <input type="text" placeholder="Telefonnummer (optional)" name="telefonnummer"/>
              </label>
            </div>
            <div class="input-group">
              <label>
                <input type="email" placeholder="E-Mail Adresse*" name="email" required/>
              </label>
            </div>
            <div class="input-group">
              <label>
                <textarea rows="4" cols="50" name="nachricht" placeholder="Ihre Nachricht an uns*" required></textarea>
              </label>
            </div>
            <div class="input-group">
              <input type="checkbox" id="privacy" name="privacy" required/>
              <label for="privacy">
                Ich habe die <a href="/datenschutzerklaerung" target="_blank">Datenschutzerklärung</a> gelesen und bin
                damit einverstanden.
              </label>
            </div>
            <span style="display:inline-flex;float:right" class="button full" @click="sendEmail" tabindex="0" role="button">
              <span>Absenden</span>
              <div class="ellipse-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g id="arrow-right">
                    <path id="Pfad_52" data-name="Pfad 52" d="M0,0H14" transform="translate(5 12)" fill="none"
                          stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    <path id="Pfad_53" data-name="Pfad 53" d="M0,6,6,0" transform="translate(13 12)" fill="none"
                          stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    <path id="Pfad_54" data-name="Pfad 54" d="M0,0,6,6" transform="translate(13 6)" fill="none"
                          stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </g>
                </svg>
              </div>
            </span>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";
import emailjs from '@emailjs/browser';

export default {
  name: 'SectionForm',
  components: { ButtonComponent },
  data() {
    return {
      selectedGender: '',
      Vorname: '',
      Nachname: '',
      Unternehmen: '',
      Telefonnummer: '',
      email: '',
      nachricht: '',
      privacyChecked: false,
    };
  },
  methods: {
    async sendEmail() {
      const privacyChecked = this.$refs.form.privacy.checked;
      if (!privacyChecked) {
        alert('Bitte akzeptieren Sie die Datenschutzerklärung.');
        return;
      }

      if (!this.$refs.form.reportValidity()) {
        return;
      }

      try {
        const recaptchaToken = await this.$recaptcha('email_submission');

        emailjs
            .sendForm('service_8zt31pf', 'template_ftxf1rb', this.$refs.form, 'ejX3mjNl8AiDGufEz')
            .then(
                () => {
                  ('SUCCESS!');
                  alert('Vielen Dank! Ihre Nachricht wurde gesendet.');
                  this.$refs.form.reset();
                },
                (error) => {
                  ('FAILED...', error.text);
                  alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.');
                },
            );
      } catch (error) {
        console.error('reCAPTCHA Fehler:', error);
        alert('reCAPTCHA-Überprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.');
      }
    },
  },
};
</script>

