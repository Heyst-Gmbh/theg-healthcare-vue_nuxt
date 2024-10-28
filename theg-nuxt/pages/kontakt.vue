<template>
  <main>
    <SectionForm></SectionForm>
    <SectionLocationsCol section-headline="Unsere Standorte"></SectionLocationsCol>
  </main>
</template>

<script>
import MainHeader from "~/components/pagelayouts/MainHeader.vue";
import MainFooter from "~/components/pagelayouts/MainFooter.vue";
import SectionForm from "~/components/content/SectionForm.vue";
import SectionLocationsCol from "~/components/content/SectionLocationsCol.vue";

definePageMeta({
  headline: 'Kontakt',
  pageTransition: { name: 'layout', mode: 'out-in' },
  layoutTransition: { name: 'layout', mode: 'out-in' },
});


export default {
  name: 'Kontakt',
  components: {
    SectionLocationsCol,
    SectionForm,
    MainHeader,
    MainFooter,
  },
  created() {
    useHead({
      title: 'Kontakt | THE Healthcare Experts Group',
      meta: [
        {
          name: 'description',
          content: 'Lassen Sie uns loslegen!  Der Kontakt zur THE Healthcare Experts Group'
        },
        {
          property: 'og:description',
          content: 'Lassen Sie uns loslegen!  Der Kontakt zur THE Healthcare Experts Group'
        }
      ]
    });
  }
};
</script>

<style scoped>

</style>
