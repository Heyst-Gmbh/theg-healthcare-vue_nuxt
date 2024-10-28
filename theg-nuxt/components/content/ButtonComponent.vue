<template>
  <template v-if="scrollTop">
    <a @click="handleScroll" :class="['button', cssClass]">
      <span>{{ buttonText }}</span>
      <!-- Dynamisches Icon, falls die `icon`-Prop gesetzt ist -->
      <div v-if="icon" v-html="svgContent" class="ellipse-wrapper"></div>
    </a>
  </template>
  <template v-else>
    <router-link :to="url" :class="['button', cssClass]">
      <span>{{ buttonText }}</span>
      <!-- Dynamisches Icon, falls die `icon`-Prop gesetzt ist -->
      <div v-if="icon" v-html="svgContent" class="ellipse-wrapper"></div>
    </router-link>
  </template>
</template>

<script>
export default {
  name: "ButtonComponent",
  data() {
    return {
      svgContent: ''  // Hier wird der SVG-Inhalt gespeichert
    };
  },
  props: {
    url: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    cssClass: {
      type: String,
      required:true
    },
    icon: {
      type: String,
      default: null
    },
    scrollTop: {
      type: Boolean,
      default: false // Standardmäßig auf false setzen
    },
    scrollTarget: {
      type: String,
      required: false,
      default: 'top' // Standardmäßig wird nach oben gescrollt, wenn kein Hash angegeben ist
    },
  },
  mounted() {
    this.loadSvgContent();  // SVG laden, sobald die Komponente gemountet ist
  },
  methods: {
    handleScroll() {
      if (this.scrollTarget && this.scrollTarget !== 'top') {
        // Prüfen, ob der Anker im Dokument existiert
        const element = document.querySelector(this.scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Standard: nach oben scrollen
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    imageSrc() {
      // Generiere den Pfad zur SVG-Datei
      const imgUrl = new URL(`../../assets/img/icons/${this.icon}`, import.meta.url).href;
      return imgUrl;
    },
    async loadSvgContent() {
      try {
        const response = await fetch(this.imageSrc());  // Lade die SVG-Datei
        if (!response.ok) {
          throw new Error('SVG konnte nicht geladen werden');
        }
        const svgText = await response.text();  // Lese den Textinhalt der SVG-Datei
        this.svgContent = svgText;  // Speichere den SVG-Inhalt
      } catch (error) {
        console.error('Fehler beim Laden der SVG:', error);
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
