<template>
  
  <div :class='{"mag-heading--lg":true, "on-dark": onDark, "has-degree": hasDegree}'>
    <h1 v-if="isH1">
      <span class="mag-heading--lg-text">
        <slot>Default Heading Text</slot>
        <span v-if="hasDegree" class="mag-heading--degree"></span>
      </span>
    </h1>
    <h3 v-else>
      <span class="mag-heading--lg-text">
        <slot>Default Heading Text</slot>
        <span v-if="hasDegree" class="mag-heading--degree"></span>
      </span>
    </h3>
  </div>

</template>


<script>
  
export default {
  name: 'headline-large',

  props: {
    isH1: {
      type: Boolean,
      default: false
    },
    hasDegree: {
      type: Boolean,
      default: false
    }, 
    degreeColor: {
     type: String,
     default: 'primary'
    },
    onDark: {
      type: Boolean,
      default: false
    }
  },

  methods: {}
};
</script>


<style lang="scss">

.mag-heading--lg {

  h1, h3 {
    font-size: 4.4em;
    margin-bottom: 0.3em;
  }

  &.on-dark {
    h1, h3 {
      color: $white;
    }
  }

  &.has-degree {
    .mag-heading--lg-text {
      position: relative;
      white-space: nowrap;
    }
  }
}

.mag-heading--lg-text {
  display: inline-block;
}

.mag-heading--degree {
  display: block; position:absolute;
  top: .1em; right: -.5em;
  border: 2px solid;
  width: .18em; height: .18em;
  border-radius: 50%;
  color: $ctacolor;
}
</style>