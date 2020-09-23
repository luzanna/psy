<template>
  <v-app class="wrapper">
    <v-main>
      <Menu />
<!--      <Menu :class="[isActive ? scrollClass : '', activeClass]"/>-->
<!--      <div class="content" v-scroll="scrollWindow">-->
        <div class="content">

        <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>

<!--      <h1 class="centered">Scroll me</h1>-->
<!--      <div class="box" v-scroll="handleScroll">-->
<!--        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque amet harum aut ab veritatis earum porro praesentium ut corporis. Quasi provident dolorem officia iure fugiat, eius mollitia sequi quisquam.</p>-->
<!--      </div>-->
    </div>
    <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";
import Footer from "./components/Footer";



// var timelineSwiper = new Swiper ('.timeline .swiper-container', {
//   direction: 'vertical',
//   loop: false,
//   speed: 1600,
//   pagination: '.swiper-pagination',
//   paginationBulletRender: function (swiper, index, className) {
//     var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
//     return '<span class="' + className + '">' + year + '</span>';
//   },
//   paginationClickable: true,
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
//   breakpoints: {
//     768: {
//       direction: 'horizontal',
//     }
//   }
// });

export default {
  name: 'App',

  components: {
    Menu,
    Footer,
  },


  directives: {
    // scroll: {
    //   inserted(el, binding) {
    //     let f = function (evt) {
    //       if (binding.value(evt, el)) {
    //         window.removeEventListener('scroll', f)
    //       }
    //     }
    //     window.addEventListener('scroll', f)
    //   }
    // }
  },


  data(){
    return{
      scrollPrev: 0,
      isActive: false,
      activeClass: 'menu hidden-md-and-up',
      scrollClass: 'out'
    }
  },

  methods: {
    scrollWindow(){
        // let userScroll = window.pageYOffset;
        // (userScroll > 100 && userScroll > this.scrollPrev) ? this.isActive = true :
        //         this.isActive = false;
        // this.scrollPrev = userScroll
    }
  }
}

</script>


<style>
  *{
    margin: 0;
    padding: 0;

  }

  html,
  body {
    height: 100%;
    width: 100vw;
    /*background: #b8b8b8;*/
  }

  .menu{
    transition: all .3s ease;
  }

  .out {
    transform: translateY(-100%);
  }


  .row{
      margin: 0;
      padding: 0;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .content {
    flex: 1 0 auto;
  }


  .footer {
    flex: 0 0 auto;
  }



  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }



  /*стили для timeline from home.vue*/
 /*оставить один вариант!!!*/

  /*carusel right*/

  .v-carousel--hide-delimiter-background .v-carousel__controls {
    background: transparent;
    right:  calc(10% - 8px) !important;
  }
  .v-carousel__controls {
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    display: flex;
    flex-direction: column !important;
    height: 100% !important;
    justify-content: center;
    list-style-type: none;
    position: absolute;
    width: 50px !important;
    /* z-index: 1; */
  }
  .v-carousel--hide-delimiter-background .v-carousel__controls:before{
    bottom: 0;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    width: 0.5px;
    left: calc(45% - 1px);
    background: white;
    opacity: 0.64;
  }

  /*carusel left*/
  .v-carousel--hide-delimiter-background .v-carousel__controls {
    background: transparent;
    left:  calc(10% - 8px) !important;
  }

  .v-carousel__controls {
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    bottom: 0;
    display: flex;
    flex-direction: column !important;
    height: 100% !important;
    justify-content: center;
    list-style-type: none;
    position: absolute;
    width: 50px !important;
  }

  .v-carousel--hide-delimiter-background .v-carousel__controls:before{
    bottom: 0;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    width: 0.5px;
    right: calc(45% - 1px);
    background: white;
    opacity: 0.64;
  }


  /*стили для timeline from home.vue закончиличь*/



</style>
