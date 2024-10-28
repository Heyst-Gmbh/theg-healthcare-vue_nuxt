<template>
  <section class="section mdl-SectionTopics">
    <div class="main-wrapper">
      <div class="mdl-SectionTopics-content">
        <div class="sidebar">
          <ul>
            <li
                v-for="(item, index) in topics"
                :key="index"
                @click="setActiveTopic(index)"
                :class="{ active: index === activeTopic }"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div ref="overlayContent" :class="['content', {active: isActive}]">
          <template v-if="isMobileView">
            <span class="closeOverlay" @click="closeOverlay">
              <div class="ellipse-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="21.634" height="21.634" viewBox="0 0 21.634 21.634">
                  <g id="Gruppe_19915" data-name="Gruppe 19915" transform="translate(11,-22) rotate(45)">
                    <path id="Pfad_17504" data-name="Pfad 17504" d="M0,0H19.634" transform="translate(23.14 13.323) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path id="Pfad_17505" data-name="Pfad 17505" d="M0,0H19.634" transform="translate(32.957 23.14) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  </g>
                </svg>

              </div>
            </span>
          </template>
          <div v-if="activeTopic !== null">
            <transition name="fade" mode="out-in">
              <div :key="activeTopic">
                <h2>{{ topics[activeTopic].title }}</h2>
                <div v-for="(block, index) in topics[activeTopic].content" :key="index">
                  <template v-if="block.type === 'heading'">
                    <h3>{{ block.text }}</h3>
                  </template>
                  <template v-if="block.type === 'paragraph'">
                    <p>{{ block.text }}</p>
                  </template>
                  <template v-if="block.type === 'list'">
                    <ul>
                      <li v-for="(item, index) in block.items" :key="index">{{ item }}</li>
                    </ul>
                  </template>
                  <template v-if="block.type === 'image'">
                    <img :src="block.src" :alt="block.alt"/>
                  </template>
                </div>
              </div>
            </transition>
          </div>
          <div v-else>
            <p>Please select a topic from the menu.</p>
          </div>
          <img class="konturlinie" src="~/assets/img/konturlinie_grey.svg"/>
          <ButtonComponent v-if="!isMobileView"
              scroll-top="true"
              buttonText="Zum Seitenanfang"
              class="none"
              icon="chevron-up.svg"
          />
        </div>
      </div>
    </div>
    <!--    <img class="konturlinie" src="~/assets/img/konturlinie_grey.svg"/>-->
  </section>

</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";
import {useBackdropStore} from "~/stores/backdrop.js";
export default {
  components: {ButtonComponent},
  data() {
    return {
      backdropStore: null,
      isMobileView: false,
      isActive: false,
      topics: [
        {
          title: "Schaffung, Erhaltung und Optimierung der Gesundheitsversorgung",
          content: [
            {
              type: "paragraph",
              text: "Eine stabile und leistungsfähige Gesundheitsversorgung bildet das Rückgrat einer funktionierenden Gesellschaft. Angesichts des demografischen Wandels, technologischen Fortschritts und sich verändernden Bedürfnissen der Menschen steht die Gesundheitsbranche aktuell vor zahlreichen Herausforderungen. Das Schaffen, der Erhalt und das Optimieren von Gesundheitsinfrastrukturen erfordern ein qualitätsgesichertes Zusammenspiel interdisziplinärer Akteure sowie die Implementierung nachhaltiger Konzepte. Auf Basis gezielter Analysen, Erhebung von Bedarfen und Ableitung von Notwendigkeiten sowie die Dynamik eines dadurch ausgelösten Erneuerungsprozesses können die Experten von THE Group dabei helfen, flächendeckende, hochwertige Versorgungsstrukturen aufrechtzuerhalten, auszubauen und kontinuierlich zu verbessern. Dafür setzen unsere Mitarbeitenden ihre langjährige Erfahrung in diversen Projekten ein."
            },
            {type: "heading", text: "Schaffung neuer Versorgungseinrichtungen"},
            {
              type: "paragraph",
              text: "Die Schaffung neuer Versorgungseinrichtungen und kooperativer Strukturen ist entscheidend, um den flächendeckenden Zugang zur medizinischen Versorgung zu gewährleisten. Dies umfasst die Modernisierung bestehender Strukturen wie Praxen, Kliniken und medizinischen Versorgungszentren. Ergänzende nicht-ärztliche Dienstleistungseinrichtungen schützen und unterstützen die knapper werdende Ressource ärztlicher Arbeitskraft. Dabei sind nicht nur Investitionen in bauliche und technische Infrastruktur notwendig, sondern auch die Förderung von Fachkräften, die mit den Anforderungen eines dynamischen Gesundheitsmarkts umgehen können. Innovative Konzepte wie Telemedizin und digitale Gesundheitsplattformen können hierbei unterstützen, die Gesundheitsversorgung ortsunabhängiger zu gestalten und eine breitere Bevölkerungsgruppe zu erreichen. Wir von THE Group bringen in all diesen Punkten unsere Kompetenzen ein, um unseren Kunden bei der Erreichung ihrer Ziele zur Seite zu stehen."
            },
            {type: "heading", text: "Erhalt bestehender Gesundheitseinrichtungen"},
            {
              type: "paragraph",
              text: "Der Erhalt bestehender Gesundheitseinrichtungen ist genauso bedeutsam wie deren Schaffung. Hierfür notwendig sind"
            },
            {
              type: "list",
              items: ["die Sicherung von finanziellen Ressourcen,", "die Anpassung an neue regulatorische Rahmenbedingungen,", "eine kontinuierliche Fortbildung von Mitarbeitenden."]
            },
            {
              type: "paragraph",
              text: "Eine gut gepflegte und effizient betriebene Infrastruktur sorgt dafür, dass Patienten weiterhin Zugang zu verlässlichen medizinischen Leistungen haben. Auch Nachfolgeregelungen und die Integration neuer technischer Möglichkeiten spielen eine wichtige Rolle, um die Kontinuität der Versorgung zu gewährleisten und Versorgungslücken zu verhindern."
            },
            {type: "heading", text: "Optimierung der Gesundheitsversorgung"},
            {
              type: "paragraph",
              text: "Die Optimierung der Gesundheitsversorgung zielt darauf ab, Effizienz und Qualität stetig zu verbessern. Dies kann durch den Einsatz moderner Technologien wie Künstliche Intelligenz (KI), Big Data oder robotergestützte Chirurgie geschehen, die die Diagnose- und Behandlungsmöglichkeiten deutlich erweitern. Ein besonderes Augenmerk liegt hierbei vor allem auf folgenden Punkten:"
            },
            {
              type: "list",
              items: ["Optimieren der Prozesse innerhalb von Einrichtungen, z. B. besseres Vernetzen von Akteuren im Gesundheitswesen", "Minimieren von Bürokratie ", "der interdisziplinären Zusammenarbeit", "Steigern der Patientenorientierung,", "Fördern individualisierter Behandlungsansätze"]
            },
            {
              type: "paragraph",
              text: "Alle drei Bereiche beinhalten komplexe und miteinander verbundene Aufgaben, die eine proaktive und strategische Herangehensweise erfordern. Durch gezielte Investitionen, den Einsatz neuer Technologien und das Fördern von Fachkräften kann die Gesundheitsinfrastruktur in Deutschland nachhaltig gestärkt werden. Das langfristige Sicherstellen einer flächendeckenden und qualitativ hochwertigen Gesundheitsversorgung hängt von dem ständigen Anpassen an sich wandelnde Rahmenbedingungen und der Bereitschaft zur kontinuierlichen Weiterentwicklung ab. Nur so kann das Gesundheitssystem zukunftsfähig gestaltet und den Bedürfnissen der Gesellschaft gerecht werden.  THE Group hilft Entscheidungsträgern, Problemstellungen zu verstehen, bisher ungesehene Probleme aufzudecken, Lösungswege zu skizzieren und diese umzusetzen. Die Grundlage hierfür bildet ein Netzwerk aus interdisziplinären Projektteams unter Führung der Projektleiter von THE Group!"
            },
          ]
        },
        {
          title: "Entwicklung & Realisierung von Ärzte- & Gesundheitszentren ",
          content: [
            {
              type: "paragraph",
              text: "Ärzte- und Gesundheitszentren entstehen von innen nach außen. Die Bedürfnisse und Vorgaben der Nutzer sind die Grundlagen für Planung und Umsetzung. Ohne, dass der konkrete Bedarf und damit die Nutzung des Ärzte- & Gesundheitszentrums feststehen, ist diese Immobilienklasse nicht umsetzbar. Erfolgreich ist die Projektrealisierung, wenn für konkrete Gesundheitsdienstleister eine Spezialimmobilie geplant und ausgeführt wird. Hierfür sind ein tiefes Verständnis für die spezifischen Bedürfnisse des Gesundheitswesens sowie eine präzise Planung und Umsetzung erforderlich, um eine optimale Versorgung und Patientenbetreuung sicherzustellen. THE Group bietet umfassende Dienstleistungen zur Entwicklung von modernen, funktionalen und zukunftssicheren Ärzte- und Gesundheitszentren. "
            },

            {type: "heading", text: "Bedarfsanalyse "},
            {
              type: "paragraph",
              text: "Am Beginn steht die Analyse der regionalen Situation. Aus der Erhebung der erforderlichen Informationen leiten unsere Experten die Bedarfe und Chancen ab, identifizieren oder initiieren die Anker der gewollten Entwicklung. Hierbei berücksichtigen sie sowohl die medizinischen Bedürfnisse als auch die demografischen und wirtschaftlichen Faktoren, um ein passgenaues Konzept zu entwickeln. Im Rahmen dieser Bedarfsanalyse werden bereits regelmäßig die konkreten Mieter und diejenigen Dienstleister, die es noch zu gewinnen gilt, identifiziert."
            },

            {type: "heading", text: "Konzeptentwicklung"},
            {
              type: "paragraph",
              text: "Auf Basis der Analyse erstellen unsere Experten maßgeschneiderte Konzepte für Ihr Ärzte- und Gesundheitszentrum. Diese umfasst Planung, Kalkulation, Investmentdesign und die Schaffung der Grundlagen einer Projektreife. "
            },

            {type: "heading", text: "Projektrealisierung"},
            {
              type: "paragraph",
              text: "Kommt das Projekt in die Realisierungsphase, leiten unsere Ansprechpartner das Vorhaben an einen geeigneten Investor über oder schaffen die Grundlagen zur Realisierung der Spezialimmobilien durch Objektgesellschaften, welche die Häuser entwickeln, bauen und betreiben. Hierdurch sind vielfältige Beteiligungsmodelle möglich!"
            },
          ]
        },
        {
          title: "Transformation und Restrukturierung von Kliniken ",
          content: [
            {
              type: "paragraph",
              text: "Das deutsche Gesundheitswesen befindet sich in einem fundamentalen Transformationsprozess, der durch die folgenden Parameter gekennzeichnet ist:"
            },
            {
              type: "list",
              items: ["Steigende Anforderungen an Effizienz, Qualität und Zugänglichkeit der Versorgung ", "Geänderte rechtliche Rahmenbedingungen ", "Knappheit finanzieller Ressourcen"]
            },

            {
              type: "paragraph",
              text: "Kliniken stehen dabei vor der Herausforderung, ihre Strukturen und Prozesse anpassen zu müssen, um diesen Veränderungen gerecht zu werden. In vielen Fällen stellt sich jedoch die grundlegende Frage, ob und wie es mit einer Klinik weiter gehen kann und wie gewünschte Ziele erreichbar sind. Die Maxime „digital vor ambulant vor stationär vor Rehabilitation“ bietet hier mit der Priorisierung der verschiedenen Versorgungsstufen einen generellen strategischen Leitfaden mit dem Ziel, bestehende Ressourcen optimal zu nutzen und eine verbesserte Patientenversorgung zu erreichen. THE Group steht Ihnen hierbei als erfahrener Partner zur Seite, um diesen anspruchsvollen Transformationsprozess erfolgreich zu gestalten und Ihre Klinik zukunftsfähig zu machen."
            },
            {type: "heading", text: "„Digital vor ambulant vor stationär vor Rehabilitation“ "},
            {
              type: "paragraph",
              text: "Eine umfassende Neuausrichtung der Gesundheitsversorgung ist dringend notwendig. \n" +
                  "Gründe gibt es viele:"
            },
            {
              type: "list",
              items: ["Schnelle Entwicklung neuer Technologien", "Dynamische Überalterung der Gesellschaft", "Zunehmende Knappheit personeller und finanzieller Ressourcen", "Wachsender Bedarf an finanziellen Mitteln", "Verändernde Bedürfnisse der Menschen"]
            },
            {
              type: "paragraph",
              text: "Die politische Maxime „Digital vor ambulant vor stationär vor Rehabilitation“ soll sicher stellen, dass diese Neuausrichtung strategisch und effektiv erfolgt."
            },
            {type: "heading", text: "„Digital vor ambulant“"},
            {
              type: "paragraph",
              text: "Die Priorisierung digitaler Lösungen wie Telemedizin, elektronischer Patientenakten und KI-gestützter Diagnosetools ist entscheidend, um Versorgungsprozesse zu modernisieren. Denn: Digitale Technologien ermöglichen eine effizientere und patientenfreundlichere Betreuung. Wir unterstützen Kliniken bei der Identifizierung, Integration und Umsetzung dieser Technologien im Tagesgeschäft, um die erste Versorgungsstufe optimal zu nutzen und so den Transformationsprozess voranzutreiben."
            },
            {type: "heading", text: "„Ambulant vor stationär“"},
            {
              type: "paragraph",
              text: "Verschiedene Studien, darunter welche des Robert-Koch-Instituts (RKI) und der Bertelsmann Stiftung, sowie der OECD-Bericht zeigen: Wann immer möglich, sollten und wollen Menschen ambulant behandelt werden. Hierdurch verringert sich die Belastung der stationären Einrichtungen. Mitunter lässt sie sich ganz vermeiden. Die Experten bei THE Group helfen dabei, Versorgungsstrukturen wie Ärzte- und Gesundheitszentren zu entwickeln bzw. bereits vorhandene Strukturen zu optimieren. Denn ambulante, den Kliniken vorgelagerte Strukturen können dazu beitragen, Krankenhäuser der Zukunft vor falscher Inanspruchnahme zu schützen. So können die jeweiligen Akteure vor Ort stationäre Kapazitäten entlasten und gleichzeitig eine hohe Behandlungsqualität sicherstellen."
            },
            {type: "heading", text: "„Stationär vor Rehabilitation“"},
            {
              type: "paragraph",
              text: "Stationäre Einrichtungen bleiben bis auf Weiteres unerlässlich für komplexe oder akute Behandlungsfälle, insbesondere in der Nacht und am Wochenende. Unsere Experten beraten Kliniken bei der effizienten Bereitstellung ihrer Ressourcen und der Optimierung von Prozessen, um die Patientenzufriedenheit zu erhöhen und die Aufenthaltsdauer zu minimieren – ohne hierbei die medizinische Betreuung zu beeinträchtigen."
            },
            {type: "heading", text: "„Rehabilitation als Neuanfang“"},
            {
              type: "paragraph",
              text: "Rehabilitative Maßnahmen sind dann gefragt, wenn akute Behandlungen nicht zielführend sind. Die Experten von THE Group unterstützen hier bei der Planung und Integration von Rehabilitationsangeboten in die Versorgungsstruktur, um eine nachhaltige Genesung zu fördern und die optimale Patientenbetreuung sicherzustellen. "
            },
            {
              type: "paragraph",
              text: "Sie stehen vor weitreichenden Veränderungen? Wir sind gerne an Ihrer Seite. Unsere Experten stimmen gerne die ersten Schritte auf Ihrem Weg zur Modernisierung oder für ein neues Projekt mit Ihnen ab. Lernen Sie uns kennen – persönlich, telefonisch oder in einem Videocall. Im Kontext des grundlegenden Transformationsprozesses sind wir der der ideale Partner, um Sie bei der Restrukturierung oder Transformation von Kliniken zu begleiten. Unser tiefgreifendes Verständnis der Gesundheitsmärkte und unsere Erfahrung in der strategischen Neuausrichtung ermöglichen es uns, Ihnen maßgeschneiderte Lösungen anzubieten. Wir helfen dabei, die aktuellen Herausforderungen der Transformation zu bewältigen und Kliniken auf die Zukunft vorzubereiten. Unsere Unterstützung reicht von der Integration digitaler Technologien über die Optimierung ambulanter und stationärer Strukturen bis hin zur Planung rehabilitativer Maßnahmen. Unsere Experten stellen sicher, dass Kliniken den sich wandelnden Anforderungen des Gesundheitsmarktes erfolgreich anpassen können. "
            }
          ]
        },
        {
          title: "Gesundheitsaffine Umnutzung von Bestandsimmobilien ",
          content: [
            {
              type: "paragraph",
              text: "Die Umnutzung von Bestandsimmobilien zu gesundheitsaffinen Einrichtungen ist eine attraktive Möglichkeit, geeignete Gebäude effizient und nachhaltig umzunutzen. Wir beurteilen den Bestand, ermitteln den Bedarf, kalkulieren die Kosten und entwerfen die betriebswirtschaftlichen Grundlagen. Unsere interdisziplinären Projektteams begleiten sie betriebswirtschaftlich, juristisch, planerisch, baukoordinierend, und kommunikativ. So gewährleistet THE Group geeignete, bestehende Immobilien umzunutzen, sodass sie den Anforderungen des modernen Gesundheitswesens entsprechen und gleichzeitig den wirtschaftlichen und funktionalen Wert der Immobilie maximieren."
            },
          ]
        },
        {
          title: "(Betriebs-)Konzepte für Praxen, MVZ und Gesundheitszentren",
          content: [
            {
              type: "paragraph",
              text: "Das Gesundheitswesen befindet sich in einem dynamischen Wandel, der sowohl neu entstehende als auch bestehende Arztpraxen und Medizinische Versorgungszentren (MVZ) betrifft. Um diesen Anforderungen gerecht zu werden, ist es entscheidend, neue Konzepte zu entwickeln oder bestehende Strukturen zu optimieren. Die Ziele: Flexibilität, Effizienz und Zukunftssicherheit – hierbei stehen die Experten von THE Group mit umfassender Kompetenz zur Seite. Sie helfen dabei, zukunftsfähige ambulante Versorgungsstrukturen zu schaffen und auszubauen.  "
            },
            {type: "heading", text: "Einzelpraxen"},
            {
              type: "paragraph",
              text: "Einzelpraxen, ob neu gegründet oder etabliert, profitieren von maßgeschneiderten, patientenorientierten Betriebskonzepten, die eine effiziente Praxisorganisation und eine hohe Patientenbindung gewährleisten. Unsere Experten unterstützen hier bei der Entwicklung neuer Praxiskonzepte oder der Optimierung bestehender Strukturen – von der Praxisplanung bis zur Implementierung effizienter Abläufe. Wir helfen dabei, digitale Lösungen einzusetzen, Verwaltungskosten zu senken und Synergien in der Praxis zu nutzen, damit Sie sowohl wirtschaftlich als auch medizinisch optimal aufgestellt sind. "
            },

            {type: "heading", text: "Berufsausübungs- und andere Kooperationsgemeinschaften"},
            {
              type: "paragraph",
              text: "Berufsausübungsgemeinschaften (BAG) haben die klassische Einzelpraxis in der ambulanten ärztlichen Versorgung zunehmend abgelöst. Wir befinden uns in der Oligopolisierung der ärztlichen Versorgung. Um die Versorgung auch in Zukunft sicherzustellen, sind kooperative Modelle notwendig. Die Gründe sind "
            },
            {
              type: "list",
              items: ["insbesondere komplexere diagnostische Verfahren", "die Tatsache, dass angestellte Ärzte von der Ausnahme zur Regel werden", "\timmer mehr Berufsträger in Teilzeit, um Familie und Beruf vereinbaren zu können"]
            },
            {
              type: "paragraph",
              text: "immer mehr Berufsträger in Teilzeit, um Familie und Beruf vereinbaren zu können"
            },
            {type: "heading", text: "Medizinische Versorgungszentren (MVZ)"},
            {
              type: "paragraph",
              text: "MVZ, ob neu gegründet oder bereits etabliert, sind in vielen Regionen ein unerlässliches Modell zur Sicherung der medizinischen Versorgung. THE Group konzipiert auf Wunsch das für die Gegend geeignete Versorgungsmodell, identifiziert und motiviert die benötigten Akteure zur Übernahme von Verantwortung und stellt sicher, dass entsprechende Betriebsgesellschaften realisiert werden können."
            },


          ]
        },
        {
          title: "Nachfolge und M&A im Gesundheitsmarkt",
          content: [
            {
              type: "paragraph",
              text: "Eine leistungsfähige Gesundheitsinfrastruktur ist auf eine geeignete Arbeitgeberkonstruktion bzw. unternehmerische Trägerstrukturen angewiesen. Es muss derjenige gefunden werden, der diese Rolle übernimmt: Dies gilt insbesondere für die ambulanten medizinische Versorgung, da angestellte Ärzte auch hier von der Ausnahme zur Regel werden. Die Verfügbarkeit von Trägern ärztlicher Versorgung (häufig MVZ) wird immer entscheidender, um eine flächendeckende Versorgung nachhaltig aufzustellen. THE Group identifiziert, akquiriert oder motiviert die in Frage kommenden Akteure, um zukunftsfähige Praxis- und Unternehmenskonzepte zu realisieren. "
            },
            {
              type: "paragraph",
              text: "Als Partner der Akteure der Gesundheitswirtschaft begleiten unsere Experten Zukäufe, Nachfolgeregelungen und Fusionen von ambulanten und stationären Einrichtungen. THE Group unterstützt institutionelle Investoren bei der Suche nach geeigneten Zielinvestments dabei genauso, wie Vertragsärzte bei der Gründung oder dem Verkauf einer Praxis. "
            },

          ]
        },
        {
          title: "Analyse und Optimierung von Ärzte- & Gesundheitszentren",
          content: [
            {
              type: "paragraph",
              text: "Ärzte- & Gesundheitszentren sind Spezialimmobilien und müssen den heutigen Anforderungen der ambulanten ärztlichen Versorgung gerecht werden und die gesetzlichen Vorgaben genauso erfüllen wie den geänderten Anforderungen der Abläufe in modernen Praxen. Als Standorte der Gesundheitsdienstleister müssen Ärzte- und Gesundheitszentren den neuen Anforderungen entsprechend weiterentwickelt werden. THE Group analysiert und optimiert den Status quo, unterstützt bei der Modernisierung und schafft die Basis der ggf. erforderlichen und gewollten Transaktion dieser Spezialimmobilien."
            },
          ]
        },
        {
          title: "Transaktionsberatung & -begleitung ",
          content: [
            {
              type: "paragraph",
              text: "Im Gesundheitswesen ist die Immobilienbewirtschaftung ein entscheidender Faktor für den Erfolg von Einrichtungen wie Arztpraxen und Kliniken. THE Group bietet spezialisierte Transaktionsberatung und -begleitung für Immobilien im Gesundheitsbereich, um Ihnen durch alle Phasen des Immobilientransaktionsprozesses  , von der Identifikation bis zur finalen Umsetzung, optimal zur Seite zu stehen. Wir unterstützen bei der strategischen Planung, Verhandlungen und der Integration von Immobilien."
            },
            {
              type: "paragraph",
              text: "Unsere Expertise umfasst strategische Beratung, Marktanalyse, Transaktionsmanagement, finanzielle und rechtliche Beratung sowie die Integration und Nutzungskontrolle. Zusätzlich helfen unsere Experten dabei, Potenziale zu erkennen und zu heben, insbesondere durch mietvertragliche Optimierungen und gezielte Wertsteigerungsmaßnahmen. So helfen wir, den Ertrag der Immobilieninvestitionen vor einem möglichen Exit erfolgreich zu maximieren.  "
            },
          ]
        },

      ],
      activeTopic: 0 // Start with the first topic
    };
  },
  created() {
    this.backdropStore = useBackdropStore();
  },
  methods: {
    closeOverlay() {
      this.isActive = false;
      if(this.isMobileView) {
        this.backdropStore.deactivateBackdrop(); // Deaktiviert den Backdrop
      }

    },
    setActiveTopic(index) {
      this.activeTopic = index; // Set the selected topic
      this.isActive = true;
      if(this.isMobileView) {
        this.backdropStore.activateBackdrop(); // Aktiviert den Backdrop
      }

    },
    checkMediaQuery() {
      this.isMobileView = window.matchMedia('(max-width: 1024px)').matches;
      (this.isMobileView);
    },
    // setActiveTopic(index) {
    //   this.activeTopic = index;
    //   const url = new URL(window.location);
    //   url.searchParams.set('topic', index);
    //   window.history.pushState({}, '', url);
    // }

  },
  mounted() {
    this.checkMediaQuery();
    window.addEventListener('resize', this.checkMediaQuery);
    // If a specific topic is passed via query parameters, set it as the active one
    const urlParams = new URLSearchParams(window.location.search);
    const topicIndex = urlParams.get('topic');
    if (topicIndex && !isNaN(topicIndex) && topicIndex >= 0 && topicIndex < this.topics.length) {
      this.activeTopic = parseInt(topicIndex) - 1;
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMediaQuery);
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
