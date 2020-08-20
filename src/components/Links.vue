<template>
    <div class="container">
        <v-row >
            <v-col class="text-left">
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





<!--            <router-link class="link" to="/">Главная</router-link>-->
<!--        <router-link class="link" to="/about">Обо мне</router-link>-->
<!--        <router-link class="link" to="/sign_up">Записаться на консультацию</router-link>-->
<!--        <router-link class="link" to="/contact">Контакты</router-link>-->
    </div>
</template>

<script>
    export default {
        name: "Links"
    }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .link{
        text-decoration: none;
        transition: 0.1s linear;
        font-size: 1em;
        /*font-weight: bold;*/
        color: white;
        /*text-transform: uppercase;*/
        margin: 1em;
    }
    .link:hover{
        color: #d6d6d6;
    }
</style>
