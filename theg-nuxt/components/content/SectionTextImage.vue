<template>
  <section class="section mdl-SectionTextImage">
    <div class="main-wrapper">
      <div class="mdl-SectionTextImage-content">
        <div class="col1">
          <span class="sectionHeadline">{{ sectionHeadline }}</span>
        </div>
        <div class="col2">
<!--          <ButtonComponent :css-class="cssClass" :button-text="buttonText" :url="url" :icon="icon"></ButtonComponent>-->
        </div>
      </div>
      <div class="mdl-SectionTextImage-content">
        <div class="col1">
          <h2>{{ headline2 }}</h2>
          <p>{{ text }}</p>
        </div>
        <div class="col2">

          <img v-if="imageSrc" :src="imageSrc"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

export default {
  name: 'SectionTextImage',
  components: {ButtonComponent},
  props: {
    sectionHeadline: {
      type: String,
      required: true
    },
    headline2: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
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
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    image:{
      type: String,
      required: true
    }
  },
  computed: {
    imageSrc() {
      // const imgUrl = new URL(`../../assets/img/${this.image}`, import.meta.url).href
      const imgUrl = `/img/${this.image}`
      return imgUrl;
    }
  }
};
</script>
