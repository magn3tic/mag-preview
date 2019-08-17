<template>

  <div :class='{"mag-cursor": true, "is-hovered": hoveringAnchor}' ref="cursor">
    <div class="mag-cursor--wrap">
      <svg viewBox="0 0 44 44" width="44" height="44">
        <circle cx="22" cy="22" r="16" stroke-width="4" />
      </svg>
    </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'custom-cursor',

  computed: {
    ...mapGetters(['mousePos', 'siteLoaded', 'screenWidth', 'screenHeight', 'hoveringAnchor']),
    screenCenter() {
      return { x: this.screenWidth / 2, y: this.screenHeight / 2 };
    }
  },

  methods: {
    cursorMovement() {
      let lerpX = 0, lerpY = 0;
      const ticker = () => {
        if (this.$refs.cursor) {
          lerpX += ((this.mousePos.x - lerpX) * 0.25);
          lerpY += ((this.mousePos.y - lerpY) * 0.25);
          this.$refs.cursor.style.transform = `translate3d(${lerpX}px, ${lerpY}px, 0)`;
        }
        requestAnimationFrame(ticker);
      };
      ticker();
    }
  },

  mounted() {
    this.cursorMovement();
  }
};
</script>

<style lang="scss">

@keyframes cursorSpin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

@keyframes dashOffset {
  0% {
    stroke-dashoffset: 45;
  }
  50% {
    stroke-dashoffset: 65;
  }
  100% {
    stroke-dashoffset: 45;
  }
}

.is-transitioning {
  .mag-cursor {
    svg circle {
      stroke: $white;
      fill: none;
      animation: dashOffset 3.2s ease infinite;
    }
    svg {
      transform: scale(1.2);
    }
  }
  .mag-cursor--wrap {
    animation: cursorSpin 0.75s $ease-in-out-sine infinite;
  }
}
.is-offscreen,
.is-modal-open {
  .mag-cursor {
    opacity: 0
  }
}

.mag-cursor--wrap {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}
.mag-cursor {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 1em;
  height: 1em;
  margin-left: -0.5em;
  margin-top: -0.5em;
  border-radius: 50%;
  pointer-events: none;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;

  &.is-hovered {

    opacity: 0;
  }

  svg {
    display: block;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    transform: scale(0.8);
    transition: transform 0.35s ease;

    circle {
      stroke: transparent;
      fill: $white;
      stroke-dasharray: 45;
      stroke-dashoffset: 0;
      transition: stroke 0.1s ease, fill 0.4s ease;
    }
  }

  span {
    display: block;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border-radius: 50%;
    border: 4px solid $ctacolor;
  }
}
</style>


