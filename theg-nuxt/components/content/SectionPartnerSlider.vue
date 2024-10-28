<template>
  <section class="section mdl-SectionPartnerSlider">
    <div class="main-wrapper">
      <div class="mdl-SectionPartnerSlider-content">
        <div class="col1">
          <h2>{{ headline2 }}</h2>
          <p>{{ text }}</p>
          <ButtonComponent :css-class="cssClass" :button-text="buttonText" :url="url" :icon="icon"></ButtonComponent>
        </div>
        <div class="col2">
          <swiper-container class="swipercontainer partnerSlider"
                            ref="swiperContainer"
                            :slides-per-view="3"
                            :slides-per-group="3"
                            :grid="{
                              rows: 2,
                              fill: 'row',
                            }"
                            space-between="15"
                            :pagination="{
                                hideOnClick: false,
                                clickable:true,
                                el: '.custom-pagination-partnerSlider',
                              }"
                            :breakpoints="{
                                300:  {
                                  slidesPerView: 1,
                                  slidesPerGroup:1
                                  },
                                640:  {
                                  slidesPerView: 3,
                                  slidesPerGroup:3,
                                  grid: {
                                    rows:2
                                  },
                                  },
                                1025:  {
                                  slidesPerView: 2,
                                  spaceBetween:0,
                                  slidesPerGroup:3,
                                  grid: {
                                    rows:3
                                  },
                                  },
                                1400:  {
                                  slidesPerView: 3,
                                  slidesPerGroup:3
                                  },
                              }"

          >

            <swiper-slide v-for="(partner, index) in partnerData" :key="index" @click="selectSlide(index)">
              <div>
                <img :src="partner.image"/>
              </div>
            </swiper-slide>

          </swiper-container>
          <div class="custom-pagination-partnerSlider"></div>
        </div>
      </div>
    </div>
    <img class="konturlinie" src="~/assets/img/konturlinie_grey.svg"/>
  </section>
</template>

<script>
import ButtonComponent from "~/components/content/ButtonComponent.vue";

import {register} from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import 'swiper/css/grid';

register();

export default {
  name: 'SectionPartnerSlider',
  components: {ButtonComponent},
  data() {
    return {
      partnerData: [
        {
          image: new URL('~/assets/img/partner/tsc-realestate.png', import.meta.url).href,
          headline: "Information 1",
          description: "Beschreibung für Information 1"
        },
        {
          image: new URL('~/assets/img/partner/hfbp.png', import.meta.url).href,
          headline: "Information 2",
          description: "Beschreibung für Information 2"
        },
        {
          image: new URL('~/assets/img/partner/dbp-beratung.jpg', import.meta.url).href,
          headline: "Information 3",
          description: "Beschreibung für Information 3"
        },
        {
          image: new URL('~/assets/img/partner/vicondo.png', import.meta.url).href,
          headline: "Information 1",
          description: "Beschreibung für Information 1"
        },
        {
          image: new URL('~/assets/img/partner/dr-hoeftberger.png', import.meta.url).href,
          headline: "Information 2",
          description: "Beschreibung für Information 2"
        },
        {
          image: new URL('~/assets/img/partner/archwerk.png', import.meta.url).href,
          headline: "Information 3",
          description: "Beschreibung für Information 3"
        }
      ]
    };
  },
  props: {
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


<style scoped lang="scss">
.swipercontainer {
  position: relative;

  img {
    width: 100%;
    height: auto;

    &:first-of-type {
      //border-left:1px solid green;
    }
  }


  &.partnerSlider {
    swiper-slide {
      box-sizing: border-box;

      &:nth-child(3n+1) {
        border-left: 2px solid #cccccc;
        border-right: 2px solid #cccccc;
        @media screen and (min-width: 1025px) and (max-width: 1367px) {
          border: none
        }
      }


      &:nth-child(3n+2) {
        //border-bottom:2px solid #cccccc;
      }

      &:nth-child(3n+3) {
        /* Dein benutzerdefiniertes Styling hier */
        border-left: 2px solid #cccccc;
        border-right: 2px solid #cccccc;
        @media screen and (min-width: 1025px) and (max-width: 1367px) {
          border: none
        }
      }


      &:nth-child(2n) {
        @media screen and (min-width: 1025px) and (max-width: 1367px) {
          border-left: 2px solid #cccccc;
          border-right: 2px solid #cccccc;
        }
      }

      &:nth-child(2n-1) {
        @media screen and (min-width: 1025px) and (max-width: 1367px) {
          border-left: 2px solid #cccccc;
        }
      }


      div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        padding: 0 30px;
      }
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background: #cccccc;
      top: calc(50% - 15px);
      transform: translateY(-50%);
      z-index: 1;
      @media screen and (min-width: 1025px) and (max-width: 1367px) {
        top: calc(33% - 15px);
      }
    }

    &:before {
      content: none;
      position: absolute;
      width: 100%;
      height: 2px;
      background: #cccccc;
      bottom: calc(33% + 15px);
      transform: translateY(-50%);
      z-index: 1;
      @media screen and (min-width: 1025px) and (max-width: 1367px) {
        content: "";
      }
    }
  }

}


</style>
