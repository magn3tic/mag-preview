<template>
  
  <main class="mag-main" role="main">

    <panels-full-hero 
     bgImgSrc="//cdn2.hubspot.net/hubfs/510975/2018-Website/magnetic-creative-true-north-bg-sm.jpg" 
     :videoContent='{title: "At Our Core We Are", subtitle: "A Brand + Engagement Agency", img: "https://cdn2.hubspot.net/hubfs/510975/2018-Website/magnetic-video-production.jpg" }' 
     :mainContent='{subtitle: "We Help Brands Discover Their", title: "True North", body: "Our new site is in the works. We have expanded service offerings, new work, more offices around the world, and we want to share it all with you."}' />

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

      if (!this.hardReload) {
        this.$store.commit('setHardReload', true);
      }
    },
    beforeLeave() {
      this.$store.commit('setTransitioning', true);
      document.body.classList.add('is-transitioning');
    }
  },

  mounted() {
    
  },

  head() {
    return {
      title: 'Award-Winning Design & Branding Agency',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
};
</script>