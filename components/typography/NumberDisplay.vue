<template>
  
  <div class="mag-numdisplay">
    <h5 :class='{"mag-numdisplay--text":true, "text-center":centered}'>
      <span v-for="(char, index) in chars" :key="index">
        <span>{{char}}</span>
      </span>
    </h5>
  </div>

</template>



<script>
export default {
  name: 'number-display',

  props: {
    chars: {
      type: Array,
      default: () => []
    },
    centered: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss">

.mag-numdisplay {}

.mag-numdisplay--text {
  font-size: 1.1em;
  color: $gold;

  > span {
    display: inline-block;
  }
}
</style>