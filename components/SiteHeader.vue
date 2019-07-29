<template>

  <header id="mag-header" class="mag-header">
    <div class="mag-row">

      <div class="mag-header--brand">
        <nuxt-link to="/">
          <logo :onDark="true" />
        </nuxt-link>
      </div>

      <div class="mag-header--links">
        <nav>
          <ul>
            <li><a href="https://magneticcreative.com">Legacy Site</a></li>
            <li><nuxt-link to="/work">Contact</nuxt-link></li>
          </ul>
        </nav>
      </div>

      <div class="mag-header--social">
        <ul>
          <li><a href="#0">Fb</a></li>
          <li><a href="#0">In</a></li>
          <li><a href="#0">Tw</a></li>
          <li><a href="#0">Yt</a></li>
          <li><a href="#0">Dribbble</a></li>
        </ul>
      </div>
      
    </div>
  </header>
  
</template>


<script>
import Logo from '~/components/svg/Logo';

export default {
  name: 'site-header',
  components: { Logo }
};
</script>



<style lang="scss">

.mag-header {
  position: fixed;
  z-index: 2001;
  top:0; left:0;
  width: 100%;

  > .mag-row {
    position: relative;
    padding-top: 2em;
    padding-bottom: 2em;
  }
}

.mag-header--brand {
  width: 7em;

  a {
    display: block;

    svg {
      transition: all .25s ease;
      path {
        transition: fill .25s ease;
      }
    }

    &.nuxt-link-exact-active {
      &:hover {
        //cursor: default;
      }
    }
    &:hover {
      svg {
        opacity: 0.9;

        .logo-letter--2 {
          //fill: $ctacolor;
        }
      }
    }
    &:active {
      svg {
        transform: translateY(1px);
      }
    }
  }
}


.mag-header--links,
.mag-header--social {
  line-height: 1;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 1em;
    font-size: 0.775em;
    font-weight: 400;

    &:last-child {
      margin-right: 0;
    }

    a {
      display: block;
      padding: .5em;
      color: $gray;
      transition: color .35s ease;

      &:hover {
        color: $ctacolor;
        //background: rgba($dark, 0.5);
      }
    }
  }
}

.mag-header--links {
  li a {
    &:hover {
      //color: $ctacolor;
    }
  }
}


@media (min-width:$bp-md) {

  .mag-header--brand {
    width: 8em;
    position: absolute;
    left: 50%; top:50%;
    margin-top: -.45em;
    margin-left: -4em;
  }

  .mag-header--links {
    float: left;
    width: 40%;

    li {
      margin-right: 8.5em;
    }
  }
  
  .mag-header--social {
    float: right;
    width: 40%;
    text-align: right;

    li {
      margin-right: 1.2em;
    }
  }

  .mag-header--links {
    a {
      position: relative; z-index:19;
      // &:after {
      //   content:""; display:block; z-index: -1;
      //   position: absolute; left:-.2em; 
      //   bottom: 0.85em; right: -.2em;
      //   height: 1px; width: auto;
      //   background: $ctacolor;
      //   transform: scale(0, 1);
      //   transform-origin: right center;
      //   transition: transform .35s $ease-out-expo;
      // }

      // &:hover:after, &.nuxt-link-exact-active {
      //   transform: scale(1, 1);
      //   transform-origin: left center;
      // }
    }
  }

}

</style>