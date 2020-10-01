<template>
        <v-row >
            <v-col :class="[isActive ? scrollClass : '', activeClass]" >
                <v-responsive
                        class="mx-auto title font-weight-light mb-8"
                        max-width="720"
                >
                    <router-link class="link" to="/">Главная</router-link>
                </v-responsive>

                <v-responsive
                        class="mx-auto title font-weight-light mb-8"
                        max-width="720"
                >
                    <router-link class="link" to="/about">Обо мне</router-link>
                </v-responsive>
                <v-responsive
                        class="mx-auto title font-weight-light mb-8"
                        max-width="720"
                >
                    <router-link class="link" to="/sign_up">Записаться на консультацию</router-link>
                </v-responsive>
                <v-responsive
                        class="mx-auto title font-weight-light mb-8"
                        max-width="720"
                >
                    <router-link class="link" to="/contact">Контакты</router-link>
                </v-responsive>

            </v-col>
        </v-row>
</template>

<script>
    export default {
        name: "Links",
        data() {
            return {
                isActive: false,
                activeClass: 'text-left',
                scrollClass: 'text-center'
            }
        },
        methods: {
            getWidth(){
                let windowWidth = document.documentElement.clientWidth
                if (windowWidth < 425)
                    this.isActive = true
            }
        },
        mounted() {
            this.getWidth()
        }
    }
</script>

<style scoped>
    .link{
        text-decoration: none;
        transition: 0.1s linear;
        font-size: 1em;
        color: white;
    }
    .link:hover{
        color: #d6d6d6;
    }
</style>
