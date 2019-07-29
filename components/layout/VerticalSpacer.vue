<template>
  <div class="mag-vspacer" :style='{"height": size}'></div>
</template>

<script>
export default {
  name: 'vertical-spacer',
  props: {
    size: {
      type: String,
      default: '2em'
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.mag-vspacer {
  width: 100%;
} 
</style>