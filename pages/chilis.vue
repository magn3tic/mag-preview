<template>
  <main class="mag-main" role="main">

    <panels-full-hero 
     :count="[0,0,3]"
     bgImgSrc="//cdn2.hubspot.net/hubfs/5273025/mag/Chilis_1800x1000.jpg" 
     :videoContent='{title: "At Our Core We Are", subtitle: "A Brand + Engagement Agency", img: "https://cdn2.hubspot.net/hubfs/510975/2018-Website/magnetic-video-production.jpg" }'
     :mainContent='{subtitle: "Savor The Moment", title: "Chilis", body: "The baby-back-baby-back brand enlisted Magnetic to develop strategy, creative, and video that connected Asian, Middle Eastern and Latin American markets to its global story."}' />

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
      title: 'Chilis Brand Story - Coming Soon',
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  }
}
</script>

