<template>
  <main class="mag-main" role="main">

    <panels-full-hero 
     :count="[0,0,5]"
     bgImgSrc="//cdn2.hubspot.net/hubfs/5273025/mag/MTV_1800x1000.jpg" 
     :videoContent='{title: "At Our Core We Are", subtitle: "A Brand + Engagement Agency", img: "https://cdn2.hubspot.net/hubfs/510975/2018-Website/magnetic-video-production.jpg" }' 
     :mainContent='{subtitle: "Pop Cult-ish", title: "MTV", body: "The iconic music culture brand tapped Magnetic to develop key art visuals and an aesthetic facelift ahead of its 2019 TV Upfront."}' />

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
      title: 'MTV Brand Story - Coming Soon',
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  }
}
</script>