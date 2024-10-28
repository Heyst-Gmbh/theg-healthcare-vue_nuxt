<template>
  <section class="section mdl-SectionFullWidthImage">
    <div class="main-wrapper">
      <div class="mdl-SectionFullWidthImage-content">
        <div class="col1">
          <h1>{{ headline2 }}</h1>
        </div>
        <div class="col2">
          <p><strong>{{ boldText }}</strong> {{ text }}</p>
        </div>
      </div>
      <!-- Skeleton-Loader wird angezeigt, bis das Bild geladen ist -->
      <div v-if="!isImageLoaded" class="skeleton skeleton-image"></div>

      <!-- Bild wird angezeigt, sobald es geladen wurde -->
      <img
          v-show="isImageLoaded"
          class="fullwidth"
          src="~/assets/img/fullwidth.jpg"
          alt="Full Width"
          @load="onImageLoad"
          @error="onImageError"
      />
    </div>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

export default {
  name: 'SectionFullWidthImage',
  components: {ButtonComponent},
  props: {
    headline2: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    boldText: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      isImageLoaded: false, // Verfolgt, ob das Bild geladen ist
      isImageError: false, // Fehlerstatus für das Bild
    };
  },
  methods: {
    onImageLoad() {
      this.isImageLoaded = true; // Bild ist geladen
    },
    onImageError() {
      this.isImageError = true; // Fehler beim Laden des Bildes
      console.error('Bild konnte nicht geladen werden.');
    }
  }
};
</script>

<style scoped>
/* Stile für das echte Bild */
.fullwidth {
  width: 100%;
  height: auto;
  display: block;
}

/* Skeleton-Loader Stile */
.skeleton {
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}

/* Beispiel-Skeleton für das Bild */
.skeleton-image {
  width: 100%;
  height: 300px; /* Passt die Größe an das Bild an */
}

/* Pulsierende Animation für den Skeleton-Loader */
@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
