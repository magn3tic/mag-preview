<template>
  <div class="mag-vidthumb">
    <lazy-image :src="img" :width="460" :height="320" :isBg="false" isFluid darkBg/>

    <a href="" @click="onClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" class="mag-vidthumb--link">
      <div class="mag-playbtn">
        <span class="mag-playbtn--bg"></span>
        <span class="mag-playbtn--icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#222" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </span>
        <span class="mag-playbtn--text">Play Video</span>
      </div>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LazyImage from '~/components/media/LazyImage';

export default {
  name: 'video-thumbnail',
  components: {
    LazyImage
  },
  props: {
    img: String
  },
  computed: {
    ...mapGetters(['transitioning'])
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      this.$store.commit('setShowingModal', true);
    },
    onMouseEnter() {
      if (!this.transitioning) {
        this.$store.commit('setHoveringAnchor', true);
      }
    },
    onMouseLeave() {
      if (!this.transitioning) {
        this.$store.commit('setHoveringAnchor', false);
      }
    }
  }
};
</script>

<style lang="scss">
.mag-vidthumb {
  cursor: pointer;
  position: relative;
}

.mag-vidthumb--link {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: background 0.3s ease;

  &:hover {
    background: rgba($dark, 0.3);

    .mag-playbtn--bg,
    .mag-playbtn--icon {
      transform: scale(1);
      opacity: 1;
    }
  }
}

.mag-playbtn {
  display: block;
  position: absolute;
  width: 4em;
  height: 4em;
  top: 50%;
  left: 50%;
  margin-top: -2em;
  margin-left: -2em;
}

.mag-playbtn--icon {
  display: block;
  position: absolute;
  width: 1.4em;
  height: 1.4em;
  top: 50%;
  left: 50%;
  margin-left: -0.68em;
  margin-top: -0.68em;
  transform: scale(1) translateY(10px);
  opacity: 0;
  transition: transform 0.3s $ease-out-sine, opacity 0.3s ease;

  svg {
    display: block;
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    stroke: $dark;
  }
}

.mag-playbtn--bg {
  display: block;
  border-radius: 50%;
  position: absolute;
  top: 0; left:0;
  width: 100%; height: 100%;
  background: $white;
  transform: scale(1) translateY(15px);
  opacity: 0;
  transition: transform 0.3s $ease-out-sine, opacity 0.3s ease;
}
.mag-playbtn--text {
  display: block;
  position: absolute;
  text-indent: -9999px;
}
</style>


