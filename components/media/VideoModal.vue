<template>
  <div :class="{'mag-modalvid': true, 'is-showing': showingModal}">
    <div class="mag-modalvid--close">
      <button type="button" @click="closeVideo">
        <span>Close Video</span>
      </button>
    </div>
    <div class="mag-modalvid--target">
      <iframe ref="iframe" width="640" src="https://player.vimeo.com/video/348888358" frameborder="0" allow="autoplay; fullscreen"></iframe>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'video-modal',
  computed: {
    ...mapGetters(['showingModal'])
  },

  methods: {
    buildIframeVideo() {
      this.player = new window.Vimeo.Player(this.$refs.iframe);
      this.player.play();
      this.player.on('ended', () => this.$store.commit('setShowingModal', false));
    },
    destroyIframeVideo() {
      this.player.pause();
    },
    closeVideo(e) {
      e.preventDefault();
      this.$store.commit('setShowingModal', false);
    }
  },

  watch: {
    showingModal(next, prev) {
      if (next) {
        this.buildIframeVideo();
      } else {
        this.destroyIframeVideo();
      }
    }
  }
};
</script>

<style lang="scss">

.mag-modalvid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 21999;
  background-color: $dark;

  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease;

  &.is-showing {
    visibility: visible;
    opacity: 1;
  }

  .mag-modalvid--target,
  iframe {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.mag-modalvid--close {
  position: absolute;
  z-index: 99;
  top: 0;
  left:0;
  button {
    padding: 1em;
    color: $white;
    background: $dark;
    border: none;
    appearance: none;
    font-size: 1em;
    cursor: pointer;
    outline: none;
  }
}
</style>
