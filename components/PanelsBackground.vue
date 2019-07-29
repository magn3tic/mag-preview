<template>

<div class="mag-backdrop">
  <div class="mag-backdrop--lines">
    <span v-for="(panel, i) in panels" :key="i"></span>
  </div>
  <div class="mag-backdrop--img" ref="imgpanel">
    <div v-for="(panel, i) in panels" :key="i" :class="'mbd-panel mbd-panel--'+(i + 1)">
      <div class="mbd-panel--img">
        <span :style="getStyleObject(i)"></span>
      </div>
    </div>
  </div>
</div>

</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'panels-background',

  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      panels: new Array(6),
      imgReady: false,
      isScaled: false,
      scaleStart: false,
      allowMousemove: false,

      lerpX: 0,
      lerpY: 0
    };
  },

  computed: {
    ...mapGetters(['thisScroll', 'screenWidth', 'screenHeight', 'transitioning', 'mousePos']),
    screenCenter() {
      return { x: this.screenWidth / 2, y: this.screenHeight / 2 };
    }
  },

  methods: {
    getStyleObject(index) {
      const panelSize = this.screenWidth / this.panels.length;
      return {
        left: - (index * panelSize)+'px',
        width: this.screenWidth+'px',
        backgroundImage: `url(${this.imgSrc})`
        //backgroundSize: `${this.screenWidth}px ${this.screenHeight}px`
      };
    },

    startPanelMovement() {
      let lerpx = 0, lerpy = 0;
      const $imgpanel = $(this.$refs.imgpanel);

      const ticker = () => {
        if (!this.transitioning && this.isScaled) {

          const xpos = parseFloat(((this.screenCenter.x - this.mousePos.x) * 0.05).toFixed(2));
          const ypos = parseFloat((((this.screenCenter.y ) - this.mousePos.y) * 0.05).toFixed(2));
         
          lerpx += ((xpos - lerpx) * 0.075);
          lerpy += ((ypos - lerpy) * 0.075);

          $imgpanel.css({transform: `scale(1.05) translate3d(${lerpx}px, ${lerpy}px, 0)`});
        };

        requestAnimationFrame(ticker);
      };
      ticker();
    }
  },

  watch: {
    'mousePos': function() {
      if (this.transitioning || this.scaleStart) return;
      anime({
        targets: this.$refs.imgpanel,
        scale: [1, 1.05],
        easing: 'easeOutCirc',
        complete: () => {
          this.isScaled = true;
        }
      });
      this.scaleStart = true;
    }
  },

  mounted() {
    console.log('-- mounted --');
    this.startPanelMovement();
  }
}; 
</script>

<style lang="scss">

$panel_count: 6;

.mag-backdrop {
  @include fill-parent();
  transform-style: preserve-3d;
  perspective: 1400px;
  overflow: hidden;
}
.mag-backdrop--lines {
  @include fill-parent();
  z-index: 19;
  
  span {
    display:block; position:absolute;
    top:0; left:0; width:1px; height:100%; 
    //margin-left: -1px;
    background: rgba($white, 0.1);
    will-change: transform;
    
    @for $i from 1 through $panel_count {
      &:nth-of-type(#{$i}n) {
        left: #{ $i * (100 / $panel_count) +'%' };
      }
    }
  }
}


.mag-backdrop--img {
  @include fill-parent();
  transform: transform 0.2s ease;
}

.mbd-panel {
  position: absolute; top:0; height:100%;
  overflow: hidden;
  width: 100% / $panel_count;
  width: calc(#{(100% / $panel_count)} + 1px);
  will-change: opacity;
  backface-visibility: hidden;
  
  @for $i from 1 through $panel_count {
    &--#{$i} {
       left: #{ ($i - 1) * (100 / $panel_count) +'%' }; 
    }
  }
}

.mbd-panel--img {
  @include fill-parent();
  //overflow: hidden;
  
  span {
    @include fill-parent();
    background-size: cover;
    background-position: center center;
    will-change: transform;
    backface-visibility: hidden;
  }
}
</style>