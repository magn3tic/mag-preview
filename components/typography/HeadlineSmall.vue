<template>
  <div class="mag-heading--sm">
    <h4 :class='{"mag-heading--sm-el":true, "on-dark":onDark }'>
      <span :class='{"mag-heading--sm-text":true, "has-dash": hasDash}'>
        <slot>Default Small Heading Text</slot>
        <span v-if="hasDash" :class='getDashClassnames()'></span>
      </span> 
    </h4>
  </div>
</template>


<script>
  
export default {
  name: 'headline-small',

  props: {
    onDark: {
      type: Boolean,
      default: false
    },
    hasDash: {
      type: Boolean,
      default: true
    },
    dashColor: {
      type: String,
      default: 'gold'
    }
  },

  methods: {

    getDashClassnames() {
      const cssClasses = { 'mag-heading--sm-dash': true };
      if (this.dashColor) {
        cssClasses[`dashcolor--${this.dashColor}`] = true;
      }
      return cssClasses;
    }
  }
};
</script>


<style lang="scss">
@import '@/assets/scss/_settings.scss';

.mag-heading--sm {

}

.mag-heading--sm-el {
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;

  &.on-dark {
    color: $white;
  }
}

.mag-heading--sm-text {
  display: inline-block;
  
  &.has-dash {
    position: relative;
    z-index:49;
  }
}

.mag-heading--sm-dash {
  display: block; position:absolute; z-index: -1;
  top:50%; left:-.5em; right: -.5em;
  height: 2px;

  &.dashcolor--gold {
    background: $primary;
  }
}
</style>