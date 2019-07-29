<template>
  
  <div class="mag-hr">
    <hr>
  </div>

</template>

<script>

export default {
  name: 'horizontal-rule'
};
</script>


<style lang="scss">

.mag-hr {
  line-height: 1;
  padding-top: 2em;
  padding-bottom: 2.5em;
  hr {
    border: none;
    height: 2px;
    width: 0.5em;
    background-color: $gold;
  }
}
  
</style>