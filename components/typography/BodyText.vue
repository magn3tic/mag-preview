<template>
  
  <div :class='getClassnameObject()'>
    <slot>Default body text content.</slot>
  </div>

</template>


<script>
export default {
  name: 'body-text',

  props: {
    onDark: {
      type: Boolean,
      default: false
    },
    extraClasses: {
      type: Array,
      default: () => ['mag-bodytext--default']
    } 
  },

  methods: {
    getClassnameObject() {
      const cssClasses = {'mag-bodytext':true, 'on-dark':this.onDark};
      this.extraClasses.forEach(c => cssClasses[c] = true);
      return cssClasses;
    }
  }
};
</script>


<style lang="scss">

.mag-bodytext {
  line-height: inherit;

  &.on-dark {
    color: $gray;
  }
}
</style>