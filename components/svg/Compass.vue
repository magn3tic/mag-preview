<template>

  <div class="mag-compass--svg">
    <svg :class='{"mag-compass--svg-el":true, "on-dark":onDark}' viewBox="0 0 250 250" ref="circle">
      <circle class="mag-compass-circ--thin" cx="125" cy="125" r="120" stroke="#fff" fill="none" :stroke-width="thinStroke" />
      <circle class="mag-compass-circ--thick" cx="125" cy="125" r="120" stroke="#fff" fill="none" :stroke-width="thickStroke" stroke-dasharray="550" />
    </svg>
    <div class="mag-compass--arr" ref="compass">
      <svg :class='{"mag-compass--arr-el":true, "on-dark":onDark}' viewBox="0 0 90 90">
        <polygon points="44.8,14.2 15.1,75.9 44.8,59.9 74.5,76"/>
      </svg>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';


export default {
  name: 'compass',
  
  props: {
    onDark: {
      type: Boolean,
      default: true
    },
    thinStroke: {
      type: Number,
      default: 1
    },
    thickStroke: {
      type: Number,
      default: 4
    },
    mousemove: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters(['mousePos'])
  },

  methods: {

    getRotationAngle() {
      const $t = $(this.$refs.compass);
      const cx = $t.offset().left + $t.width() / 2;
      const cy = $t.offset().top + $t.height() / 2;
      const radian = Math.atan2(this.mousePos.x - cx, this.mousePos.y - cy);
      return (radian * (180 / Math.PI) * -1) + 180;
    }
  },

  watch: {
    'mousePos': function(updated) {
      $(this.$refs.compass).css({ transform: `rotate(${this.getRotationAngle()}deg)` });
      // $(this.$refs.circle).css({ transform: `rotate(${this.getRotationAngle() * -0.25}deg)` });
    }
  },

  mounted() {}
};
</script>


<style lang="scss">
.mag-compass--svg {
  @include fluid-element(100, 100);
}

.mag-compass--svg-el,
.mag-compass--arr-el {
  @include fill-parent();
}

.mag-compass-circ--thin {
  stroke: rgba($white, 0.5); 
}
.mag-compass-circ--thick {
  transform-origin: center center;
  transform: rotate(-39deg);
}

.mag-compass--arr {
  position: absolute;
  top:50%; left:50%;
  width: 1.5em; height: 1.5em;
  margin-left: -0.75em;
  margin-top: -0.75em;
}

.mag-compass--arr-el {
  polygon {
    fill: $gold;
  }
}
</style>