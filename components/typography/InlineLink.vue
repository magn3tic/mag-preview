<template>
  
  <div class="mag-inlinelink">
    <slot></slot>
  </div>

</template>


<script>

export default {
  name: 'inline-link',

  props: {
    isRouterLink: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss">

.mag-inlinelink {
  a {
    display: inline-block;
    color: $ctacolor;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.85em;
    letter-spacing: 0.05em
  }
}
  
</style>