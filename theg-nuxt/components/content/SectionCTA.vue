<template>
  <section class="section mdl-SectionCTA">
    <div class="main-wrapper">
      <div class="mdl-SectionCTA-content">
        <div class="col1">
          <h2>{{ headline2 }}</h2>
          <p>{{text}}</p>
          <ButtonComponent :css-class="cssClass" :button-text="buttonText" :url="url" :icon="icon"></ButtonComponent>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

export default {
  name: 'SectionCTA',
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
    }
  },
};
</script>
