<template>
  
  <div class="mag-splitlink">

    <div v-if="isRouter" class="mag-splitlink--router">
      <nuxt-link :to="href">
        <span class="mag-splitlink--top">
          <span v-for="(chars, index) in charsArray" :key="index+'_word'" class="mag-splitlink--word">
            <span v-for="(char, i) in chars" :key="'char_'+i+'_'+index">{{char}}</span>
          </span>
        </span>
        <span class="mag-splitlink--bottom">
          <span v-for="(chars, index) in charsArray" :key="index+'_word'" class="mag-splitlink--word">
            <span v-for="(char, i) in chars" :key="'char_'+i+'_'+index">{{char}}</span>
          </span>
        </span>
      </nuxt-link>
    </div>

    <div v-else class="mag-splitlink--outbound">
      <a :href="href">
        <span class="mag-splitlink--top">
          <span v-for="(chars, index) in charsArray" :key="index+'_word'" class="mag-splitlink--word">
            <span v-for="(char, i) in chars" :key="'char_'+i+'_'+index">{{char}}</span>
          </span>
        </span>
        <span class="mag-splitlink--bottom">
          <span v-for="(chars, index) in charsArray" :key="index+'_word'" class="mag-splitlink--word">
            <span v-for="(char, i) in chars" :key="'char_'+i+'_'+index">{{char}}</span>
          </span>
        </span>
      </a>
    </div>

  </div>

</template>


<script>

export default {
  name: 'inline-link-split',

  props: {
    text: {
      type: String,
      default: 'Learn More'
    },
    href: {
      type: String,
      default: ''
    }
  },

  computed: {
    charsArray() {
      return this.getCharsArray();
    },
    isRouter() {
      return (this.href.indexOf('https://') === -1);
    }
  },

  methods: {
    getCharsArray() {
      const results = [];
      const words = this.text.split(' ');
      words.forEach(word => {
        const chars = word.split('');
        results.push(chars);
      });
      return results;
    }
  },

  mounted() {
    const chars = this.getCharsArray();
    console.log(chars);
  }
};
</script>


<style lang="scss">

.mag-splitlink {
  a {
    display: inline-block;
    line-height: 1;
    position: relative;
    overflow: hidden;
    color: $ctacolor;
    text-transform: uppercase;
    font-size: 0.85em;
    letter-spacing: 0.05em;
    font-weight: 700;

    &:hover {
      .mag-splitlink--bottom {
        transform: translateY(-1.5em);

        .mag-splitlink--word {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .mag-splitlink--top {
        //transform: translateY(-100%);

        .mag-splitlink--word {
          transform: translateY(-1.5em);
          opacity: 0;
        }
      }
    }
  }
}

.mag-splitlink--top {
  display: block;
  padding: 3px 0;
  transition: transform .35s $ease-in-out-quart;

  .mag-splitlink--word {
    opacity: 1;
    transform: translateY(0);
    transition: opacity .35s linear, transform .35s $ease-in-out-quart;

    @for $i from 1 through 7 {
      &:nth-child(#{$i}n) {
        transition-delay: 0.03s * $i;
      }
    }
  }
}

.mag-splitlink--bottom {
  display: block;
  padding: 3px 0;
  position: absolute;
  top: 100%;
  left: 0; width: 100%;
  transition: transform .35s $ease-in-out-circ;

  .mag-splitlink--word {
    opacity: 0;
    color: $white;
    transform: translateY(10px);
    transition: opacity .3s linear, transform .2s ease;

    @for $i from 1 through 7 {
      &:nth-child(#{$i}n) {
        transition-delay: 0.1s * $i;
      }
    }
  }
}

.mag-splitlink--word {
  display: inline-block;
  margin-right: .35em;

  span {
    display: inline-block;
  }

  &:last-of-type {
    margin-right: 0;
  }
}

  
</style>