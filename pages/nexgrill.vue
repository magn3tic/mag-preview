<template>
  
  <main class="mag-main" role="main">

    <panels-full-hero 
     :count="[0,0,6]"
     bgImgSrc="//cdn2.hubspot.net/hubfs/510975/2018-Website/nexgrill-case-study-bg.jpg" 
     :videoContent='{title: "Nexgrill", subtitle: "Coming Soon", img: "https://cdn2.hubspot.net/hubfs/510975/2018-Website/magnetic-video-production.jpg" }' 
     :mainContent='{subtitle: "Beyond The Flame", title: "Nexgrill", body: "The gas grill manufacturer partnered with Magnetic to completely reimagine its brand, challenging long-time industry leaders and long-held perceptions of grilling."}' />

    <vertical-spacer size="250vh"/>

  </main>
  
</template>

<script>
import PanelsFullHero from '~/components/PanelsFullHero';
import VerticalSpacer from '~/components/layout/VerticalSpacer';
import { mapGetters } from 'vuex';
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

  mounted() {
  },

  head() {
    return {
      title: 'Nexgrill Brand Story - Coming Soon',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
};
</script>