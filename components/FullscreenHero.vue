<template>
  
  <section :class='{"mag-fshero": true, "mag-fshero--fixed": isFixed}' 
           :style='{"min-height": contentHeight+"px", "height": screenHeight+"px"}'>
    <div class="mag-fshero--centered">
      <vertical-spacer v-if="contentPadding.top" :size="contentPadding.top"/>
      <div class="mag-row">
        <slot></slot>
      </div>
      <vertical-spacer v-if="contentPadding.bottom" :size="contentPadding.bottom"/>
    </div>
    <slot name="bottom"></slot>
    <slot name="background"></slot>
  </section>

</template>

<script>
import VerticalSpacer from '~/components/layout/VerticalSpacer';
import { mapGetters } from 'vuex';

export default {
  name: 'fullscreen-hero',
  
  components: { VerticalSpacer },

  props: {
    minHeight: {
      type: Number,
      default: 700
    },
    contentPadding: {
      type: Object,
      default: () => {
        return { top: false, bottom: false };
      }
    },
    isFixed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      contentHeight: this.minHeight
    };
  },

  computed: {
    ...mapGetters(['screenHeight'])
  },

  watch: {
    screenHeight: function() {
      this.contentHeight = $(this.$el).children().height() * 1.35;
    }
  },

  mounted() {
    this.contentHeight = $(this.$el).children().height() * 1.35;
  }
}
</script>


<style lang="scss">

.mag-fshero {
  height: 100vh;
  display: flex;
  align-items: center;
}

.mag-fshero--fixed {
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
}

.mag-fshero--centered {
  position: relative; z-index:401;
  width: 100%;
}
  
</style>