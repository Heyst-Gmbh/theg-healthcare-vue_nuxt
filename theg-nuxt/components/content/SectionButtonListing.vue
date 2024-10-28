<template>
  <section class="section mdl-SectionButtonListing">
    <div class="slider-wrapper">
      <span class="sectionHeadline">Unsere Kompetenzbereiche</span>
      <img class="konturlinie" src="~/assets/img/konturlinie_blue.svg"/>
    </div>
    <div class="main-wrapper">
      <div class="mdl-SectionButtonListing-content">
        <div class="col1">
          <h2>{{ headline2 }}</h2>
        </div>
        <div class="col2">
          <ButtonComponent :css-class="cssClass" :button-text="buttonText" :url="url" :icon="icon"></ButtonComponent>
        </div>
      </div>
      <div class="mdl-SectionButtonListing-content">
        <div class="">
          <template v-if="!isMobileView">
            <div class="mdl-SectionButtonListing-boxeswrapper">
              <ButtonComponent css-class="boxes"
                               button-text="Schaffung, Erhaltung und Optimierung der Gesundheitsversorgung"
                               url="/kompetenzbereiche?topic=1" icon="chevron-right.svg"></ButtonComponent>
              <ButtonComponent css-class="boxes" button-text="Transformation und Restrukturierung von Kliniken"
                               url="/kompetenzbereiche?topic=3" icon="chevron-right.svg"></ButtonComponent>
              <ButtonComponent css-class="boxes"
                               button-text="(Betriebs-)Konzepte für Praxen, MVZ und Gesundheitszentren " url="/kompetenzbereiche?topic=5"
                               icon="chevron-right.svg"></ButtonComponent>
              <ButtonComponent css-class="boxes" button-text="Analyse und Optimierung von Ärzte- & Gesundheitszentren"
                               url="/kompetenzbereiche?topic=7" icon="chevron-right.svg"></ButtonComponent>
              <ButtonComponent css-class="boxes"
                               button-text="Entwicklung & Realisierung von Ärzte- & Gesundheitszentren" url="/kompetenzbereiche?topic=2"
                               icon="chevron-right.svg"></ButtonComponent>
              <ButtonComponent css-class="boxes" button-text="Gesundheitsaffine Umnutzung von Bestandsimmobilien"
                               url="/kompetenzbereiche?topic=4" icon="chevron-right.svg"></ButtonComponent>
              <ButtonComponent css-class="boxes" button-text="Nachfolge und M&A im Gesundheitsmarkt" url="/kompetenzbereiche?topic=6"
                               icon="chevron-right.svg"></ButtonComponent>
              <ButtonComponent css-class="boxes" button-text="Transaktionsberatung & -begleitung" url="/kompetenzbereiche?topic=8"
                               icon="chevron-right.svg"></ButtonComponent>
            </div>
          </template>
          <template v-if="isMobileView">
            <div class="mdl-SectionButtonListing-boxeswrapper">
              <swiper-container class="swipercontainer SectionButtonListingSlider"
                                ref="swiperContainer"
                                :slides-per-view="2"
                                :slides-per-group="2"
                                :grid="{
                              rows: 2,
                              fill: 'row',
                            }"
                                :breakpoints="{
                                300:  {
                                  slidesPerView: 1,
                                  slidesPerGroup:1
                                  },
                                640:  {
                                  slidesPerView: 2,
                                  },
                              }"
                                space-between="15"
                                :pagination="{
                                hideOnClick: false,
                                clickable:true,
                                el: '.custom-pagination-SectionButtonListingSlider',
                              }"

              >

                <swiper-slide>
                  <ButtonComponent css-class="boxes"
                                   button-text="Schaffung, Erhaltung und Optimierung der Gesundheitsversorgung"
                                   url="kompetenzbereiche" icon="chevron-right.svg"></ButtonComponent>
                </swiper-slide>


                <swiper-slide>
                  <ButtonComponent css-class="boxes" button-text="Transformation und Restrukturierung von Kliniken"
                                   url="kompetenzbereiche" icon="chevron-right.svg"></ButtonComponent>
                </swiper-slide>


                <swiper-slide>
                  <ButtonComponent css-class="boxes"
                                   button-text="(Betriebs-)Konzepte für Praxen, MVZ und Gesundheitszentren "
                                   url="kompetenzbereiche"
                                   icon="chevron-right.svg"></ButtonComponent>
                </swiper-slide>


                <swiper-slide>
                  <ButtonComponent css-class="boxes"
                                   button-text="Analyse und Optimierung von Ärzte- & Gesundheitszentren"
                                   url="kompetenzbereiche" icon="chevron-right.svg"></ButtonComponent>
                </swiper-slide>


                <swiper-slide>
                  <ButtonComponent css-class="boxes"
                                   button-text="Entwicklung & Realisierung von Ärzte- & Gesundheitszentren"
                                   url="kompetenzbereiche"
                                   icon="chevron-right.svg"></ButtonComponent>
                </swiper-slide>


                <swiper-slide>
                  <ButtonComponent css-class="boxes" button-text="Gesundheitsaffine Umnutzung von Bestandsimmobilien"
                                   url="kompetenzbereiche" icon="chevron-right.svg"></ButtonComponent>
                </swiper-slide>


                <swiper-slide>
                  <ButtonComponent css-class="boxes" button-text="Nachfolge und M&A im Gesundheitsmarkt" url="kompetenzbereiche"
                                   icon="chevron-right.svg"></ButtonComponent>
                </swiper-slide>

                <swiper-slide>
                  <ButtonComponent css-class="boxes" button-text="Transaktionsberatung & -begleitung" url="kompetenzbereiche"
                                   icon="chevron-right.svg"></ButtonComponent>
                </swiper-slide>

              </swiper-container>
              <div class="custom-pagination-SectionButtonListingSlider"></div>

            </div>
          </template>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";
import {register} from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import 'swiper/css/grid';

register();
export default {
  name: 'SectionButtonListing',
  components: {ButtonComponent},
  data() {
    return {
      isMobileView: false,
    }
  },
  mounted() {
    this.checkMediaQuery();
    window.addEventListener('resize', this.checkMediaQuery);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMediaQuery);
  },
  methods: {
    checkMediaQuery() {
      this.isMobileView = window.matchMedia('(max-width: 1024px)').matches;
    },
  },
  props: {
    headline2: {
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


<style scoped lang="scss">
.swipercontainer {
  position: relative;
}
</style>
