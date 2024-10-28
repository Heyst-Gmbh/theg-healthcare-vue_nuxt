<template>
  <main>
    <ButtonSticky></ButtonSticky>
    <SectionQuickNavigation></SectionQuickNavigation>
    <section ref="SectionTextSimple1">
      <SectionTextSimple
          text="The Healthcare Experts Group (THE Group) ist eine Unternehmensgruppe für Beratungsleistungen mit Fokus auf den Gesundheitsmarkt in Deutschland und den umliegenden Ländern. Unter dem Dach von THE Group haben sich in ihren jeweiligen Branchen marktführende Partner zusammengeschlossen, um gemeinsam hochspezialisierte Beratung im Gesundheitsmarkt anzubieten."
          headline2="Versorgung. Besser. Machen."
          section-headline="Unsere Mission"
          url="about"
          buttonText="Mehr erfahren"
          cssClass="full"
          no-kontur="true"
          icon="chevron-right.svg"
      >
      </SectionTextSimple>
    </section>
    <!--    <SectionFullSlider-->
    <!--        headline2="Pellentesque odio euismod in pharetra aidiam."-->
    <!--        url="about"-->
    <!--        buttonText="Mehr erfahren"-->
    <!--        cssClass="full"-->
    <!--        icon="chevron-right.svg"-->
    <!--    >-->
    <!--    </SectionFullSlider>-->
    <section ref="SectionButtonListing">
      <SectionButtonListing
          headline2="Die Schwerpunktthemen von THE Group."
          css-class="full"
          button-text="Zur Übersicht"
          url="/kompetenzbereiche"
          icon="chevron-right.svg">
      </SectionButtonListing>
    </section>
    <section ref="SectionPartnerSlider">
      <SectionPartnerSlider css-class="full"
                            button-text="Mehr erfahren"
                            url="about#partner"
                            text="Durch die gebündelte Expertise der JointVenture-Partner in Schaffung, Erhaltung und Optimierung von Gesundheitsinfrastruktur, sowie der Entwicklung, dem Management und Investments in Gesundheitsimmobilien, biete THE Group maßgeschneiderte Lösungen für die Transformation in eine effektive und nachhaltige Gesundheitsversorgung."
                            icon="chevron-right.svg"
                            headline2="Etablierte Partner - starke Lösungen!">
      </SectionPartnerSlider>
    </section>
    <section ref="SectionTextImage">
      <SectionTextImage css-class="outline-reverted"
                        button-text="Zur Übersicht"
                        url="kompetenzbereiche"
                        section-headline="Aktuell"
                        text="Die Experten von THE Group freuen sich darauf, auf der Expo Real in München spannende Gespräche rund um die aktuellen Themen im Bereich Healthcare Real Estate zu führen! Treffen Sie uns vor Ort und gestalten Sie mit uns die Zukunft dieses Wachstumsmarktes!"
                        icon="chevron-right.svg"
                        headline2="THE GROUP auf der Expo Real"
                        image="textimage.jpg"
      >
      </SectionTextImage>
    </section>
    <section ref="sectioncta">
      <section-c-t-a css-class="full"
                     icon="chevron-right.svg"
                     button-text="zum Kontakt"
                     url="kontakt"
                     text="Sie haben eine konkrete Fragestellung? Wir entwickeln die passenden Antworten und decken auf, was Ihnen noch gar nicht bewusst war –sprechen Sie uns an! Wir freuen uns auf ein erstes persönliches Kennenlernen."
                     headline2="Legen wir los!">
      </section-c-t-a>
    </section>
  </main>
</template>

<script>
definePageMeta({
  layout: 'frontpage'
})

import SectionTextSimple from "~/components/content/SectionTextSimple.vue";
import ButtonComponent from "~/components/content/ButtonComponent.vue";
import SectionFullSlider from "~/components/content/SectionFullSlider.vue";
import SectionButtonListing from "~/components/content/SectionButtonListing.vue";
import SectionPartnerSlider from "~/components/content/SectionPartnerSlider.vue";
import SectionTextImage from "~/components/content/SectionTextImage.vue";
import SectionCTA from "~/components/content/SectionCTA.vue";
import SectionQuickNavigation from "~/components/content/SectionQuickNavigation.vue";
import ButtonSticky from "~/components/content/ButtonSticky.vue";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default {

  name: 'Home',
  components: {
    ButtonSticky,
    SectionQuickNavigation,
    SectionCTA,
    SectionTextImage,
    SectionPartnerSlider, SectionButtonListing, SectionFullSlider, ButtonComponent, SectionTextSimple
  },
  created() {
    useHead({
      title: 'Startseite | THE Healthcare Experts Group',
      meta: [
        {
          name: 'description',
          content: 'Willkommen bei THE Healthcare Experts Group - Ihr holistischer Partner im Gesundheitsmarkt.'
        },
        {
          property: 'og:description',
          content: 'Willkommen bei THE Healthcare Experts Group - Ihr holistischer Partner im Gesundheitsmarkt.'
        }
      ]
    });
  },
  mounted() {
    // Animationsfunktion auf mehrere Elemente anwenden
    const elementsToAnimate = [
      this.$refs.SectionTextSimple1,
      this.$refs.SectionButtonListing,
      this.$refs.SectionPartnerSlider,
      this.$refs.SectionTextImage,
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
/* Füge hier dein CSS für die Home-Seite hinzu */
</style>
