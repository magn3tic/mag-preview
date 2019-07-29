<template>
  
  <figure v-if="!isBg" :class='{"mag-image--el":true, "is-loaded": loaded, "is-darkbg": darkbg}' :style='getStyleObject()'>
    <img :src="src" @load='onImageElLoaded()'>
  </figure>

  <div v-else :class='{"mag-image--bg":true, "is-loaded": loaded, "is-darkbg": darkbg}' :style='getStyleObject()'>
    <div class="mag-image--bg" :style='getBackgroundStyle()'></div>
  </div>

</template>


<script>
export default {

  name: 'lazy-image',

  props: {
    src: String,
    height: Number,
    width: Number,
    bgClass: String,
    isBg: Boolean,
    isFluid: Boolean,
    darkbg: Boolean
  },

  data() {
    return {
      loaded: false
    };
  },

  methods: {
    onImageElLoaded() {
      this.loaded = true;
    },
    onImageBgLoaded() {
      const img = new Image();
      img.onload = this.onImageElLoaded;
      img.src = this.src;
    },
    getStyleObject() {
      let styles = {};
      if (this.isFluid) {
        styles.paddingBottom = ((this.height / this.width) * 100) + '%';
      } else {
        styles.width = this.width + 'px';
        styles.height = this.height + 'px';
      }
      return styles;
    },
    getBackgroundStyle() {
      return {
        'background-image': `url(${this.src})`
      };
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/_settings.scss';

.mag-image--el, .mag-image--bg {
  position: relative;

  &.is-darkbg {
    background: darken($dark, 10%);
  }
  
  &.is-loaded {

    > img, > div {
      opacity: 1;
    }
  }

  > img, > div {
    @include fill-parent();
    opacity: 0;
    transition: opacity 1s ease;
  }
}

</style>