<template>
  <div :class='{"mag-site-container":true, "is-loaded": siteLoaded, "is-transitioning": transitioning}'>
    <site-header/>
    <nuxt/>
  </div>
</template>


<script>
import SiteHeader from '~/components/SiteHeader';
import { mapGetters } from 'vuex';

let $window = null;
let resizeTimeout = null;

export default {
  components: { 
    SiteHeader
  },

  computed: {
    ...mapGetters(['siteLoaded', 'transitioning', 'currentPage', 'thisScroll', 'scrollProgress', 'scrollComplete'])
  },

  methods: {
   
    setupDomGlobals() {
      if (!$window) {
        $window = $(window);
      }
      this.$store.commit('setDocHeight', $(document).height());
      this.$store.commit('setScreenHeight', $window.height());
      this.$store.commit('setScreenWidth', $window.width());
    },

    setDidScroll() {
      this.$store.commit('setDidScroll', true);
    },

    resizeTimeout() {
      resizeTimeout = setTimeout(() => {
        $window.trigger('mag.resize');
        this.setupDomGlobals();
      }, 600);
    },

    doResizeHandler() {
      if (resizeTimeout !== null) {
        clearTimeout(resizeTimeout);
      }
      this.resizeTimeout();
    },

    scrollTickerStart() {
      const ticker = () => {
        const scrollTop = window.pageYOffset;
        
        if (this.transitioning) { 
          if (this.setScrollComplete) {
            this.$store.commit('setScrollComplete', false);
          }
          
        } else {

          this.$store.commit('setThisScroll', scrollTop);

          if (this.scrollProgress > 99 && !this.scrollComplete) {
            this.$store.commit('setScrollComplete', true);

            if (this.$route.name === 'index') {
              this.$router.push('/work');
            } else if (this.$route.name === 'work') {
              this.$router.push('/');
            }
          }

        }
        
        this.$store.commit('setLastScroll', scrollTop);
        requestAnimationFrame(ticker);
      };
      ticker.call(this);
    },

    onDocMousemove(event) {
      this.$store.commit('setMousePos', {
        x: event.pageX,
        y: event.pageY
      });
    },
    onDocMouseleave(event) {
      //this.$store.commit('setMousePos', {x:0,y:0});
    },

    doPageLoaded() {
      this.$store.commit('setSiteLoaded');
      $window.trigger('mag.pageload');
      this.scrollTickerStart();
    }
  },

  //root component lifecycle -------//
  mounted() {
    console.log('Router: ', this.$router);
    console.log('Route: ', this.$route);
    this.setupDomGlobals();
    $window.on({
      load: () => this.doPageLoaded(),
      scroll: () => this.setDidScroll(),
      resize: () => this.doResizeHandler(),
      mousemove: e => this.onDocMousemove(e)
    });
    $(document).on({
      ready: () => this.setupDomGlobals(),
      mouseleave: e => this.onDocMouseleave(e)
    });   
  }
};
</script>


<style lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  line-height: 1.65;
  font-size: 14px;
  background: $dark;
  font-family: $body-font-family;
  font-weight: 300;
  @include font-smoothing();
}

body {
  cursor: default;

  &.is-transitioning {
    overflow: hidden;
  }
}

#{headings()} {
  line-height: 1.1;
  margin: 0 0 .5em;
  font-family: $heading-font-family;
}

h1 { margin: 0 0 .5em; }
h2 {}
h3 {}
h4 {}
h5 {}
h6 {}

p {
  margin: 0 0 0.5em;
}

small {

}

a {
  text-decoration: none;
}



//global
.mag-row {
  width: 86%;
  margin-right: auto;
  margin-left: auto;
  @include clearfix();
}

//text-alginment
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}


@media (min-width: 500px) {

  html {
    font-size: 16px;
    line-height: 1.65;
  }

}


@media (min-width:$bp-md) {
  
  html {
    font-size: 1.5vw;
  }

}

@media (min-width:$bp-lg) {
  
  html {
    font-size: 1.3vw;
  }

}

@media (min-width: $bp-xl) {
  .mag-row {
    //width: 86%;
  }
  html {
    font-size: 1.2vw;
  }
}

@media (min-width: $bp-xxl) {

  html {
    font-size: 1.15vw;
  }
}

</style>
