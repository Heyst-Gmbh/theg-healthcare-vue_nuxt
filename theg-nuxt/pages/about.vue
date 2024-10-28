<template>
  <main>
    <ButtonSticky></ButtonSticky>
    <section ref="SectionFullWidthImage">
      <SectionFullWidthImage bold-text="The Healthcare Experts Group (THE Group) "
                             text="ist eine zukunftsweisende Unternehmensgruppe, die aus marktführenden JointVenture-Partnern  hervorgegangen ist und sich auf die Beratung im Bereich der Gesundheitsinfrastruktur spezialisiert hat. Durch die gebündelte Expertise in Schaffung, Erhaltung und Optimierung von Gesundheitsinfrastruktur, sowie der Entwicklung, dem Management und Investments in Gesundheitsimmobilien, bietet es maßgeschneiderte Lösungen für die Transformation in eine effektive und nachhaltige Gesundheitsversorgung."
                             headline2="Versorgung. Besser. Machen">
      </SectionFullWidthImage>
    </section>
    <section ref="SectionTextSimple">
      <SectionTextSimple
          text="Durch diese Kombination ist THE Group als einzige Gesellschaft in Deutschland in der Lage, umfangreiche und maßgeschneiderte Lösungen für die Transformation in eine effektive und nachhaltige Gesundheitsversorgung zu konzeptionieren und umzusetzen - mit Schwerpunkten in der"
          text2="THE Group ist somit Ansprechpartner für alle Akteure des Gesundheitsmarktes sowie der Immobilienwirtschaft vor allem aber auch für Städte, Landkreise und Kommunen."
          headline2=""
          :list="['Schaffung, Erhaltung und Optimierung von \n'+
'Gesundheitsinfrastrukturen sowie', 'Entwicklung, dem Management und Investments in Gesundheitsimmobilien und Unternehmen der Gesundheitsversorgung ']"
          section-headline="Unsere Vision"></SectionTextSimple>
    </section>
    <section ref="SectionFullSlider">
      <SectionFullSlider css-class=""
                         button-text=""
                         url=""
                         kontur="true"
                         text="Ein visionäres Management-Team mit klarem Fokus auf eines: Versorgung. Besser. Machen."
                         headline2="Unser Management-Team">
      </SectionFullSlider>
    </section>
    <section ref="SectionAccordion">
    <SectionAccordion id="partner"></SectionAccordion>
    </section>
    <!--    <SectionPartnerSliderInfo css-class="full"-->
    <!--                          button-text="Mehr erfahren"-->
    <!--                          url="kompetenzbereiche"-->
    <!--                          text="Durch die gebündelte Expertise der JointVenture-Partner in Schaffung, Erhaltung und Optimierung von Gesundheitsinfrastruktur, sowie der Entwicklung, dem Management und Investments in Gesundheitsimmobilien, biete THE Group maßgeschneiderte Lösungen für die Transformation in eine effektive und nachhaltige Gesundheitsversorgung."-->
    <!--                          icon="chevron-right.svg"-->
    <!--                          headline2="Etablierte Partner - starke Lösungen!">-->
    <!--    </SectionPartnerSliderInfo>-->
  </main>
</template>

<script>
definePageMeta({
  layout: 'no-header',
  title: 'About' // Individuelle Headline für diese Seite
})

import MainHeader from "~/components/pagelayouts/MainHeader.vue";
import MainFooter from "~/components/pagelayouts/MainFooter.vue";
import SectionFullWidthImage from "~/components/content/SectionFullWidthImage.vue";
import SectionTextSimple from "~/components/content/SectionTextSimple.vue";
import SectionFullSlider from "~/components/content/SectionFullSlider.vue";
import SectionPartnerSliderInfo from "~/components/content/SectionPartnerSliderInfo.vue";
import SectionAccordion from "~/components/content/SectionAccordion.vue";
import ButtonSticky from "~/components/content/ButtonSticky.vue";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'About',
  components: {
    ButtonSticky,
    SectionAccordion,
    SectionPartnerSliderInfo,
    SectionFullSlider,
    SectionTextSimple,
    SectionFullWidthImage,
    MainHeader,
    MainFooter,
  },
  created() {
    useHead({
      title: 'Über uns | THE Healthcare Experts Group',
      meta: [
        {
          name: 'description',
          content: 'THE Healthcare Experts Group stellt sich vor'
        },
        {
          property: 'og:description',
          content: 'THE Healthcare Experts Group stellt sich vor'
        }
      ]
    });
  },
  mounted() {
    // Animationsfunktion auf mehrere Elemente anwenden
    const elementsToAnimate = [
      this.$refs.SectionFullWidthImage,
      this.$refs.SectionTextSimple,
      this.$refs.SectionFullSlider,
      this.$refs.SectionAccordion
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
.layout-enter-active,
.layout-leave-active {
  transition: opacity 2s ease;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
