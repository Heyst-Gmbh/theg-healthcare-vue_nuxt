<template>
  <section class="section mdl-SectionPartnerSliderInfo">
    <div class="main-wrapper">
      <div class="mdl-SectionPartnerSliderInfo-content">
        <div class="col1">
          <swiper-container class="swipercontainer partnerSliderInfo"
                            ref="swiperContainer"
                            :slides-per-view="3"
                            :slides-per-group="3"
                            :grid="{
                              rows: 2,
                              fill: 'row',
                            }"
                            space-between="15"
                            :pagination="{
                                hideOnClick: false,
                                clickable:true,
                                el: '.custom-pagination-partnerSliderInfo',
                              }"
          >
            <swiper-slide
                v-for="(partner, index) in partnerData"
                :key="index"
                @click="selectSlide(index)"
                :class="{ active: selectedSlideIndex === index }"
            >
              <div>
                <img :src="partner.image" />
              </div>
            </swiper-slide>
          </swiper-container>
          <div class="custom-pagination-partnerSliderInfo"></div>
        </div>

        <div class="col2">
          <h2>{{ selectedPartnerInfo.headline }}</h2>
          <p>{{ selectedPartnerInfo.description }}</p>
          <ButtonComponent
              :css-class="cssClass"
              :button-text="buttonText"
              :url="url"
              :icon="icon"
          ></ButtonComponent>
        </div>
      </div>
    </div>
    <img class="konturlinie" src="~/assets/img/konturlinie_grey.svg"/>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import 'swiper/css/grid';

register();

export default {
  name: 'SectionPartnerSliderInfo',
  components: { ButtonComponent },
  props: {
    sectionHeadline: String,
    headline2: String,
    text: String,
    url: String,
    buttonText: String,
    cssClass: String,
    icon: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      selectedSlideIndex: 0, // Der aktuell ausgewählte Slide
      partnerData: [
        {
          image: new URL('~/assets/img/partner/tsc-realestate.png', import.meta.url).href,
          headline: "TSC-Real Esate",
          description: "TSC Real Estate ist ein vertikal voll integriertes Investment- und Asset-Management-, Projektentwicklungs- und Beratungsunternehmen mit rund 50 Experten und einer Spezialisierung auf die gesamte Bandbreite von Immobilien für Senioren, das Gesundheitswesen und die Gesundheitsinfrastruktur. Neben dem Hauptsitz in Berlin betreibt TSC Real Estate Niederlassungen in Italien, Spanien und Luxemburg und betreut von hier aus Investoren sowohl im Core/Core+ als auch im Value-Add- und opportunistischen Bereich. Das in Deutschland verwaltete Immobilienvermögen umfasst derzeit über 170 Immobilien mit einem Gesamtvolumen von ca. 1,6 Milliarden Euro, außerhalb Deutschlands verwaltet TSC Real Estate Immobilien im Wert von weiteren 400 Millionen Euro. "
        },
        {
          image: new URL('~/assets/img/partner/hfbp.png', import.meta.url).href,
          headline: "HFBP Rechtsanwälte & Notar ",
          description: "Von fünf Standorten in Deutschland aus berät HFBP mit über 35 Anwälten und rund 40 weiteren Experten alle Akteure der Gesundheitswirtschaft, darunter Praxen, Heilberufsangehörige, Immobilienunternehmen, Investoren und Projektentwickler, insbesondere aber auch Gebietskörperschaften. Seit über zwei Dekaden liegt der Fokus der Kanzlei dabei auf der Schaffung, dem Erhalt und der Optimierung von ambulanten und sektorenübergreifenden Versorgungsstrukturen. Im Rahmen des von der Kanzlei initiierten MEDZENTRUM-Netzwerks wurden zum Beispiel seit 2002 über 25 MEDZENTRUM-Ärzte- & Gesundheitszentren realisiert. Aktuell sind die Schwerpunkte der Kanzlei n ben der Beratung von ambulant tätigen Akteuren: die Transformation vom Stationären ins Ambulante, die Transformationsberatung von Krankenhäusern sowie die Neuordnung der Gesundheitsversorgung in den betreffenden Regionen. "
        },
        {
          image: new URL('~/assets/img/partner/dbp-beratung.jpg', import.meta.url).href,
          headline: "dpb Beratung",
          description: "Als „gewerbliche Schwester“ von HFBP agiert die dbp Beratung seit über 20 Jahren als Partner der Akteure der Gesundheitswirtschaft im Rahmen von Zukäufen, Nachfolgeregelungen und Fusionen von ambulanten und stationären Einrichtungen. Dabei begleitet sie sowohl institutionelle Investoren, zum Beispiel bei der Suche nach geeigneten Zielinvestments oder auch Vertragsärzte bei der Gründung bzw. dem Verkauf von Praxen. Darüber hinaus identifiziert, akquiriert oder motiviert die dpb Beratung Akteure, die für Medizinische Versorgungszentren (MVZ) in Frage kommen, um zukunftsfähige Praxiskonzepte zu realisieren und eine flächendeckende Versorgung nachhaltig aufzustellen. Seit 2002 initiiert die dbp Beratung unter der Marke MEDZENTRUM zudem Objektgesellschaften mit dem Zweck, benötigte Gesundheitsimmobilien zu realisieren und zu betreiben. Mithilfe von „Investment-Clubs“ sorgt die dbp Beratung dafür, dass sich vor Ort die Kommune selbst, Mietende und andere Stakeholder, aber auch Unternehmen und Bürger an solchen Immobiliengesellschaften beteiligen können.  "
        },
        {
          image: new URL('~/assets/img/partner/vicondo.png', import.meta.url).href,
          headline: "Vicondo Healthcare",
          description: "Vicondo Healthcare unterstützt Kliniken und Gesundheitsversorger dabei, sie wettbewerbsfähig zu halten und zukunftsfähig zu machen, Startups bei der Entwicklung des „Go to market“ ihres Geschäftsmodells oder Investoren bei dem Einstieg in das deutsche Gesundheitswesen. Die Grundlage dieser Arbeit ist langjährige Erfahrung sowie Fach- und Managementexpertise. Das gut 20 Experten umfassende Team besteht aus erfahrenen Ärzten, Klinikmanagern und Beratern, die neben operativer Verantwortung bereits eine Vielzahl von Projekten in Kliniken und anderen Gesundheitseinrichtungen in Deutschland, Österreich und der Schweiz erfolgreich realisiert haben. Kunden von Vicondo profitieren dabei von umfassender Branchen-Expertise – basierend auf der Tatsache, dass alle Berater sowohl auf Dienstleister- als auch Einrichtungsseite gearbeitet haben. "
        },
        {
          image: new URL('~/assets/img/partner/dr-hoeftberger.png', import.meta.url).href,
          headline: "Dr. Höftberger GmbH",
          description: "Prof. Dr. Höftberger und das Team der von ihm gegründeten Dr. Höftberger GmbH engagieren sich gemeinsam in der Begleitung von medizinischen Leistungserbringern in strategischen und operativen Fragen. Nach mehr als 18 Jahren bei einem großen privaten Krankenhausunternehmen, zuletzt als CEO eines börsennotierten Krankenhaus-Teil-Konzerns, kennt Prof. Dr. Christian Höftberger alle Facetten und Herausforderungen der heutigen Leistungserbringer. Als Präsident der Hessischen Krankenhausgesellschaft e.V. engagiert er sich landes- und bundespolitisch für die Verbesserung von Versorgung und die Weiterentwicklung hin zu einem sektorenfreien Gesundheitswesen, frei nach dem Motto: digital vor ambulant, vor stationär, vor rehabilitativ. Der Patient und dessen Bedürfnis zählen – nicht die (bisherige) Abrechnungsart. Gemeinsam mit einem Netzwerk von Partnern betreut die Dr.  Höftberger GmbH Kliniken in der Insolvenz/Sanierung und Restrukturierung. Dabei führt und moderiert sie unter anderem Verhandlungen, berät Politik und coacht Akteure der Gesundheitswirtschaft."
        },
        {
          image: new URL('~/assets/img/partner/archwerk.png', import.meta.url).href,
          headline: "achwerk-Gruppe",
          description: "Vor über 20 Jahren in Herford gegründet, besteht das Team der archwerk-Gruppe heute aus 25 fest angestellten Experten, darunter Architekten, Innenarchitekten, Bauingenieuren, Technikern und Auszubildenden, sowie weiteren freiberuflich tätigen Partnern. Mit über 240 realisierten Facharztpraxen, ambulanten OP-Zentren, radiologischen und nuklearmedizinischen Zentren, Strahlentherapien und Privatkliniken verfügt die archwerk-Gruppe über eine ausgewiesene Kompetenz in der Planung und Umsetzung von medizinischen Einrichtungen. Darüber hinaus realisierte die Gruppe Projekte mit Büro- und Geschäftsgebäuden, Hotels, Wohngebäuden, Gebäude für Gewerbe und Industrie sowie Sonderbauten. Das Motto lautet dabei stets „Gesamtkonzepte aus einer Hand“: Im Vordergrund stehen hier die Planung zukunftsorientierter Gebäude mit höchstem gestalterischem Anspruch. Durch den Einsatz interdisziplinärer Teams von Architekten und Ingenieuren sichert die archwerk-Gruppe eine erfolgreiche und bereichsübergreifende Gesamtplanung von Gebäuden."
        }
      ]
    };
  },
  computed: {
    selectedPartnerInfo() {
      return this.partnerData[this.selectedSlideIndex] || {};
    }
  },
  methods: {
    selectSlide(index) {
      this.selectedSlideIndex = index;
    }
  }
};
</script>

<style scoped lang="scss">
.swipercontainer {
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  &.partnerSliderInfo {
    swiper-slide {
      box-sizing: border-box;

      &:nth-child(3n+1) {
        border-left: 2px solid #cccccc;
        border-right: 2px solid #cccccc;
      }

      &:nth-child(3n+2) {
        //border-bottom:2px solid #cccccc;
      }

      &:nth-child(3n+3) {
        border-left: 2px solid #cccccc;
        border-right: 2px solid #cccccc;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        padding: 0 30px;
      }

      // Hier wird die Klasse 'active' definiert
      &.active {
        border: 2px solid #007bff; /* Beispiel für eine Hervorhebung */
        background-color: rgba(0, 123, 255, 0.1); /* Leichtes Blau für aktiven Hintergrund */
      }
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background: #cccccc;
      top: calc(50% - 15px);
      transform: translateY(-50%);
      z-index: 1;
    }
  }
}
</style>
