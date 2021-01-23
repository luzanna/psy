<template>
    <v-app class="wrapper">
        <v-main>

            <p></p>
            <p></p>
            <div @click="test"><router-link to="/about" target="_blank">test</router-link></div>
            <p></p>
            <p></p>
            <p></p>




<!--            <div @click="qweqwe">jkjkjkjkj</div>-->

            <Menu/>
            <!--      <Menu :class="[isActive ? scrollClass : '', activeClass]"/>-->
            <!--      <div class="content" v-scroll="scrollWindow">-->
            <div class="content">

                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
<!--            <Footer/>-->
        </v-main>
    </v-app>
</template>

<script>
import Menu from "./components/Menu";
// import Footer from "./components/Footer";

export default {
    name: 'App',
    components: {
        Menu,
        // Footer,
    },
    data() {
        return {
            scrollPrev: 0,
            isActive: false,
            activeClass: 'menu hidden-md-and-up',
            scrollClass: 'out',


            x: 0,
            y: 0,
            moveBack: '',

            tab_buff: [],
            res: ''

        }
    },

    methods: {

        qweqwe() {
            this.$router.open({name: 'User', params: {ID: 123}})
        },
        test(e){
            console.log(e.which)
            if(e.button == 2){
                console.log(e.button)
                // e.preventDefault();

                return;

            }
            if(e.button == 1){
                console.log(e.button)
                // e.preventDefault();

                return;

            }
            // e.preventDefault();
            console.log(e.button);
        },
        preOrder(node) {
            if (node == null) return;
            console.log(node);
            for (let item of node) {
                console.log(item);
            }
            this.preOrder(node.left);
            this.preOrder(node.right);
        },

    }
}

</script>


<style>
.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    border: 1px solid #ccc;
    padding: 10px;
}

.posts-tab {
    display: flex;
}

.posts-sidebar {
    max-width: 40vw;
    margin: 0;
    padding: 0 10px 0 0;
    list-style-type: none;
    border-right: 1px solid #ccc;
}

.posts-sidebar li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
}

.posts-sidebar li:hover {
    background: #eee;
}

.posts-sidebar li.selected {
    background: lightblue;
}

.selected-post-container {
    padding-left: 10px;
}

.selected-post > :first-child {
    margin-top: 0;
    padding-top: 0;
}


.mouse-parallax {
    overflow: hidden;
    position: relative;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    height: 100vh;
}

.mouse-parallax__background {
    position: absolute;
    z-index: 0;
    width: 110%;
    height: 110%;
    background-image: url("../src/images/photo7.jpg");
    background-position: center center;
    background-size: cover;
}

.mouse-parallax__content {
    font-size: 250px;
    color: #adadad;
    text-shadow: 4px 4px 6px black;
    z-index: 2;
    text-align: center;
}


.theme--light.v-data-table .v-data-footer {
    border-top: thin solid rgba(0, 0, 0, 0.12);
    height: 30px;
}

* {
    margin: 0;
    padding: 0;

}

html,
body {
    height: 100%;
    width: 100vw;
    /*background: #b8b8b8;*/
}

.menu {
    transition: all .3s ease;
}

.out {
    transform: translateY(-100%);
}


.row {
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

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
    opacity: 0;
}


/*стили для timeline from home.vue*/

/*оставить один вариант!!!*/

/*carusel right*/

.v-carousel--hide-delimiter-background .v-carousel__controls {
    background: transparent;
    right: calc(10% - 8px) !important;
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

.v-carousel--hide-delimiter-background .v-carousel__controls:before {
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
    left: calc(10% - 8px) !important;
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

.v-carousel--hide-delimiter-background .v-carousel__controls:before {
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
