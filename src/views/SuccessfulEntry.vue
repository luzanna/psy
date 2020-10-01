<template>
    <section class="overflow-hidden">
        <div class="row no-gutters">

            <!--            Большой экран-->

            <div class=" row align-center justify-center">
                <div class="col-md-6 col-10 text-center">
                    <div class="py-12"></div>

                    <h1 class="display-2 v-heading mb-3 font-weight-light ">
                        Ваша заявка принята
                    </h1>
                    <p class="title font-weight-light"  style="line-height: 1.7 !important;">
                        Мы вам перезвоним в ближайшее время для подтверждения
                        <br>
                    </p>
                    <router-link to="/" class="mt-4 v-btn v-btn--contained v-btn--rounded theme--light v-size--default secondary text-center"><span class="v-btn__content">На главную</span></router-link>
                    <div class="py-12"></div>

                </div>
            </div>

            <!--          маленький экран-->

            <div class="hidden-md-and-up col-md-6 col">
                <div class="v-responsive v-image" style="height: 100vh;">
                    <div class="v-responsive__sizer" style="padding-bottom: 113.125%;"></div>
                    <div class="v-image__image v-image__image--cover image-main"></div>
                    <div class="v-responsive__content" style="width: 960px; margin: auto auto auto -100%;">

                        <div class="hidden-md-and-up row align-center justify-center" >
                            <div class="col-md-6 text-center" >
                                <!--                      <div class="py-12"></div>-->

                                <h1 class="display-1 v-heading mb-3 font-weight-light colo white--text">
                                    Ваша заявка принята
                                </h1>
                                <p class="title font-weight-light white--text"  style="line-height: 1.7 !important;">
                                    Мы вам перезвоним в ближайшее время для подтверждения
                                    <br>
                                </p>
                                <router-link to="/" class="mt-4 v-btn v-btn--contained v-btn--rounded theme--light v-size--default  text-center"><span class="v-btn__content black--text">Главная</span></router-link>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "SuccessfulEntry"
    }
</script>

<style scoped>
    .image-main{
        background-image: url("../images/photo7.jpg");
        background-position: center center;
    }
</style>
