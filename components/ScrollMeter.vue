<template>
  
  <div class="mag-scrollmeter">
    <div class="mag-scrollmeter--bar">
      <div class="mag-scrollmeter--fill" :style="fillStyles"></div>
    </div>
    <div class="mag-scrollmeter--text">
      <p>Scroll To Explore</p>
    </div>
  </div>

</template>


<script>

import { mapGetters } from 'vuex';

export default {
  name: 'scroll-meter',

  computed: {
    ...mapGetters(['thisScroll', 'scrollProgress', 'docHeight', 'screenHeight']),

    fillStyles() {
      return { transform: `translateX(${this.scrollProgress}%)` };
    }
  },

  methods: {
    commitScrollProgress() {
      const endTarget = this.docHeight - this.screenHeight,
            progress = ((this.thisScroll / endTarget) * 100);
      this.$store.commit('setScrollProgress', progress);
    }
  },

  watch: {
    thisScroll: function() {
      this.commitScrollProgress();
    }
  }
};
</script>


<style lang="scss">

.mag-scrollmeter {
}

.mag-scrollmeter--bar {
  position: relative; overflow:hidden;
  height: 2px;
  background: rgba($white, 0.3);
}

.mag-scrollmeter--fill {
  position: absolute;
  top:0; left:-100%; width:100%; height:2px;
  background: $white;
}

.mag-scrollmeter--text {
  padding-top: 1em;
  p {
    color: $gray;
    font-weight: 500;
    font-size: 0.75em;

  }
}
  
</style>