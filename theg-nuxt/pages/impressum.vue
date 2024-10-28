<template>
  <main>
    <SectionTextSimple icon=""
                       css-class=""
                       button-text=""
                       url=""
                       text="<strong>T H E The Healthcare Experts Group GmbH</strong><br/>
                       Solmsstraße 83<br/>
                       60486 Frankfurt am Main<br/>
                       www.the-healthcare.group<br/>
                       info@the-healthcare.group<br/>
                       <br/>
                       <strong>Vertretungsberechtigte / Geschäftsführer</strong><br/>
                      Alexander Bechtler, Prof Dr Christian Höftberger<br/>
                      <br/>
                      <strong>Verantwortlich für den Inhalt gemäß TMG:</strong><br/>
                      Alexander Bechtler, Prof Dr Christian Höftberger<br/>
                      <br/>
                      <strong>Allgemeine Angaben</strong><br/>
                     Sitz der Gesellschaft: Frankfurt am Main<br/>
                     Handelsregister: HRB 135833<br/>
                     USt-IdNr. DE 369714059<br/>"
                       headline2=""
                       no-kontur="true"
                       section-headline="Herausgeber"></SectionTextSimple>
    <SectionTextSimple icon=""
                       css-class=""
                       button-text=""
                       url=""
                       no-kontur="true"
                       text="Für Vollständigkeit, Fehler redaktioneller und technischer Art, Auslassungen usw. sowie die Richtigkeit der Eintragungen kann keine Haftung übernommen werden. Insbesondere kann keine Gewähr für die Vollständigkeit und Richtigkeit von Informationen übernommen werden, die über weiterführende Links erreicht werden. Die Verweise durch Hyperlinks auf Inhalte fremder Webseiten dienen lediglich der Information. Die Verantwortlichkeit für diese fremden Inhalte liegt alleine bei dem Anbieter, der die Inhalte bereithält. Vor dem Einrichten des entsprechenden Verweises sind die Webseiten der anderen Anbieter mit großer Sorgfalt und nach bestem Wissen und Gewissen überprüft worden. Es kann jedoch keine Gewähr für die Vollständigkeit und Richtigkeit von Informationen übernommen werden, die über weiterführende Hyperlinks erreicht werden. Der Inhalt der anderen Webseiten kann jederzeit ohne Wissen der Redaktion der T H E The Healthcare Experts Group GmbH
geändert werden. Für sämtliche Links auf diesen Seiten gilt: Wir betonen, dass wir keinen Einfluss auf die Gestaltung und die Inhalte der durch Link von unserer Homepage aus erreichbaren Webseiten anderer Anbieter haben und uns deren Inhalt nicht zu eigen machen. Diese Erklärung gilt für alle Seiten dieser Homepage und die dort angebrachten Links. Falls Hyperlinks auf Inhalte fremder Webseiten verweisen, deren Inhalt Anlass zur Beanstandung gibt, bitten wir um Mitteilung."
                       headline2=""
                       section-headline="Haftungshinweise"></SectionTextSimple>
    <SectionTextSimple icon=""
                       css-class=""
                       button-text=""
                       url=""
                       no-kontur="true"
                       text="Texte, Bilder, Grafiken, Sound und Videos sowie deren Anordnung auf der Homepage T H E The Healthcare Experts Group GmbH unterliegen dem Schutz des Urheberrechts und anderer Schutzgesetze. Der Inhalt dieser Homepage darf nicht zu kommerziellen Zwecken kopiert, verbreitet, verändert oder Dritten zugänglich gemacht werden. Wir weisen daraufhin, dass auf den Webseiten enthaltene Bilder teilweise dem Urheberrecht Dritter unterliegen."
                       headline2=""
                       section-headline="Urheberrechtshinweise"></SectionTextSimple>
    <SectionTextSimple icon=""
                       css-class=""
                       button-text=""
                       url=""
                       no-kontur="true"
                       text="<strong>HEYST GmbH</strong><br/>
                       1. Weberstraße 24<br/>
                       D-45127 Essen<br/>
<br/>
<strong>Tel.:</strong> 0201 - 890 631 80<br/>
<strong>E-Mail:</strong> info@heyst.com<br/>
<strong>Website:</strong> www.heyst.com"
                       headline2=""
                       section-headline="Konzept, Design und technische Realisierung"></SectionTextSimple>

  </main>
</template>

<script>
definePageMeta({
  headline: 'Impressum',
});

import SectionTextSimpleVariant from "~/components/content/SectionTextSimpleVariant.vue";
import SectionTopics from "~/components/content/SectionTopics.vue";
import SectionCTA from "~/components/content/SectionCTA.vue";
import SectionTextSimple from "~/components/content/SectionTextSimple.vue";

export default {
  name: 'Impressum',
  layout: 'default',
  components: {SectionTextSimple, SectionCTA, SectionTopics, SectionTextSimpleVariant},
};
</script>

<style scoped>

</style>
