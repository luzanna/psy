<template>
    <div class="contact" >
        <v-row >
            <v-col class="text-center">
            <v-avatar
                    class="elevation-12 mb-12 ma-5"
                    size="148"
            >
                <v-img src="../images/logo.jpeg"></v-img>
            </v-avatar>

            <v-responsive
                    class="mx-auto title font-weight-light mb-8"
                    max-width="720"
            >
                Мария Юдина
            </v-responsive>
                <v-responsive
                        class="mx-auto title font-weight-light mb-8"
                        max-width="720"
                >
                    <a href="#"><img src="../../public/icons/icons8-vk-в-круге-50.png" height="30" width="30"/></a>

                    <a href="#"><img src="../../public/icons/icons8-значки-facebook-в-форме-круга-50.png" height="30" width="30"/></a>

                    <a href="#"><img src="../../public/icons/icons8-твиттер-в-круге-50.png" height="30" width="30"/></a>


                    <a href="#"><img src="../../public/icons/icons8-instagram-50.png" height="30" width="30"/></a>

                </v-responsive>

            </v-col>




            <v-col>
                <v-responsive class="mt-10 justify-center">
                    <Links/>
                </v-responsive>

            </v-col>

        </v-row>




<!--        <div class="contact-info">-->
<!--            <div class="icon">-->
<!--                +7 999 999 99 99-->
<!--            </div>-->
<!--            <div class="icon">-->
<!--                <a href="#">-->
<!--                    <img src="../../public/icons/icons8-vk-в-круге-50.png" height="30" width="30"/></a>-->
<!--            </div>-->
<!--            <div class="icon">-->
<!--                <a href="#"><img src="../../public/icons/icons8-значки-facebook-в-форме-круга-50.png" height="30" width="30"/></a>-->
<!--            </div>-->
<!--            <div class="icon">-->
<!--                <a href="#"><img src="../../public/icons/icons8-твиттер-в-круге-50.png" height="30"-->
<!--                                 width="30"/></a>-->
<!--            </div>-->
<!--            <div class="icon">-->
<!--                <a href="#">-->
<!--                    <img src="../../public/icons/icons8-instagram-50.png" height="30" width="30"/></a>-->
<!--            </div>-->
<!--        </div>-->



<!--        <div class="links" >-->
<!--            <Links/>-->
<!--            &lt;!&ndash;            <br>icons8.com добавить красивую ссылку&ndash;&gt;-->
<!--        </div>-->
        <!--        icons8.com добавить красивую ссылку-->
    </div>
</template>

<script>
    import Links from "./Links";
    export default {
        name: "Footer",
        components: {
            Links
        },

    }
</script>

<style scoped>
    .contact{
        /*display: flex;*/

        min-height: 20em;
        background: #212121;
        color: #d6d6d6;
    }
    v-row{
        box-sizing: border-box;
    }
</style>
