<template>
  <section class="section mdl-SectionFullSlider">
    <div class="main-wrapper">
      <div class="mdl-SectionFullSlider-content">
        <div class="col1">
          <h2 v-if="headline2">{{ headline2 }}</h2>
          <p v-if="text">{{ text }}</p>
        </div>
        <div class="col2">
          <ButtonComponent v-if="url" :css-class="cssClass" :button-text="buttonText" :url="url"
                           :icon="icon"></ButtonComponent>
        </div>
      </div>
    </div>
    <div class="slider-wrapper">
      <swiper-container class="swipercontainer"
                        ref="swiperContainer"
                        :slide-to-clicked-slide="false"
                        :slidesPerView='4.5'
                        :centered-slides="false"
                        :initialSlide="0"
                        space-between="35"
                        :autoHeight="false"
                        :pagination="{
                                hideOnClick: false,
                                clickable:true,
                                el: '.custom-pagination',
                              }"
                        :breakpoints="{
                                300:  {
                                  slidesPerView: 1,
                                  },
                                480:  {
                                  slidesPerView: 2.5,
                                  },

                                1025:  {
                                  slidesPerView: 4.5,
                                  },
                              }"

                        @swiperprogress="onProgress"

                        @swiperclick="onClick"
      >


        <swiper-slide>
          <figure>
            <img src="~/assets/img/team/a-bechtler.jpg"/>
            <figcaption>
              <span class="name">Alexander Bechtler</span>
              <span class="position">Geschäftsführer</span>
            </figcaption>
          </figure>
        </swiper-slide>

        <swiper-slide>
          <figure>
            <img src="~/assets/img/team/c-hoeftberger.jpg"/>
            <figcaption>
              <span class="name">Prof. Dr. Christian Höftberger</span>
              <span class="position">Geschäftsführer</span>
            </figcaption>
          </figure>
        </swiper-slide>

        <swiper-slide>
          <figure>
            <img src="~/assets/img/team/p-hoepfel.jpg"/>
            <figcaption>
              <span class="name">Philipp Hoepfel</span>
              <span class="position">Geschäftsführer Transaktionsbereich & Team Lead Consulting</span>
            </figcaption>
          </figure>
        </swiper-slide>
        <swiper-slide>
          <figure>
            <img src="~/assets/img/team/k-monke.jpg"/>
            <figcaption>
              <span class="name">Karsten Monke</span>
              <span class="position">Prokurist</span>
            </figcaption>
          </figure>
        </swiper-slide>

        <swiper-slide>
          <figure>
            <img src="~/assets/img/team/j-risse.jpg"/>
            <figcaption>
              <span class="name">Prof. Dr. Joerg Risse</span>
              <span class="position">Prokurist</span>
            </figcaption>
          </figure>
        </swiper-slide>

        <div class="swiper-pagination"></div>
      </swiper-container>
    </div>
    <div class="custom-pagination"></div>
    <img v-if="kontur" class="konturlinie" src="~/assets/img/konturlinie_grey.svg"/>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

import {register} from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';

register();

export default {
  name: 'SectionFullSlider',
  components: {ButtonComponent},
  props: {
    kontur: {
      type: Boolean,
      required: false,
      default: null
    },
    sectionHeadline: {
      type: String,
      required: false
    },
    headline2: {
      type: String,
      required: true
    },
    text: {
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
      default: null
    }
  },
};
</script>


<style lang="scss">
.swipercontainer {
  width: 100%;
  max-width: 100% !important;
  padding-bottom: 30px;

  img {
    height: auto;
    width: 100%;
  }
}


</style>
