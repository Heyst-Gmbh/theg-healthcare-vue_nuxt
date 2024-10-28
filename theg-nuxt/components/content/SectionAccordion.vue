<template>
  <section :id="id" class="section mdl-SectionAccordion">
    <div class="main-wrapper">
      <div class="mdl-SectionAccordion-content">
        <div class="col1">
          <h2>Unsere Partner</h2>
          <div v-for="(panel, index) in panels" :key="index" class="mdl__accordion__panel" @click="togglePanel(index)">
            <div>
              <div class="ellipse-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="21.634" height="21.634" viewBox="0 0 21.634 21.634">
                  <g id="Gruppe_19915" data-name="Gruppe 19915" transform="translate(-12.323 -12.323)">
                    <path id="Pfad_17504" data-name="Pfad 17504" d="M0,0H19.634"
                          transform="translate(23.14 13.323) rotate(90)" fill="none" stroke="#fff"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Pfad_17505" data-name="Pfad 17505" d="M0,0H19.634"
                          transform="translate(32.957 23.14) rotate(180)" fill="none" stroke="#fff"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </g>
                </svg>
              </div>
              <h3>{{ panel.title }}</h3>
            </div>

            <div ref="content" :class="{ active: activePanel === index }" class="panel-content"
                 :style="getPanelStyle(index)">
              <div ref="contentInner" class="panel-content-wrapper">
                <div>
                  <!--                  <h3>{{ panel.title }}</h3>-->
                  <p>{{ panel.content }}</p>
                  <ButtonComponent v-if="!isMobileView"
                                   scroll-top="true"
                                   scrollTarget="#partner"
                                   buttonText="Zum Seitenanfang"
                                   class="none"
                                   icon="chevron-up.svg"
                  />
                </div>
                <img :src="panel.image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div>

  </div>
</template>

<script>
import {ref, onMounted, reactive} from 'vue';
import ButtonComponent from "~/components/content/ButtonComponent.vue";

export default {
  name: "SectionAccordion",
  components: {ButtonComponent},
  props: {
    id: {
      type: String,
      required: false,
      default:null
    },
  },
  data() {
    return {
      openButton: null,
      panels: [
        {
          image: new URL('~/assets/img/partner/tsc-realestate.png', import.meta.url).href,
          title: "TSC-Real Estate",
          content: "TSC Real Estate ist ein vertikal voll integriertes Investment- und Asset-Management-, Projektentwicklungs- und Beratungsunternehmen mit rund 50 Experten und einer Spezialisierung auf die gesamte Bandbreite von Immobilien für Senioren, das Gesundheitswesen und die Gesundheitsinfrastruktur. Neben dem Hauptsitz in Berlin betreibt TSC Real Estate Niederlassungen in Italien, Spanien und Luxemburg und betreut von hier aus Investoren sowohl im Core/Core+ als auch im Value-Add- und opportunistischen Bereich. Das in Deutschland verwaltete Immobilienvermögen umfasst derzeit über 170 Immobilien mit einem Gesamtvolumen von ca. 1,6 Milliarden Euro, außerhalb Deutschlands verwaltet TSC Real Estate Immobilien im Wert von weiteren 400 Millionen Euro. "
        },
        {
          image: new URL('~/assets/img/partner/hfbp.png', import.meta.url).href,
          title: "HFBP Rechtsanwälte & Notar ",
          content: "Von fünf Standorten in Deutschland aus berät HFBP mit über 35 Anwälten und rund 40 weiteren Experten alle Akteure der Gesundheitswirtschaft, darunter Praxen, Heilberufsangehörige, Immobilienunternehmen, Investoren und Projektentwickler, insbesondere aber auch Gebietskörperschaften. Seit über zwei Dekaden liegt der Fokus der Kanzlei dabei auf der Schaffung, dem Erhalt und der Optimierung von ambulanten und sektorenübergreifenden Versorgungsstrukturen. Im Rahmen des von der Kanzlei initiierten MEDZENTRUM-Netzwerks wurden zum Beispiel seit 2002 über 25 MEDZENTRUM-Ärzte- & Gesundheitszentren realisiert. Aktuell sind die Schwerpunkte der Kanzlei neben der Beratung von ambulant tätigen Akteuren: die Transformation vom Stationären ins Ambulante, die Transformationsberatung von Krankenhäusern sowie die Neuordnung der Gesundheitsversorgung in den betreffenden Regionen. "
        },
        {
          image: new URL('~/assets/img/partner/dbp-beratung.jpg', import.meta.url).href,
          title: "dpb Beratung",
          content: "Als „gewerbliche Schwester“ von HFBP agiert die dbp Beratung seit über 20 Jahren als Partner der Akteure der Gesundheitswirtschaft im Rahmen von Zukäufen, Nachfolgeregelungen und Fusionen von ambulanten und stationären Einrichtungen. Dabei begleitet sie sowohl institutionelle Investoren, zum Beispiel bei der Suche nach geeigneten Zielinvestments oder auch Vertragsärzte bei der Gründung bzw. dem Verkauf von Praxen. Darüber hinaus identifiziert, akquiriert oder motiviert die dpb Beratung Akteure, die für Medizinische Versorgungszentren (MVZ) in Frage kommen, um zukunftsfähige Praxiskonzepte zu realisieren und eine flächendeckende Versorgung nachhaltig aufzustellen. Seit 2002 initiiert die dbp Beratung unter der Marke MEDZENTRUM zudem Objektgesellschaften mit dem Zweck, benötigte Gesundheitsimmobilien zu realisieren und zu betreiben. Mithilfe von „Investment-Clubs“ sorgt die dbp Beratung dafür, dass sich vor Ort die Kommune selbst, Mietende und andere Stakeholder, aber auch Unternehmen und Bürger an solchen Immobiliengesellschaften beteiligen können.  "
        },
        {
          image: new URL('~/assets/img/partner/vicondo.png', import.meta.url).href,
          title: "Vicondo Healthcare",
          content: "Vicondo Healthcare unterstützt Kliniken und Gesundheitsversorger dabei, sie wettbewerbsfähig zu halten und zukunftsfähig zu machen, Startups bei der Entwicklung des „Go to market“ ihres Geschäftsmodells oder Investoren bei dem Einstieg in das deutsche Gesundheitswesen. Die Grundlage dieser Arbeit ist langjährige Erfahrung sowie Fach- und Managementexpertise. Das gut 20 Experten umfassende Team besteht aus erfahrenen Ärzten, Klinikmanagern und Beratern, die neben operativer Verantwortung bereits eine Vielzahl von Projekten in Kliniken und anderen Gesundheitseinrichtungen in Deutschland, Österreich und der Schweiz erfolgreich realisiert haben. Kunden von Vicondo profitieren dabei von umfassender Branchen-Expertise – basierend auf der Tatsache, dass alle Berater sowohl auf Dienstleister- als auch Einrichtungsseite gearbeitet haben. "
        },
        {
          image: new URL('~/assets/img/partner/dr-hoeftberger.png', import.meta.url).href,
          title: "Dr. Höftberger GmbH",
          content: "Prof. Dr. Höftberger und das Team der von ihm gegründeten Dr. Höftberger GmbH engagieren sich gemeinsam in der Begleitung von medizinischen Leistungserbringern in strategischen und operativen Fragen. Nach mehr als 18 Jahren bei einem großen privaten Krankenhausunternehmen, zuletzt als CEO eines börsennotierten Krankenhaus-Teil-Konzerns, kennt Prof. Dr. Christian Höftberger alle Facetten und Herausforderungen der heutigen Leistungserbringer. Als Präsident der Hessischen Krankenhausgesellschaft e.V. engagiert er sich landes- und bundespolitisch für die Verbesserung von Versorgung und die Weiterentwicklung hin zu einem sektorenfreien Gesundheitswesen, frei nach dem Motto: digital vor ambulant, vor stationär, vor rehabilitativ. Der Patient und dessen Bedürfnis zählen – nicht die (bisherige) Abrechnungsart. Gemeinsam mit einem Netzwerk von Partnern betreut die Dr.  Höftberger GmbH Kliniken in der Insolvenz/Sanierung und Restrukturierung. Dabei führt und moderiert sie unter anderem Verhandlungen, berät Politik und coacht Akteure der Gesundheitswirtschaft."
        },
        {
          image: new URL('~/assets/img/partner/archwerk.png', import.meta.url).href,
          title: "archwerk-Gruppe",
          content: "Vor über 20 Jahren in Herford gegründet, besteht das Team der archwerk-Gruppe heute aus 25 fest angestellten Experten, darunter Architekten, Innenarchitekten, Bauingenieuren, Technikern und Auszubildenden, sowie weiteren freiberuflich tätigen Partnern. Mit über 240 realisierten Facharztpraxen, ambulanten OP-Zentren, radiologischen und nuklearmedizinischen Zentren, Strahlentherapien und Privatkliniken verfügt die archwerk-Gruppe über eine ausgewiesene Kompetenz in der Planung und Umsetzung von medizinischen Einrichtungen. Darüber hinaus realisierte die Gruppe Projekte mit Büro- und Geschäftsgebäuden, Hotels, Wohngebäuden, Gebäude für Gewerbe und Industrie sowie Sonderbauten. Das Motto lautet dabei stets „Gesamtkonzepte aus einer Hand“: Im Vordergrund stehen hier die Planung zukunftsorientierter Gebäude mit höchstem gestalterischem Anspruch. Durch den Einsatz interdisziplinärer Teams von Architekten und Ingenieuren sichert die archwerk-Gruppe eine erfolgreiche und bereichsübergreifende Gesamtplanung von Gebäuden."
        }
      ],
      activePanel: null,
      panelHeight: null
    };
  },
  methods: {
    togglePanel(index) {
      if (this.activePanel === index) {
        this.activePanel = null; // Collapse the current panel
      } else {

        this.panelHeight = this.$refs.contentInner[index].offsetHeight + 200;
        console.log(this.panelHeight);
        this.activePanel = index; // Open the clicked panel
      }
    },
    getPanelStyle(index) {
      return this.activePanel === index ? {maxHeight: this.panelHeight+'px'} : {maxHeight: '0px'}; // Adjust as needed
    }
  },
};

</script>

<style lang="scss" scoped>
.mdl__accordion__panel {
  font-size: 30px;
  width: 100%;
  gap: 25px;
  color: #202B6D;
  cursor: pointer;
  padding: 50px 0;
  border-bottom:1px solid #cccccc;
  @media screen and (max-width:480px) {
    padding: 25px 0;
  }

  > div:first-of-type {
    display:flex;
    gap: 25px;
    align-items: center;
    h3 {
      margin:0px;
    }
  }

  .ellipse-wrapper {
    flex: 0 0 auto;
    width:45px;
    height:45px;
    @media screen and (max-width:480px) {
      width:32px;
      height:32px;
      svg {
        width:50%
      }
    }
  }

  h3 {
    color: #202B6D;
    font-size: 30px;
    font-weight: 500;
    @media screen and (max-width:1024px) {
      font-size: 2.1875rem;
    }
    @media screen and (max-width:480px) {
      font-size: 1.5rem;
    }
  }
}

.panel-content {
  overflow: hidden;
  transition: max-height 0.8s ease;
  max-height: 0;
  background: #F3F3F3;
  &.active {
    margin-top:30px;
  }
}

.panel-content-wrapper {
  gap: 150px;
  display: flex;
  align-items: flex-start;
  padding: 60px;
  color: #202B6D;
  @media screen and (max-width:1024px) {
    flex-direction: column;
    gap:20px;
  }
  @media screen and (max-width:480px) {
    padding:25px;
  }

  > div {
    flex: 1 1 auto;
    @media screen and (max-width:1024px) {
      order:2;
    }
  }

  h3 {
    font-size: 30px;
    margin-bottom: 40px;
    @media screen and (max-width:1024px) {
      font-size: 2.1875rem;
    }
    @media screen and (max-width:480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 24px;
    @media screen and (max-width:1024px) {
      font-size:1.2rem;
    }
    @media screen and (max-width:480px) {
      font-size:1.125rem;
    }
  }

  img {
    flex: 0 0 auto;
    max-width: 350px;
    height: auto;
    width:100%;
  }
}

.panel-content.active {
  /* Panel is open, styling handled via computed maxHeight */
}
</style>
