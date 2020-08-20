<template>
  <v-app class="wrapper">
    <v-main>
    <Menu/>
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

export default {
  name: 'App',

  components: {
    Menu,
    Footer,
  },

  data: () => ({
    //
  }),

  methods: {
    handleScroll: function(evt, el) {
      if (el.getBoundingClientRect().top > 50) {
        el.setAttribute("style", "opacity: 1; transform: translate3d(0, -10px, 0)")
      }
      return el.getBoundingClientRect().top > 100;
    }
  }
};
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    /*background: #b8b8b8;*/
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

</style>
