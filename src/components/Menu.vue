<template>
    <div>
        <router-link to="/" class="to-main">
            <svg style="width:48px;height:48px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14" />
            </svg>
        </router-link>

        <input id="hamburger" class="hamburger" type="checkbox"/>
        <label class="hamburger" for="hamburger">
            <i></i>
        </label>
        <section class="drawer-list">
            <ul>
                <li><router-link class="link" to="/">Главная</router-link></li>
                <li> <router-link class="link" to="/about">Обо мне</router-link></li>
                <li><router-link class="link" to="/sign_up">Записаться на консультацию</router-link></li>
                <li> <router-link class="link" to="/contact">Контакты</router-link></li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        methods: {

        }
    }
</script>

<style scoped>
    .to-main{
        position: fixed;
        left: 1em;
        top: 1em;
        z-index: 2;
        text-decoration: none;
        /*color: #FEFEFE;*/
        color: #212121;
        /*mix-blend-mode: darken;*/

    }








    /*html {*/
    /*    font-family: 'Lato', sans-serif;*/
    /*}*/

    /*body {*/
    /*    margin: 0;*/
    /*    overflow-x: hidden;*/
    /*    height: 100vh;*/
    /*    width: 100vw;*/
    /*}*/

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }




    .drawer-list {
        position: fixed;
        right: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        z-index: 9998;
        transform: translate(100vw, 0);
        /* ie workaround */
        -ms-transform: translatex(-100vw);
        box-sizing: border-box;
        pointer-events: none;
        padding-top: 125px;
        transition: width 475ms ease-out, transform 450ms ease, border-radius .8s .1s ease;
        border-bottom-left-radius: 100vw;
        /*background-color: #292929;*/
        background-color: rgba(0, 0, 0, 0.87);
    }
    @media (min-width: 768px) {
        .drawer-list {
            width: 40vw;
        }
    }
    .drawer-list ul {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: auto;
        overflow-x: hidden;
        pointer-events: auto;
    }
    .drawer-list li {
        list-style: none;
        text-transform: uppercase;
        pointer-events: auto;
        /*white-space: nowrap;*/
        box-sizing: border-box;
        transform: translatex(100vw);
        /* ie workaround */
        -ms-transform: translatex(-100vw);
    }
    .drawer-list li:last-child {
        margin-bottom: 2em;
    }
    .drawer-list li a {
        text-decoration: none;
        color: #FEFEFE;
        text-align: center;
        display: block;
        padding: 1rem;
        font-size: calc(24px - .5vw);
    }
    @media (min-width: 768px) {
        .drawer-list li a {
            text-align: right;
            padding: .5rem;
        }
    }
    .drawer-list li a:hover {
        cursor: pointer;
        color: #adadad;
        transition: 0.1s linear;
    }

    input.hamburger {
        display: none;
    }
    input.hamburger:checked ~ .drawer-list {
        transform: translatex(0);
        border-bottom-left-radius: 0;
    }
    input.hamburger:checked ~ .drawer-list li {
        transform: translatex(0);
    }

    input.hamburger:checked ~ .drawer-list li a {
        padding-right: 1.9em;
    }
    input.hamburger:checked ~ label > i {

        right: 1em;

        background-color: transparent;

        transform: rotate(90deg);
    }
    input.hamburger:checked ~ label > i:before {
        transform: translate(-50%, -50%) rotate(315deg);
        background-color: #FEFEFE;

    }
    input.hamburger:checked ~ label > i:after {
        transform: translate(-50%, -50%) rotate(-315deg);
        background-color: #FEFEFE;

    }

    label.hamburger {
        z-index: 9999;
        position: relative;
        display: block;
        height: 50px;
        width: 50px;
    }
    label.hamburger:hover {
        cursor: pointer;
    }

    label.hamburger > i {

        right: 0.1em;

        position: absolute;
        width: 100%;
        height: 2px;
        top: 50%;
        background-color: #FEFEFE;
        background-color: #212121;
        pointer-events: auto;
        transition-duration: .35s;
        transition-delay: .35s;
    }
    label.hamburger > i:before, label.hamburger > i:after {
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        left: 50%;
        background-color: #FEFEFE;
        background-color: #212121;
        content: "";
        transition: transform 0.35s;
        transform-origin: 50% 50%;
    }
    label.hamburger > i:before {
        transform: translate(-50%, -14px);
    }
    label.hamburger > i:after {
        transform: translate(-50%, 14px);
    }

    label.hamburger {
        position: fixed;
        top: 15px;
        right: 15px;

        /*background: #42b983;*/
    }
</style>
