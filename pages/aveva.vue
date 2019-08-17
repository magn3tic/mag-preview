<template>
  <main class="mag-main" role="main">

    <panels-full-hero 
     :count="[0,0,2]"
     bgImgSrc="//cdn2.hubspot.net/hubfs/5273025/mag/AVEVA_1800x1000.jpg" 
     :videoContent='{title: "At Our Core We Are", subtitle: "A Brand + Engagement Agency", img: "https://cdn2.hubspot.net/hubfs/510975/2018-Website/magnetic-video-production.jpg" }' 
     :mainContent='{subtitle: "Digital Transformation", title: "Aveva", body: "One of the worlds largest industrial software brands partnered with Magnetic Global on a worldwide rebrand after its recent merger and acquisition."}' />

    <vertical-spacer size="250vh"/>
  </main>
</template>


<script>
import { mapGetters } from 'vuex';
import PanelsFullHero from '~/components/PanelsFullHero';
import VerticalSpacer from '~/components/layout/VerticalSpacer';
import { panelAppearTransition, panelEnterLeaveTransition } from '~/assets/js/transitions.js';

export default {
  components: { 
    PanelsFullHero,
    VerticalSpacer
  },
  scrollToTop: true,

  computed: {
    ...mapGetters(['siteLoaded', 'hardReload', 'transitioning'])
  },

  methods: {},

  transition: {
    css: false,
    appear: true,
    //mode: 'in-out',
    ...panelEnterLeaveTransition(),

    afterEnter() {
      this.$store.commit('setTransitioning', false);
      document.body.classList.remove('is-transitioning');
    },
    beforeLeave() {
      this.$store.commit('setTransitioning', true);
      document.body.classList.add('is-transitioning');

      if (!this.hardReload) {
        this.$store.commit('setHardReload', true);
      }
    }
  },

  head() {
    return {
      title: 'Aveva Brand Story - Coming Soon',
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  }
}
</script>

