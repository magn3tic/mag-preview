<template>
  
  <div :class='getClassnameObject()'>
    <slot></slot>
  </div>

</template>


<script>
  
export default {
  name: 'grid-column',

  props: {
    span: {
      type: Number,
      default: 11
    },
    offset: {
      type: Number,
      default: 0
    },
    bp: {
      type: String,
      default: 'lg'
    }
  },

  data() {
    return {
      totalColumns: 32
    };
  },

  methods: {
    getClassnameObject() {
      const cssClasses = { 'mag-gridcol': true };
      for (let i=0; i < this.totalColumns; i++) {
        if (this.span === i) {
          cssClasses[`mag-gridcol--span-${this.span}`] = true;
        }
        if (this.offset === i && i > 0) {
          cssClasses[`mag-gridcol--offset-${this.offset}`] = true;
        }
        cssClasses[`mag-gridcol--bp-${this.bp}`] = true;
      }
      return cssClasses;
    }
  }
}
</script>

<style lang="scss">
$total_columns: 32;

.mag-gridcol {
  width: 100%;
  float: none;
}

@media (min-width: $bp-md) {

  .mag-gridcol--bp-lg {
    &.mag-gridcol {
      float: left;
    }
    
    @for $i from 1 through $total_columns {
      &.mag-gridcol--span-#{$i} {
        width: ($i / $total_columns) * 100%;
      }
      &.mag-gridcol--offset-#{$i} {
        margin-left: ($i / $total_columns) * 100%;
      }
    }
  }

}
</style>