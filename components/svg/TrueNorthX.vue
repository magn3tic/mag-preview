<template>
  
  <div class="mag-xmark">
    <div class="mag-xmark--liner">
      <svg viewBox="0 0 40.3 40.3">
        <polygon fill="#EB3801" points="40.3 8.73 31.57 0 20.15 11.42 8.73 0 0 8.73 11.42 20.15 0 31.57 8.73 40.3 20.15 28.88 31.57 40.3 40.3 31.57 28.88 20.15 40.3 8.73"></polygon>
      </svg>
    </div>
  </div>

</template>


<script>

export default {
  name: 'true-north-x'
};
</script>



<style lang="scss">

.mag-xmark--liner {
  @include fluid-element(100, 100, 'svg');
}
  
</style>