<template>
  
  <main class="mag-main" role="main">
    <fullscreen-hero>
      
      <grid-column :span="16" :offset="16">

      </grid-column>

    </fullscreen-hero>
  </main>

</template>

<script>

import FullscreenHero from '~/components/FullscreenHero';
import GridColumn from '~/components/GridColumn';

export default {
  components: {
    FullscreenHero,
    GridColumn
  }
};
</script>