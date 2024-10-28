<template>
  <section class="section mdl-SectionTextSimple">
    <div class="main-wrapper">
      <div class="mdl-SectionTextSimple-content">
        <div class="col1">
          <span class="sectionHeadline">{{ sectionHeadline }}</span>
        </div>
        <div class="col2">
          <h2 v-if="headline2">{{ headline2 }}</h2>
          <p v-if="text" v-html="text"></p>
          <ButtonComponent v-if="buttonText" :css-class="cssClass" :button-text="buttonText" :url="url" :icon="icon"></ButtonComponent>
          <template v-if="list && list.length > 0">
            <div class="list-block">
               <img class="konturlinie" src="~/assets/img/konturlinie_blue.svg"/>
              <ul>
                <li
                    v-for="(item, index) in list"
                    :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </template>
          <p v-if="text2">{{ text2 }}</p>
        </div>
      </div>
    </div>
    <img v-if="!noKontur" class="konturlinie" src="~/assets/img/konturlinie_grey.svg"/>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

export default {
  name: 'SectionTextSimple',
  components: {ButtonComponent},
  props: {
    sectionHeadline: {
      type: String,
      required: true
    },
    noKontur: {
      type: Boolean,
      required: false,
      default: null
    },
    headline2: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    text2: {
      type: String,
      required: false
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
      required: true
    },
    list: {
      type: Array,
      default: () => []
    }
  },
};
</script>
