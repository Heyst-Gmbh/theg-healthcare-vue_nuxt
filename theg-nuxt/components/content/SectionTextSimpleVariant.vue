<template>
  <section class="section mdl-SectionTextSimple variant">
    <div class="main-wrapper">
      <div class="mdl-SectionTextSimple-content">
        <div class="col1">
          <p>{{ text }}</p>
        </div>
        <div class="col2">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

export default {
  name: 'SectionTextSimpleVariant',
  components: {ButtonComponent},
  props: {
    text: {
      type: String,
      required: true
    },

  },
};
</script>
