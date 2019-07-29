<template>
  
  <fullscreen-hero :contentPadding='{top:"2em", bottom:false}' isFixed>

      <grid-column :span="7">
        <div class="mag-phero--herovideo">
          <lazy-image :src="videoContent.img" :width="460" :height="320" :isBg="false" isFluid darkBg/>
          <vertical-spacer size="2em"/>
          <headline-small onDark :hasDash="false">{{videoContent.title}}</headline-small>
          <body-text onDark><small>{{videoContent.subtitle}}</small></body-text>
          <div class="mag-phero--xmark">
            <true-north-x/>
          </div>
        </div>
      </grid-column>

      <grid-column :span="14" :offset="3">
        <div class="mag-phero--herocontent">
          <headline-small hasDash onDark>{{mainContent.subtitle}}</headline-small>
          <headline-large isH1 onDark hasDegree>{{mainContent.title}}</headline-large>
          <body-text onDark>
            <p>Our new site is in the works. We have expanded service offerings, new work, more offices around the world, and we want to share it all with you.</p>
          </body-text>
          <horizontal-rule/>
          <inline-link-split href="https://magneticcreative.com" text="Browse Legacy Site" />
        </div>
      </grid-column>

      <grid-column :span="6" :offset="2">
        <div class="mag-phero--compass">
          <compass/>
          <vertical-spacer size="3em"/>
          <number-display :chars="count" centered/>
        </div>
      </grid-column>

      <div class="mag-phero--scrollmeter" slot="bottom">
        <scroll-meter/>
      </div>

      <template slot="background">
        <panels-background :imgSrc="bgImgSrc" />
      </template>

    </fullscreen-hero>


</template>


<script>
import FullscreenHero from '~/components/FullscreenHero';
import PanelsBackground from '~/components/PanelsBackground';
import GridColumn from '~/components/GridColumn';
import LazyImage from '~/components/media/LazyImage';
import VerticalSpacer from '~/components/layout/VerticalSpacer';
import HeadlineSmall from '~/components/typography/HeadlineSmall';
import HeadlineLarge from '~/components/typography/HeadlineLarge';
import BodyText from '~/components/typography/BodyText';
import HorizontalRule from '~/components/layout/HorizontalRule';
//import InlineLink from '~/components/typography/InlineLink';
import InlineLinkSplit from '~/components/typography/InlineLinkSplit';
import Compass from '~/components/svg/Compass';
import TrueNorthX from '~/components/svg/TrueNorthX';
import NumberDisplay from '~/components/typography/NumberDisplay';
import ScrollMeter from '~/components/ScrollMeter';

export default {
  name: 'panels-full-hero',

  components: { 
    FullscreenHero,
    PanelsBackground, 
    GridColumn, 
    LazyImage, 
    HeadlineSmall, 
    HeadlineLarge, 
    BodyText, 
    InlineLinkSplit,
    HorizontalRule,
    VerticalSpacer, 
    Compass, 
    TrueNorthX,
    NumberDisplay,
    ScrollMeter 
  },

  props: {
    count: {
      type: Array,
      default: () => [0,0,1]
    },
    bgImgSrc: {
      type: String,
      default: ''
    },
    videoContent: {
      type: Object,
      default: () => {return {};}
    },
    mainContent: {
      type: Object,
      default: () => {return {};}
    }
  }
};
</script>


<style lang="scss">

.mag-phero--xmark {
  margin-top: 2em;
  width: 1em;
}

.mag-phero--herocontent {
  position: relative;
  left: -.15em;
}

.mag-phero--compass {
  position: relative;
  left: -1.3em;
}

.mag-phero--scrollmeter {
  position: absolute; z-index:402;
  left: 33.5%;
  bottom: 5%;
  width: 16.4%;

  p {
    padding-left: 3px;
  }
}

.mag-phero--herovideo,
.mag-phero--compass {
  display: none;
}

@media (min-width: $bp-md) {

  .mag-phero--herovideo,
  .mag-phero--compass {
    display: block;
    padding-top: 1em;
  }
 
}

</style>