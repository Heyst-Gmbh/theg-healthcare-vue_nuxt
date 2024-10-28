<template>
  <main>
    <ButtonSticky></ButtonSticky>
    <section ref="SectionTextSimpleVariant">
      <SectionTextSimpleVariant
          text="Die maßgeschneiderten Lösungen von THE Group ermöglichen die Transformation in eine effektive und nachhaltige Gesundheitsversorgung – Die Leistungen im Überblick:">
      </SectionTextSimpleVariant>
    </section>
    <section ref="">
      <SectionTopics></SectionTopics>
    </section>
    <section ref="sectioncta">
      <section-c-t-a css-class="full"
                     icon="chevron-right.svg"
                     button-text="zum Formular"
                     url="kontakt"
                     text="Sie haben ein konkretes Projekt im Blick? Oder benötigen Sie Unterstützung bei der Umnutzung einer Immobilie? Sprechen Sie uns an! Wir freuen uns auf ein erstes persönliches Kennenlernen. "
                     headline2="Legen wir los!">
      </section-c-t-a>
    </section>
  </main>
</template>

<script>
import SectionTextSimpleVariant from "~/components/content/SectionTextSimpleVariant.vue";
import SectionTopics from "~/components/content/SectionTopics.vue";
import SectionCTA from "~/components/content/SectionCTA.vue";
import ButtonSticky from "~/components/content/ButtonSticky.vue";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

definePageMeta({
  headline: 'Unsere Kompetenzbereiche',
  pageTransition: { name: 'layout', mode: 'out-in' },
  layoutTransition: { name: 'layout', mode: 'out-in' },
});

gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'Kompetenz',
  components: {ButtonSticky, SectionCTA, SectionTopics, SectionTextSimpleVariant},
  created() {
    useHead({
      title: 'Unsere Leistungsbereich | THE Healthcare Experts Group',
      meta: [
        {
          name: 'description',
          content: ''
        },
        {
          property: 'og:description',
          content: ''
        }
      ]
    });
  },
  mounted() {
    // Animationsfunktion auf mehrere Elemente anwenden
    const elementsToAnimate = [
      this.$refs.SectionTextSimpleVariant,
      this.$refs.SectionTopics,
      this.$refs.sectioncta
    ];

    elementsToAnimate.forEach((element) => {
      if (element) {
        this.animateElement(element);  // Animation für jedes Element anwenden
      }
    });
  },
  methods: {
    animateElement(element) {
      gsap.fromTo(
          element,
          {
            autoAlpha: 0,  // Startzustand der Sichtbarkeit
            y: 200        // Startposition der Y-Achse
          },
          {
            autoAlpha: 1,  // Zielzustand der Sichtbarkeit (voll sichtbar)
            y: 0,          // Zielposition der Y-Achse (zurück auf die Ausgangsposition)
            duration: 1.5, // Dauer der Animation
            scrollTrigger: {
              trigger: element,      // Scroll-Trigger für dieses Element
              start: 'top 95%',      // Startpunkt der Animation
              scrub: false,          // Kein sanftes Scrollen (direkt abgespielt)
            }
          }
      );
    }
  }
};
</script>

<style scoped>

</style>
