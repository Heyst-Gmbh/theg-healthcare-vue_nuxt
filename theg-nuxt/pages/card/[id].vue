<template>
  <div>
    <CardComponent
        :firstname="cardData.firstname"
        :lastname="cardData.lastname"
        :position="cardData.position"
        :instagram="cardData.instagram"
        :linkedin="cardData.linkedin"
        :xing="cardData.xing"
        :officePhone="cardData.officePhone"
        :officeMail="cardData.officeMail"
        :imageName="cardData.imageName"
        :vcardName="cardData.vcardName"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'card',
})

import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const cardData = ref({});

// Beispiel-Datenbank oder API-Aufruf
const cards = {
  'a.bechtler': {
    firstname: 'Alexander',
    lastname: 'Bechtler',
    position: 'Geschäftsführer',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/alexander-bechtler-b9823992',
    xing: 'https://www.xing.com/profile/Alexander_Bechtler',
    officePhone: '0173 62 27 479',
    officeMail: 'a.bechtler@the-healthcare.group',
    imageName: 'theg-logo',
    vcardName: 'alexander-bechtler'
  },
  'b.becker': {
    firstname: 'Berthold',
    lastname: 'Becker',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/berthold-becker',
    xing: 'https://www.xing.com/profile/Berthold_Becker',
    officePhone: '0172 63 49 127',
    officeMail: 'b.becker@the-healthcare.group',
    imageName: 'theg-logo',
    vcardName: 'berthold-becker'
  },
  'dr.o.bechtler': {
    firstname: 'Dr. Oliver',
    lastname: 'Bechtler',
    position: '',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/dr-oliver-bechtler-8b32a189',
    xing: 'https://www.xing.com/profile/Oliver_Bechtler',
    officePhone: '0172 72 67 601',
    officeMail: 'o.bechtler@the-healthcare.group',
    imageName: 'theg-logo',
    vcardName: 'dr-oliver-bechtler'
  },
  'k.monke': {
    firstname: 'K Karsten',
    lastname: 'Monke',
    position: 'Prokurist',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/k-karsten-monke-1833b0105',
    xing: 'https://www.xing.com/profile/KKarsten_Monke',
    officePhone: '0170 77 73 637',
    officeMail: 'k.monke@the-healthcare.group',
    imageName: 'theg-logo',
    vcardName: 'karsten-monke'
  },
  'p.hoepfel': {
    firstname: 'Philipp',
    lastname: 'Hoepfel',
    position: 'Team Lead // Geschäftsführer Transaktionsbereich',
    instagram: '',
    xing: '',
    linkedin: 'https://www.linkedin.com/in/philipp-hoepfel-129387229/',
    officePhone: '0151 252 05 911',
    officeMail: 'p.hoepfel@the-healthcare.group',
    imageName: 'theg-logo',
    vcardName: 'philipp-hoepfel'
  },
  'prof.dr.c.hoeftberger': {
    firstname: 'Prof. Dr. Christian',
    lastname: 'Höftberger',
    position: 'Geschäftsführer',
    instagram: '',
    linkedin: 'https://www.linkedin.com/in/prof-dr-christian-hoeftberger-b7536783/',
    xing: 'https://www.xing.com/profile/Christian_Hoeftberger',
    officePhone: '0171 55 12 861',
    officeMail: 'c.hoeftberger@the-healthcare.group',
    imageName: 'theg-logo',
    vcardName: 'prof-dr-christian-hoeftberger'
  }
};


// Lade die Daten basierend auf dem URL-Parameter
const id = route.params.id;
if (cards[id]) {
  console.log(cards);
  cardData.value = cards[id];
} else {
  // Handle 404 oder Fehler
  cardData.value = {
    firstname: 'Nicht',
    lastname: 'Gefunden',
    position: '',
    instagram: '',
    linkedin: '',
    xing: '',
    officePhone: '',
    imageName: 'default-image',
    vcardName: ''
  };
}
</script>
