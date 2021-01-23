<template>
    <div>

        <!--    основной экран-->

        <section id="welcome" class="overflow-hidden">
            <div class="row no-gutters">
                <!--            Большой экран-->
                <div class="hidden-sm-and-down col-md-6 col">
                    <div class="v-responsive v-image" style="height: 100vh; ">
                        <div class="v-responsive__sizer" style="padding-bottom: 113.125%;"></div>
                        <div class="v-image__image v-image__image--cover image-main"></div>
                        <div class="v-responsive__content" style="width: 960px;"></div>
                    </div>
                </div>
                <div class="hidden-sm-and-down row align-center justify-center">
                    <div class="col-md-6 col-10 text-center">
                        <div class="py-12"></div>

                        <h1 class="display-2 v-heading mb-3 font-weight-light ">
                            Психолог </h1>
                        <h1 class="display-3 v-heading mb-3 font-weight-light ">  Мария Юдина
                        </h1>
                        <p class="title font-weight-light" style="line-height: 1.7 !important;">
                            Психологическая помощь<br>
                        </p>
                        <router-link to="/sign_up"
                                     class="mt-4 v-btn v-btn--contained v-btn--rounded theme--light v-size--default secondary text-center">
                            <span class="v-btn__content">Записаться на консультацию</span></router-link>
                        <br/>
                        <br/>
                        <v-btn
                            class="align-self-end"
                            fab
                            outlined
                            @click="$vuetify.goTo('#about-me')"
                        >
                            <v-icon>mdi-chevron-double-down</v-icon>
                        </v-btn>
                    </div>
                </div>

                <!--          маленький экран-->

                <div class="hidden-md-and-up col-md-6 col">
                    <div class="v-responsive v-image" style="height: 100vh;">
                        <div class="v-responsive__sizer" style="padding-bottom: 113.125%;"></div>
                        <div class="v-image__image v-image__image--cover image-main"></div>
                        <div class="v-responsive__content"
                             style="width: 960px; margin: auto auto auto -100%;">

                            <div class="hidden-md-and-up row align-center  justify-center">
                                <div class="col-md-6 text-center">
                                    <!--                      <div class="py-12"></div>-->

<!--                                    <h1 class="display-2 v-heading mb-3 font-weight-light colo white&#45;&#45;text">-->
<!--                                        Психолог <br/>-->
<!--                                        Мария Юдина-->
<!--&lt;!&ndash;                                    </h1>&ndash;&gt;-->

                                    <h1 class="display-1 v-heading mb-3 font-weight-light  white--text">
                                        Психолог </h1>
                                    <h1 class="display-3 v-heading mb-3 font-weight-light white--text">  Мария Юдина
                                    </h1>


                                    <p class="title font-weight-light white--text" style="line-height: 1.7 !important;">
                                        Психологическая помощь<br>
                                    </p>
                                    <router-link to="/sign_up"
                                                 class="mt-4 v-btn v-btn--contained v-btn--rounded theme--light v-size--default  text-center">
                                        <span class="v-btn__content black--text">Записаться на консультацию</span></router-link>
                                    <br/>
                                    <br/>
                                    <v-btn
                                        dark
                                        class="align-self-end"
                                        fab
                                        outlined
                                        @click="$vuetify.goTo('#about-me')"
                                    >
                                        <v-icon>mdi-chevron-double-down</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--    давайте знакомиться-->

        <section id="about-me" class="soft-grey">
            <div class="py-12"></div>

            <v-container class="text-center">
                <!--        <div  ref="firstheader">-->
                <!--          <div :class="[isActive ? scrollClass : '', activeClass]" v-scroll="showHeader">-->

<!--                <div class='hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center'>-->
<!--                    Давайте знакомиться-->
<!--                </div>-->

<!--                <div class='hidden-md-and-up display-1 font-weight-bold text-uppercase text-center mb-3'>-->
<!--                    Давайте знакомиться-->
<!--                </div>-->
                <!--        </div>-->

                <v-responsive
                    class="mx-auto mb-8"
                    width="50%"
                >
                    <v-divider class="mb-1"></v-divider>
                    <v-divider></v-divider>
                </v-responsive>

                <v-responsive
                    class="mx-auto title font-weight-light mb-8 text-center"
                    max-width="720"
                >
                    <div ref="hello">



                        Здравствуйте!
                        <br/>
                        <br/>
                        Меня зовут Мария, я практикующий психолог, психотерапевт.

                        <br/>
                        <br/>
                        Провожу индивидуальные консультации для взрослых и подростков с 16 лет. Помогаю изменить свою жизнь в предпочитаемом направлении.
                        <br/>
                        <br/>

                        В своей работе я использую процессуально-ориентированный  и нарративный подходы, а также интегрирую методы из других терапевтических направлений (пcиходрама, телесно-ориентированная терапия, арт-терапия).

                        <br/>
                        <br/>
                        Подробнее о походах, в которых я работаю, можно почитать  <router-link class="link" to="/about">здесь</router-link>.
                    </div>
                </v-responsive>

                <v-avatar
                    class="elevation-12 mb-12"
                    size="128"
                >
                    <v-img src="../images/cover.jpg"></v-img>
                </v-avatar>

                <div></div>

                <router-link to="/sign_up">

                    <v-btn
                        color="grey"
                        outlined
                        large
                    >
          <span class="grey--text text--darken-1 font-weight-bold">
            Консультация
          </span>
                    </v-btn>
                </router-link>





            </v-container>

            <div class="py-12"></div>
        </section>

        <!--описание психотерапевта-->

        <section id="services" class="overflow-hidden">
            <div class="row accent no-gutters">
                <div class=" col-md-6 col">
                    <div class="v-responsive v-image hidden-md-and-down" style="height: 100%;">
                        <div class="v-responsive__sizer" style="padding-bottom: 112.5%;"></div>
                        <div class="v-image__image v-image__image--cover"
                             style="background-image: url(&quot;pictures/photo_2020-09-15_15-51-53.jpg&quot;); background-position: center center;"></div>
                        <div class="v-responsive__content" style="width: 960px;"></div>
                    </div>
                    <div class="v-responsive v-image hidden-sm-and-up" style="height: 80%;">
                        <div class="v-responsive__sizer" style="padding-bottom: 112.5%;"></div>
                        <div class="v-image__image v-image__image--cover"
                             style="background-image: url(&quot;pictures/photo_2020-09-15_15-51-53.jpg&quot;); background-position: center center;"></div>
                        <div class="v-responsive__content" style="width: 960px;"></div>
                    </div>
                </div>
                <div class="text-center pa-5 col-md-6 col-12">
                    <div class="row fill-height align-center justify-center">
                        <div class="col col-12">

                            <div class="title font-weight-light mb-5" style="line-height: 1.7 !important;">
                                Для меня психотерапия – это процесс совместного исследования, поиска смыслов, ресурсов, внутренних опор, ценностей, путей для изменений. Это создание безопасного пространства доверительных отношений, которое дает возможность получить новый опыт. Это движение к целостности и осознанию себя. <br/>
                                Подробнее о том, что для меня значит психотерапия, можно почитать <router-link to="/about">здесь</router-link> .
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<!--        &lt;!&ndash;описание психотерапевта&ndash;&gt;-->
<!--        <section class="overflow-hidden ">-->
<!--            <div class="row accent no-gutters">-->

<!--                <div class="text-center pa-5 col-md-6 col-12 soft-grey">-->
<!--                    <div class="row fill-height align-center justify-center">-->
<!--                        <div class="col col-12">-->

<!--                            <div class="title font-weight-light mb-5" style="line-height: 1.7 !important;">-->




<!--                                &lt;!&ndash;                                Так, шаг за шагом, вместе с психотерапевтом клиент постепенно продвигается вперед к&ndash;&gt;-->
<!--&lt;!&ndash;                                намеченной цели,&ndash;&gt;-->
<!--&lt;!&ndash;                                параллельно с этим выстраивая «карту» своего внутреннего мира, чтобы, используя&ndash;&gt;-->
<!--&lt;!&ndash;                                эту карту и получив необходимые навыки, двигаться самому на пути изменений и&ndash;&gt;-->
<!--&lt;!&ndash;                                самопознания.&ndash;&gt;-->
<!--&lt;!&ndash;                                <br/>&ndash;&gt;-->
<!--&lt;!&ndash;                                <br/>&ndash;&gt;-->
<!--&lt;!&ndash;                                Подробнее о том, на какие ценности я опираюсь в своей работе, можно почитать&ndash;&gt;-->
<!--&lt;!&ndash;                                <router-link class="link" to="/about">здесь</router-link>&ndash;&gt;-->

<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class=" col-md-6 col">-->
<!--                    <div class="v-responsive v-image hidden-md-and-down" style="height: 100%;">-->
<!--                        <div class="v-responsive__sizer" style="padding-bottom: 112.5%;"></div>-->
<!--                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
<!--                             style="background-image: url(&quot;pictures/photo_2020-09-15_15-52-04.jpg&quot;); background-position: center center;"></div>-->
<!--                        <div class="v-responsive__content" style="width: 960px;"></div>-->
<!--                    </div>-->
<!--                    <div class="v-responsive v-image hidden-sm-and-up" style="height: 80%;">-->
<!--                        <div class="v-responsive__sizer" style="padding-bottom: 112.5%;"></div>-->
<!--                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
<!--                             style="background-image: url(&quot;pictures/photo_2020-09-15_15-52-04.jpg&quot;); background-position: center center;"></div>-->
<!--                        <div class="v-responsive__content" style="width: 960px;"></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->


        <!--ко мне обращаются-->

        <!--        <section id="recent-projects" class="overflow-hidden">-->
        <!--            <div class="row no-gutters">-->

        <!--                <div class="text-center pa-5 darken-2&#45;&#45;text col-md-6 col-12">-->

        <!--                    <h1 class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center"> С какими-->
        <!--                        темами ко мне чаще всего обращаются? </h1>-->

        <!--                    <h1 class="hidden-md-and-up display-1 font-weight-bold text-uppercase text-center mb-3"> С какими-->
        <!--                        темами ко мне чаще всего обращаются? </h1>-->

        <!--                    <div class="v-sheet theme&#45;&#45;light secondary">-->
        <!--                        <div class="container pa-2 soft-grey">-->
        <!--                            <div class="row">-->
        <!--                                <div class="col-md-6 col-12">-->

        <!--                                    &lt;!&ndash;                                  <h3&ndash;&gt;-->
        <!--                                    &lt;!&ndash;                                          class="font-weight-black mb-4 text-uppercase text-center white&#45;&#45;text"&ndash;&gt;-->
        <!--                                    &lt;!&ndash;                                  >                                          ТРЕВОГА, <br/>СТРАХИ, <br/>ЧУВСТВО ВИНЫ&ndash;&gt;-->
        <!--                                    &lt;!&ndash;                                  </h3>&ndash;&gt;-->

        <!--                                    <div class="v-responsive v-image"-->
        <!--                                         style="height: 300px; background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
        <!--                                        <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
        <!--                                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
        <!--                                             style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project1.c44422b8.jpeg&quot;); background-position: center center;"></div>-->
        <!--                                        <div class="v-responsive__content font-weight-bold text-uppercase" style="width: 799px; color: #000000; ;-->
        <!--                                        display: flex; justify-content: center; align-self: center;">-->
        <!--                                            <div class="pa-2"-->
        <!--                                                 style="background: rgba(207,177,173,0.6); border: 2px solid #343434 ">-->

        <!--                                                ТРЕВОГА, <br/>СТРАХИ, <br/>ЧУВСТВО ВИНЫ-->
        <!--                                            </div>-->
        <!--                                        </div>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="col-md-6 col-12">-->
        <!--                                    <div class="v-responsive v-image"-->
        <!--                                         style="height: 300px;  background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
        <!--                                        <div class="v-responsive__sizer" style="padding-bottom: 99.9727%;"></div>-->
        <!--                                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
        <!--                                             style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project2.1d9eabe2.jpeg&quot;); background-position: center center;"></div>-->

        <!--                                        <div class="v-responsive__content font-weight-bold text-uppercase" style="width: 100%; height: 100%; color: #000000; background: rgba(255,255,255,0.6);-->
        <!--                                        display: flex; justify-content: center; align-self: center; flex-direction: column">-->
        <!--                                            <div class="pa-2"-->
        <!--                                                 style="max-width: 90%; align-self: center; background: rgba(207,177,173,0.6); border: 2px solid #343434">-->
        <!--                                                Неуверенность в себе, <br/>низкая самооценка-->
        <!--                                            </div>-->
        <!--                                        </div>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="col-md-6 col-12">-->
        <!--                                    <div class="v-responsive v-image"-->
        <!--                                         style="height: 300px; background: rgba(33,33,33,0.7);  margin: auto; border: 2px solid #eeeeee">-->
        <!--                                        <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
        <!--                                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
        <!--                                             style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project3.914df552.jpeg&quot;); background-position: center center;"></div>-->
        <!--                                        <div class="v-responsive__content font-weight-bold text-uppercase" style="width: 100%; height: 100%; color: #000000; background: rgba(255,255,255,0.6);-->
        <!--                                        display: flex; justify-content: center; flex-direction: column">-->
        <!--                                            <div-->
        <!--                                                style="max-width: 90%; align-self: center; border: 2px solid black; background: rgba(255,255,255,0.57)">-->
        <!--                                                Чувство одиночества,<br/> не удается выстроить близкие отношения-->
        <!--                                            </div>-->
        <!--                                        </div>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="col-md-6 col-12">-->
        <!--                                    <div class="v-responsive v-image"-->
        <!--                                         style="height: 300px;background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
        <!--                                        <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
        <!--                                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
        <!--                                             style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project4.9c0edbd4.jpeg&quot;); background-position: center center;"></div>-->
        <!--                                        <div class="v-responsive__content font-weight-bold text-uppercase" style="width: 100%; height: 100%; color: #000000; background: rgba(255,255,255,0.6);-->
        <!--                                        display: flex; justify-content: center; flex-direction: column">-->
        <!--                                            <div class="pa-2"-->
        <!--                                                 style="max-width: 90%; align-self: center; background: rgba(207,177,173,0.6); border: 2px dotted #343434">-->
        <!--                                                Постоянная самокритика, <br/>непринятие себя,<br/> в частности,-->
        <!--                                                недовольство своей внешностью/весом/телом-->
        <!--                                            </div>-->
        <!--                                        </div>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="text-center pa-5 darken-2&#45;&#45;text col-md-6 col-12">-->
        <!--                    <div class="v-sheet theme&#45;&#45;light secondary">-->
        <!--                        <div class="container pa-2 soft-grey">-->
        <!--                            <div class="row">-->
        <!--                                <div class="col-md-6 col-12">-->


        <!--                                    <div class="v-responsive v-image"-->
        <!--                                         style="height: 300px; background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
        <!--                                        <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
        <!--                                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
        <!--                                             style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project1.c44422b8.jpeg&quot;); background-position: center center;"></div>-->
        <!--                                        <div class="v-responsive__content font-weight-bold text-uppercase" style="width: 100%; height: 100%; color: #eeeeee;-->
        <!--                                                                          display: flex; justify-content: center; flex-direction: column; background: rgba(33,33,33,0.59)-->


        <!--                                                                                                ">-->
        <!--                                            <div>Тревога, <br/>страхи, <br/>чувство вины</div>-->

        <!--                                        </div>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="col-md-6 col-12">-->
        <!--                                    <div class="v-responsive v-image"-->
        <!--                                         style="height: 300px;  background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
        <!--                                        <div class="v-responsive__sizer" style="padding-bottom: 99.9727%;"></div>-->
        <!--                                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
        <!--                                             style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project2.1d9eabe2.jpeg&quot;); background-position: center center;"></div>-->
        <!--                                        <div class="v-responsive__content font-weight-bold text-uppercase" style="width: min-content; color: #eeeeee;-->
        <!--                                        display: flex; justify-content: center; align-self: center;">-->
        <!--                                            <div class="pa-2"-->
        <!--                                                 style="background: rgba(33,33,33,0.59);  border: 2px solid white">-->
        <!--                                                Неуверенность в себе, <br/>низкая самооценка-->
        <!--                                            </div>-->
        <!--                                        </div>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="col-md-6 col-12">-->
        <!--                                    <div class="v-responsive v-image"-->
        <!--                                         style="height: 300px; background: rgba(33,33,33,0.7);  margin: auto; border: 2px solid #eeeeee">-->
        <!--                                        <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
        <!--                                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
        <!--                                             style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project3.914df552.jpeg&quot;); background-position: center center;"></div>-->
        <!--                                        <div class="v-responsive__content  font-weight-bold " style="width: 100%; height: 100%; color: #eeeeee;-->
        <!--                                                                          display: flex; justify-content: center; flex-direction: column; background: rgba(33,33,33,0.59)">-->
        <!--                                            <div class="text-uppercase">ПЕРФЕКЦИОНИЗМ</div>-->
        <!--                                            <div class="font-weight-regular mt-3 pa-2"-->
        <!--                                                 style="max-width: 90%; align-self: center; background: rgba(0,0,0,0.4); border: 2px solid #ffffff"-->
        <!--                                            >Никогда не удается достичь совершенства, поэтому всегда собой недовольна;-->
        <!--                                                высокие ожидание и реальность не совпадают-->
        <!--                                            </div>-->
        <!--                                        </div>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                                <div class="col-md-6 col-12">-->
        <!--                                    <div class="v-responsive v-image"-->
        <!--                                         style="height: 300px;background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
        <!--                                        <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
        <!--                                        <div class="v-image__image v-image__image&#45;&#45;cover"-->
        <!--                                             style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project4.9c0edbd4.jpeg&quot;); background-position: center center;"></div>-->
        <!--                                        <div class="v-responsive__content font-weight-bold text-uppercase" style="width: 100%; height: 100%; color: #eeeeee;-->
        <!--                                                                          display: flex; justify-content: center; flex-direction: column; background: rgba(33,33,33,0.59) ">-->
        <!--                                            Постоянная самокритика, <br/>непринятие себя,<br/> в частности, недовольство-->
        <!--                                            своей внешностью/весом/телом-->
        <!--                                        </div>-->
        <!--                                    </div>-->
        <!--                                </div>-->


        <!--                            </div>-->

        <!--                        </div>-->

        <!--                        <v-responsive-->
        <!--                            class="mx-auto title font-weight-light mb-8 pt-2 text-center white"-->
        <!--                        >-->
        <!--                            Если Вы хотите обратиться с другой темой – все равно приходите, постараемся вместе найти-->
        <!--                            пути решения Вашей проблемы.-->
        <!--                        </v-responsive>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!--            </div>-->
        <!--        </section>-->







        <section class="overflow-hidden soft-grey">
            <div class="py-12"></div>

            <div class="row">

                <h1 class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center">На какие принципы и ценности я опираюсь: </h1>

                <h1 class="hidden-md-and-up display-1 font-weight-bold text-uppercase text-center mb-3"> На какие принципы и ценности я опираюсь: </h1>

                <div class="text-center pa-5 darken-2--text col-12">
                    <!--                  <div class="v-sheet theme&#45;&#45;light secondary">-->
                    <div class="container pa-2 ">
                        <div class="row">

                            <div class="col-md-4 col-12">


                            <v-card
                                class="mx-auto"
                                max-width="344"
                            >
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    height="200px"
                                ></v-img>

                                <v-card-title>
                                    Top western road trips
                                </v-card-title>

                                <v-card-subtitle>
                                    1,000 miles of wonder
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        color="orange lighten-2"
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    <v-btn
                                        icon
                                        @click="show = !show"
                                    >
                                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>



                            <v-card
                                class="mx-auto"
                                max-width="344"
                            >
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    height="200px"
                                ></v-img>

                                <v-card-title>
                                    Top western road trips
                                </v-card-title>

                                <v-card-subtitle>
                                    1,000 miles of wonder
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        color="orange lighten-2"
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    <v-btn
                                        icon
                                        @click="show = !show"
                                    >
                                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>

                            <v-card
                                class="mx-auto"
                                max-width="344"
                            >
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    height="200px"
                                ></v-img>

                                <v-card-title>
                                    Top western road trips
                                </v-card-title>

                                <v-card-subtitle>
                                    1,000 miles of wonder
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        color="orange lighten-2"
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    <v-btn
                                        icon
                                        @click="show = !show"
                                    >
                                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>


                            <v-card
                                class="mx-auto"
                                max-width="344"
                            >
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    height="200px"
                                ></v-img>

                                <v-card-title>
                                    Top western road trips
                                </v-card-title>

                                <v-card-subtitle>
                                    1,000 miles of wonder
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                        color="orange lighten-2"
                                        text
                                    >
                                        Explore
                                    </v-btn>

                                    <v-spacer></v-spacer>

                                    <v-btn
                                        icon
                                        @click="show = !show"
                                    >
                                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="show">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>



                            </div>




<!--                            <div class="col-md-4 col-12" v-for="({title, text }, i) in steps"-->
<!--                                 :key="i">-->
<!--                                <div class="v-responsive v-image"-->
<!--                                     style="height: 300px; background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
<!--                                    <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
<!--                                    <div :class="'v-image__image v-image__image&#45;&#45;cover card' + (i + 1)"></div>-->
<!--                                    <div class="v-responsive__content  font-weight-bold " style="width: 100%; height: 100%; color: #030303;-->
<!--                                                                                                              display: flex; justify-content: center; flex-direction: column; background: rgba(255,255,255,0.6)">-->
<!--                                        <div class="text-uppercase pa-1" v-text="title"></div>-->
<!--                                        <div class="font-weight-regular mt-3 pa-2"-->
<!--                                             style="max-width: 90%; align-self: center; background: rgba(255,255,255,0.6); border: 2px solid #343434"-->
<!--                                        >Никогда не удается достичь совершенства, поэтому всвы-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->


                            <!--                            <div class="col-md-3 col-12"-->
                            <!--                                 v-for="({title, text }, i) in steps"-->
                            <!--                                 :key="i">-->
                            <!--                                <div class="v-responsive v-image"-->
                            <!--                                     style="height: 300px;  background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
                            <!--                                    <div class="v-responsive__sizer" style="padding-bottom: 99.9727%;"></div>-->
                            <!--&lt;!&ndash;                                    background from src&ndash;&gt;-->
                            <!--                                    <div :class="'v-image__image v-image__image&#45;&#45;cover card' + (i + 1)"></div>-->

                            <!--                                    <div class="v-responsive__content font-weight-bold text-uppercase" style="width: 100%; height: 100%; color: #000000; background: rgba(255,255,255,0.6);-->
                            <!--                                        display: flex; justify-content: center; align-self: center; flex-direction: column">-->
                            <!--                                        <div class="pa-2" v-text="title"-->
                            <!--                                             style="max-width: 90%; align-self: center; background: rgba(255,255,255,0.6); border: 2px solid #343434">-->
                            <!--&lt;!&ndash;                                            style="max-width: 90%; align-self: center; background: rgba(207,177,173,0.6); border: 2px solid #343434">&ndash;&gt;-->
                            <!--&lt;!&ndash;                                            style="max-width: 90%; align-self: center; background: rgba(173,207,174,0.6); border: 2px solid #343434">&ndash;&gt;-->
                            <!--                                        </div>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->


                            <!--                            <div class="col-md-3 col-12"-->
                            <!--                                 v-for="({ src, text, title }, i) in articles"-->
                            <!--                                 :key="i"-->
                            <!--                            >-->
                            <!--                                <div class="v-responsive v-image"-->
                            <!--                                     style="height: 300px; background: rgba(33,33,33,0.7);  margin: auto; border: 2px solid #eeeeee">-->
                            <!--                                    <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
                            <!--                                    <div class="v-image__image v-image__image&#45;&#45;cover"-->
                            <!--                                         style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project3.914df552.jpeg&quot;); background-position: center center;"></div>-->
                            <!--                                    <div class="v-responsive__content  font-weight-bold " style="width: 100%; height: 100%; color: #eeeeee;-->
                            <!--                                                                          display: flex; justify-content: center; flex-direction: column; background: rgba(33,33,33,0.59)">-->
                            <!--                                        <div class="text-uppercase" v-text="title"></div>-->
                            <!--                                        <div class="font-weight-regular mt-3 pa-2"-->
                            <!--                                             v-text="text"-->
                            <!--                                             style="max-width: 90%; align-self: center; background: rgba(0,0,0,0.4); border: 2px solid #ffffff"-->
                            <!--                                        ></div>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                        </div>
                        <!--                  </div>-->
                    </div>
                </div>


<!--                <v-responsive-->
<!--                    class="mx-auto title font-weight-light mb-8 pt-2 text-center white"-->
<!--                >-->
<!--                    Если Вы хотите обратиться с другой темой – все равно приходите, <br/>постараемся вместе найти-->
<!--                    пути решения Вашей проблемы.-->
<!--                </v-responsive>-->
            </div>

        </section>






        <section class="overflow-hidden">
            <div class="py-12"></div>

            <div class="row">

                <h1 class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center"> С какими
                    темами
                    ко мне чаще всего обращаются? </h1>

                <h1 class="hidden-md-and-up display-1 font-weight-bold text-uppercase text-center mb-3"> С какими темами
                    ко мне чаще всего обращаются? </h1>

                <div class="text-center pa-5 darken-2--text col-12">
                    <!--                  <div class="v-sheet theme&#45;&#45;light secondary">-->
                    <div class="container pa-2 ">
                        <div class="row">

                            <div class="col-md-4 col-12" v-for="({title, text }, i) in steps"
                                 :key="i">
                                <div class="v-responsive v-image"
                                     style="height: 300px; background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">
                                    <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
                                    <div :class="'v-image__image v-image__image--cover card' + (i + 1)"></div>
                                    <div class="v-responsive__content  font-weight-bold " style="width: 100%; height: 100%; color: #030303;
                                                                                                              display: flex; justify-content: center; flex-direction: column; background: rgba(255,255,255,0.6)">
                                        <div class="text-uppercase pa-1" v-text="title"></div>
                                        <div class="font-weight-regular mt-3 pa-2"
                                             style="max-width: 90%; align-self: center; background: rgba(255,255,255,0.6); border: 2px solid #343434"
                                        >Никогда не удается достичь совершенства, поэтому всвы
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!--                            <div class="col-md-3 col-12"-->
                            <!--                                 v-for="({title, text }, i) in steps"-->
                            <!--                                 :key="i">-->
                            <!--                                <div class="v-responsive v-image"-->
                            <!--                                     style="height: 300px;  background: rgba(33,33,33,0.7); margin: auto; border: 2px solid #eeeeee">-->
                            <!--                                    <div class="v-responsive__sizer" style="padding-bottom: 99.9727%;"></div>-->
                            <!--&lt;!&ndash;                                    background from src&ndash;&gt;-->
                            <!--                                    <div :class="'v-image__image v-image__image&#45;&#45;cover card' + (i + 1)"></div>-->

                            <!--                                    <div class="v-responsive__content font-weight-bold text-uppercase" style="width: 100%; height: 100%; color: #000000; background: rgba(255,255,255,0.6);-->
                            <!--                                        display: flex; justify-content: center; align-self: center; flex-direction: column">-->
                            <!--                                        <div class="pa-2" v-text="title"-->
                            <!--                                             style="max-width: 90%; align-self: center; background: rgba(255,255,255,0.6); border: 2px solid #343434">-->
                            <!--&lt;!&ndash;                                            style="max-width: 90%; align-self: center; background: rgba(207,177,173,0.6); border: 2px solid #343434">&ndash;&gt;-->
                            <!--&lt;!&ndash;                                            style="max-width: 90%; align-self: center; background: rgba(173,207,174,0.6); border: 2px solid #343434">&ndash;&gt;-->
                            <!--                                        </div>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->


                            <!--                            <div class="col-md-3 col-12"-->
                            <!--                                 v-for="({ src, text, title }, i) in articles"-->
                            <!--                                 :key="i"-->
                            <!--                            >-->
                            <!--                                <div class="v-responsive v-image"-->
                            <!--                                     style="height: 300px; background: rgba(33,33,33,0.7);  margin: auto; border: 2px solid #eeeeee">-->
                            <!--                                    <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>-->
                            <!--                                    <div class="v-image__image v-image__image&#45;&#45;cover"-->
                            <!--                                         style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/project3.914df552.jpeg&quot;); background-position: center center;"></div>-->
                            <!--                                    <div class="v-responsive__content  font-weight-bold " style="width: 100%; height: 100%; color: #eeeeee;-->
                            <!--                                                                          display: flex; justify-content: center; flex-direction: column; background: rgba(33,33,33,0.59)">-->
                            <!--                                        <div class="text-uppercase" v-text="title"></div>-->
                            <!--                                        <div class="font-weight-regular mt-3 pa-2"-->
                            <!--                                             v-text="text"-->
                            <!--                                             style="max-width: 90%; align-self: center; background: rgba(0,0,0,0.4); border: 2px solid #ffffff"-->
                            <!--                                        ></div>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                        </div>
                        <!--                  </div>-->
                    </div>
                </div>


                                        <v-responsive
                                            class="mx-auto title font-weight-light mb-8 pt-2 text-center white"
                                        >
                                            Если Вы хотите обратиться с другой темой – все равно приходите, <br/>постараемся вместе найти
                                            пути решения Вашей проблемы.
                                        </v-responsive>
            </div>

        </section>


        <!--      <section id="services" class="overflow-hidden"><div class="row accent no-gutters"><div class="hidden-sm-and-down col-md-6 col"><div class="v-responsive v-image" style="height: 100%;"><div class="v-responsive__sizer" style="padding-bottom: 112.5%;"></div><div class="v-image__image v-image__image&#45;&#45;cover" style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/services.2739f6e4.png&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width: 960px;"></div></div></div><div class="text-center pa-5 col-md-6 col-12"><div class="row fill-height align-center justify-center"><div class="col col-12"><div class="v-responsive v-image grow hidden-sm-and-down" style="max-height: 200px; width: 100%; transform: translateX(55%);"><div class="v-responsive__sizer" style="padding-bottom: 53.9889%;"></div><div class="v-image__image v-image__image&#45;&#45;contain" style="background-image: url(&quot;https://freelancer-free.johnleider.com/img/bubbles2.30136c7d.png&quot;); background-position: left bottom;"></div><div class="v-responsive__content" style="width: 539px;"></div></div><h1 class="display-3 v-heading mb-3 font-weight-light info&#45;&#45;text"> Services </h1><p class="title font-weight-light mb-5" style="line-height: 1.7 !important;"> Curabitur venenatis tortor erat, quis laoreet nis<br> lobortis eget. Fusce tempor aucto. </p></div><div class="text-center mb-3 col-md-6 col"><div class="v-avatar elevation-6 mb-2 v-avatar&#45;&#45;tile" style="height: 64px; min-width: 64px; width: 64px; background-color: rgb(105, 161, 187); border-color: rgb(105, 161, 187);"><i aria-hidden="true" class="v-icon notranslate mdi mdi-clipboard-text-outline theme&#45;&#45;dark" style="font-size: 52px;"></i></div><p class="title font-weight-light" style="line-height: 1.7 !important;"><div class="mb-2">Research</div><div>Curabitur et nisi semper,<br> pellent e sque </div></p></div><div class="text-center mb-3 col-md-6 col"><div class="v-avatar elevation-6 mb-2 v-avatar&#45;&#45;tile" style="height: 64px; min-width: 64px; width: 64px; background-color: rgb(105, 161, 187); border-color: rgb(105, 161, 187);"><i aria-hidden="true" class="v-icon notranslate mdi mdi-pencil-outline theme&#45;&#45;dark" style="font-size: 52px;"></i></div><p class="title font-weight-light" style="line-height: 1.7 !important;"><div class="mb-2">Design</div><div>Curabitur et nisi semper, <br>pellent.</div></p></div><div class="text-center mb-3 col-md-6 col"><div class="v-avatar elevation-6 mb-2 v-avatar&#45;&#45;tile" style="height: 64px; min-width: 64px; width: 64px; background-color: rgb(105, 161, 187); border-color: rgb(105, 161, 187);"><i aria-hidden="true" class="v-icon notranslate mdi mdi-settings-outline theme&#45;&#45;dark" style="font-size: 52px;"></i></div><p class="title font-weight-light" style="line-height: 1.7 !important;"><div class="mb-2">Development</div><div>Curabitur et nisi semper, <br>pellent.</div></p></div><div class="text-center mb-3 col-md-6 col"><div class="v-avatar elevation-6 mb-2 v-avatar&#45;&#45;tile" style="height: 64px; min-width: 64px; width: 64px; background-color: rgb(105, 161, 187); border-color: rgb(105, 161, 187);"><i aria-hidden="true" class="v-icon notranslate mdi mdi-account theme&#45;&#45;dark" style="font-size: 52px;"></i></div><p class="title font-weight-light" style="line-height: 1.7 !important;"><div class="mb-2">Support</div><div>Curabitur et nisi semper, <br>pellent.</div></p></div></div></div></div></section>-->


        <!--ко мне обращаются-->

        <!--    <section>-->
        <!--      <div class="py-12"></div>-->

        <!--      <v-container>-->

        <!--        <div  ref="secondheader">-->
        <!--              <div v-scroll="headerScroll">-->
        <!--                <transition name="slide-fade">-->
        <!--                  <div v-if="secondShow">-->
        <!--                      С какими темами ко мне чаще всего обращаются?-->
        <!--                  </div>-->
        <!--                </transition>-->
        <!--              </div>-->
        <!--        </div>-->

        <!--        <v-responsive-->
        <!--                class="mx-auto mb-12"-->
        <!--                width="56"-->
        <!--        >-->
        <!--          <v-divider class="mb-1"></v-divider>-->

        <!--          <v-divider></v-divider>-->
        <!--        </v-responsive>-->

        <!--        <v-row>-->
        <!--          <v-col-->
        <!--                  v-for="({ src, text, title }, i) in articles"-->
        <!--                  :key="i"-->
        <!--                  cols="12"-->
        <!--                  md="4"-->
        <!--          >-->
        <!--                  <v-img-->
        <!--                          :src="src"-->
        <!--                          class="mb-auto"-->
        <!--                          height="275"-->
        <!--                          max-width="100%"-->
        <!--                  >-->
        <!--                  </v-img>-->

        <!--            <h3-->
        <!--                    class="font-weight-black mb-4 text-uppercase text-center"-->
        <!--                    v-text="title"-->
        <!--            ></h3>-->

        <!--            <div-->
        <!--                    class="title font-weight-light mb-5 text-left"-->
        <!--                    v-text="text"-->
        <!--            ></div>-->

        <!--          </v-col>-->
        <!--            Если Вы хотите обратиться с другой темой – все равно приходите, постараемся вместе найти пути решения Вашей проблемы.-->
        <!--        </v-row>-->
        <!--      </v-container>-->

        <!--      <div class="py-12"></div>-->
        <!--    </section>-->


        <!--      <v-card-->
        <!--              max-width="444"-->
        <!--              class="mx-auto"-->
        <!--      >-->


        <!--      right-->
<!--        &lt;!&ndash;desktop&ndash;&gt;-->
<!--        <v-carousel-->
<!--            :continuous="true"-->
<!--            :cycle="cycle"-->
<!--            :interval="4000"-->
<!--            :show-arrows-on-hover="true"-->
<!--            :vertical="true"-->
<!--            hide-delimiter-background-->
<!--            delimiter-icon="mdi-circle-medium"-->
<!--            height="100vh"-->
<!--            class="image hidden-sm-and-down shadow-slider-right"-->
<!--            style=" "-->

<!--        >-->
<!--            &lt;!&ndash;              <v-carousel-item&ndash;&gt;-->
<!--            &lt;!&ndash;                      v-for="(slide, i) in slides"&ndash;&gt;-->
<!--            &lt;!&ndash;                      :key="i"&ndash;&gt;-->
<!--            &lt;!&ndash;              >&ndash;&gt;-->
<!--            <v-carousel-item-->
<!--                v-for="({text, title }, i) in steps"-->
<!--                :key="i"-->
<!--            >-->
<!--                &lt;!&ndash;                  <v-sheet&ndash;&gt;-->
<!--                &lt;!&ndash;                          :color="colors[i]"&ndash;&gt;-->
<!--                &lt;!&ndash;                          height="100%"&ndash;&gt;-->
<!--                &lt;!&ndash;                          tile&ndash;&gt;-->
<!--                &lt;!&ndash;                          class="image"&ndash;&gt;-->
<!--                &lt;!&ndash;                          style=" box-shadow: -50vw 0 200px -20px rgba(0,0,0,0.8) inset; width: 100vw; background: none"&ndash;&gt;-->

<!--                &lt;!&ndash;                  >&ndash;&gt;-->
<!--                <v-sheet-->
<!--                    height="100%"-->
<!--                    tile-->
<!--                    class="image align-content-slider-right"-->
<!--                    style=""-->

<!--                >-->
<!--                    &lt;!&ndash;                      <v-row&ndash;&gt;-->
<!--                    &lt;!&ndash;                              class="fill-height"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              max-width="50%"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              align="center"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              justify="center"&ndash;&gt;-->
<!--                    &lt;!&ndash;                      >&ndash;&gt;-->
<!--                    &lt;!&ndash;                          <div class="display-3">{{ title }}&ndash;&gt;-->

<!--                    <v-card-->
<!--                        outlined-->
<!--                        max-width="400"-->
<!--                        class="card-decor"-->
<!--                        style=""-->
<!--                    >-->
<!--                        <v-card-title class="font-weight-bold display-1 mt-3 text-right"-->
<!--                                      v-text="title">-->
<!--                        </v-card-title>-->
<!--                        <v-card-text class="text-right"-->
<!--                                     v-text="text">-->
<!--                        </v-card-text>-->
<!--                    </v-card>-->

<!--                    &lt;!&ndash;                          </div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                      </v-row>&ndash;&gt;-->
<!--                </v-sheet>-->
<!--            </v-carousel-item>-->
<!--        </v-carousel>-->
<!--        &lt;!&ndash;mobile&ndash;&gt;-->
<!--        <v-carousel-->
<!--            :continuous="true"-->
<!--            :cycle="cycle"-->
<!--            :interval="4000"-->
<!--            :show-arrows-on-hover="true"-->
<!--            :vertical="true"-->
<!--            hide-delimiter-background-->
<!--            delimiter-icon="mdi-circle-medium"-->
<!--            height="100vh"-->
<!--            class="image hidden-md-and-up shadow-slider-right"-->
<!--            style=""-->

<!--        >-->
<!--            &lt;!&ndash;              <v-carousel-item&ndash;&gt;-->
<!--            &lt;!&ndash;                      v-for="(slide, i) in slides"&ndash;&gt;-->
<!--            &lt;!&ndash;                      :key="i"&ndash;&gt;-->
<!--            &lt;!&ndash;              >&ndash;&gt;-->
<!--            <v-carousel-item-->
<!--                v-for="({text, title }, i) in steps"-->
<!--                :key="i"-->
<!--            >-->
<!--                &lt;!&ndash;                  <v-sheet&ndash;&gt;-->
<!--                &lt;!&ndash;                          :color="colors[i]"&ndash;&gt;-->
<!--                &lt;!&ndash;                          height="100%"&ndash;&gt;-->
<!--                &lt;!&ndash;                          tile&ndash;&gt;-->
<!--                &lt;!&ndash;                          class="image"&ndash;&gt;-->
<!--                &lt;!&ndash;                          style=" box-shadow: -50vw 0 200px -20px rgba(0,0,0,0.8) inset; width: 100vw; background: none"&ndash;&gt;-->

<!--                &lt;!&ndash;                  >&ndash;&gt;-->
<!--                <v-sheet-->
<!--                    height="100%"-->
<!--                    tile-->
<!--                    class="image align-content-slider-right"-->
<!--                    style=""-->

<!--                >-->
<!--                    &lt;!&ndash;                      <v-row&ndash;&gt;-->
<!--                    &lt;!&ndash;                              class="fill-height"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              max-width="50%"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              align="center"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              justify="center"&ndash;&gt;-->
<!--                    &lt;!&ndash;                      >&ndash;&gt;-->
<!--                    &lt;!&ndash;                          <div class="display-3">{{ title }}&ndash;&gt;-->

<!--                    <v-card-->
<!--                        class="card-decor card-decor-mobile-right"-->
<!--                        outlined-->
<!--                        max-width="300px"-->
<!--                        style=""-->
<!--                    >-->
<!--                        <v-card-title class="font-weight-bold display-0 mt-3 text-right"-->
<!--                                      v-text="title"></v-card-title>-->
<!--                        <v-card-text class="text-right"-->
<!--                                     v-text="text"></v-card-text>-->
<!--                    </v-card>-->

<!--                    &lt;!&ndash;                          </div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                      </v-row>&ndash;&gt;-->
<!--                </v-sheet>-->
<!--            </v-carousel-item>-->
<!--        </v-carousel>-->

        <!--как проходят консультации-->



<!--        &lt;!&ndash;      left&ndash;&gt;-->
<!--        &lt;!&ndash;desktop&ndash;&gt;-->
<!--        <v-carousel-->
<!--            :continuous="true"-->
<!--            :cycle="cycle"-->
<!--            :interval="4000"-->
<!--            :show-arrows-on-hover="true"-->
<!--            :vertical="false"-->
<!--            hide-delimiter-background-->
<!--            delimiter-icon="mdi-circle-medium"-->
<!--            height="100vh"-->
<!--            class="image hidden-sm-and-down shadow-slider-left"-->
<!--            style=""-->

<!--        >-->
<!--            &lt;!&ndash;              <v-carousel-item&ndash;&gt;-->
<!--            &lt;!&ndash;                      v-for="(slide, i) in slides"&ndash;&gt;-->
<!--            &lt;!&ndash;                      :key="i"&ndash;&gt;-->
<!--            &lt;!&ndash;              >&ndash;&gt;-->
<!--            <v-carousel-item-->
<!--                v-for="({text, title }, i) in steps"-->
<!--                :key="i"-->
<!--            >-->
<!--                &lt;!&ndash;                  <v-sheet&ndash;&gt;-->
<!--                &lt;!&ndash;                          :color="colors[i]"&ndash;&gt;-->
<!--                &lt;!&ndash;                          height="100%"&ndash;&gt;-->
<!--                &lt;!&ndash;                          tile&ndash;&gt;-->
<!--                &lt;!&ndash;                          class="image"&ndash;&gt;-->
<!--                &lt;!&ndash;                          style=" box-shadow: -50vw 0 200px -20px rgba(0,0,0,0.8) inset; width: 100vw; background: none"&ndash;&gt;-->

<!--                &lt;!&ndash;                  >&ndash;&gt;-->
<!--                <v-sheet-->
<!--                    height="100%"-->
<!--                    tile-->
<!--                    class="image align-content-slider-left"-->
<!--                    style=""-->

<!--                >-->
<!--                    &lt;!&ndash;                      <v-row&ndash;&gt;-->
<!--                    &lt;!&ndash;                              class="fill-height"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              max-width="50%"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              align="center"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              justify="center"&ndash;&gt;-->
<!--                    &lt;!&ndash;                      >&ndash;&gt;-->
<!--                    &lt;!&ndash;                          <div class="display-3">{{ title }}&ndash;&gt;-->

<!--                    <v-card-->
<!--                        class="card-decor-left"-->
<!--                        outlined-->
<!--                        max-width="400"-->
<!--                        style=""-->
<!--                    >-->
<!--                        <v-card-title class="font-weight-bold display-1 mt-3 text-left"-->
<!--                                      v-text="title">-->
<!--                        </v-card-title>-->
<!--                        <v-card-text class="text-left"-->
<!--                                     v-text="text">-->
<!--                        </v-card-text>-->
<!--                    </v-card>-->

<!--                    &lt;!&ndash;                          </div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                      </v-row>&ndash;&gt;-->
<!--                </v-sheet>-->
<!--            </v-carousel-item>-->
<!--        </v-carousel>-->
<!--        &lt;!&ndash;mobile&ndash;&gt;-->
<!--        <v-carousel-->
<!--            :continuous="true"-->
<!--            :cycle="cycle"-->
<!--            :interval="4000"-->
<!--            :show-arrows-on-hover="true"-->
<!--            :vertical="false"-->
<!--            hide-delimiter-background-->
<!--            delimiter-icon="mdi-circle-medium"-->
<!--            height="100vh"-->
<!--            class="image hidden-md-and-up shadow-slider-left"-->
<!--            style=" "-->

<!--        >-->
<!--            &lt;!&ndash;              <v-carousel-item&ndash;&gt;-->
<!--            &lt;!&ndash;                      v-for="(slide, i) in slides"&ndash;&gt;-->
<!--            &lt;!&ndash;                      :key="i"&ndash;&gt;-->
<!--            &lt;!&ndash;              >&ndash;&gt;-->
<!--            <v-carousel-item-->
<!--                v-for="({text, title }, i) in steps"-->
<!--                :key="i"-->
<!--            >-->
<!--                &lt;!&ndash;                  <v-sheet&ndash;&gt;-->
<!--                &lt;!&ndash;                          :color="colors[i]"&ndash;&gt;-->
<!--                &lt;!&ndash;                          height="100%"&ndash;&gt;-->
<!--                &lt;!&ndash;                          tile&ndash;&gt;-->
<!--                &lt;!&ndash;                          class="image"&ndash;&gt;-->
<!--                &lt;!&ndash;                          style=" box-shadow: -50vw 0 200px -20px rgba(0,0,0,0.8) inset; width: 100vw; background: none"&ndash;&gt;-->

<!--                &lt;!&ndash;                  >&ndash;&gt;-->
<!--                <v-sheet-->
<!--                    height="100%"-->
<!--                    tile-->
<!--                    class="image align-content-slider-left"-->
<!--                >-->
<!--                    &lt;!&ndash;                      <v-row&ndash;&gt;-->
<!--                    &lt;!&ndash;                              class="fill-height"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              max-width="50%"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              align="center"&ndash;&gt;-->
<!--                    &lt;!&ndash;                              justify="center"&ndash;&gt;-->
<!--                    &lt;!&ndash;                      >&ndash;&gt;-->
<!--                    &lt;!&ndash;                          <div class="display-3">{{ title }}&ndash;&gt;-->

<!--                    <v-card-->
<!--                        class="card-decor card-decor-mobile-left"-->
<!--                        outlined-->
<!--                        max-width="300px"-->
<!--                    >-->
<!--                        <v-card-title class="font-weight-bold mt-3 display-0 text-left"-->
<!--                                      v-text="title">-->
<!--                        </v-card-title>-->
<!--                        <v-card-text class="text-left"-->
<!--                                     v-text="text">-->
<!--                        </v-card-text>-->
<!--                    </v-card>-->

<!--                    &lt;!&ndash;                          </div>&ndash;&gt;-->
<!--                    &lt;!&ndash;                      </v-row>&ndash;&gt;-->
<!--                </v-sheet>-->
<!--            </v-carousel-item>-->
<!--        </v-carousel>-->


        <Footer/>

    </div>

</template>

<script>
import Footer from "@/components/Footer";

export default {
    name: 'Home',
    components: {

        Footer

    },
    // directives: {
    //   scroll: {
    //     inserted(el, binding) {
    //       let f = function (evt) {
    //           if (binding.value(evt, el)) {
    //               window.removeEventListener('scroll', f)
    //           }
    //       }
    //       window.addEventListener('scroll', f)
    //     }
    //   }
    // },
    data() {
        return {

            reveal: false,

            show: false,


            colors: [
                'green',
                'secondary',
                'yellow darken-4',
                'red lighten-2',
                'orange darken-1',
            ],
            cycle: true,
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],


            alignTop: false,
            avatar: false,
            dense: false,
            fillDot: false,
            hideDot: false,
            icon: false,
            iconColor: false,
            left: false,
            reverse: true,
            right: false,
            small: false,


            //
            //   isActive: false,
            //   activeClass: 'hidden-header',
            //   scrollClass: 'appear-header',
            //
            //
            //
            //
            // show: false,
            // firstShow: false,
            // secondShow: false,
            //
            // hello: false,
            // hellohello: false,
            //

            // classForDesktop: 'hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center',
            // classForMobile: 'hidden-md-and-up display-1 font-weight-bold text-uppercase text-center mb-3',
            //
            // classForUnitDesktop: '',
            // classForUnitMobile: '',
            //
            // background: '',

            steps: [
                {
                    title: 'Потеря смысла, апатия',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Жизненные кризисы',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Адаптация к переменам',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Трудности самоопределения',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Тревога, страхи, чувство вины',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Неуверенность в себе',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Проблемы в отношениях с партнером',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Проблемы в отношениях с родителями',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Одиночество',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Самокритика',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Перфекционизм',
                    text: 'Не знаю, ради чего я живу',
                },
                {
                    title: 'Психосоматика',
                    text: 'Не знаю, ради чего я живу',
                },
            ],


            // articles: [
            //     {
            //         src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            //         title: 'Чувство потери смысла жизни',
            //         text: 'Не знаю, ради чего я живу',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            //         title: 'Апатия',
            //         text: 'Ничего не хочу, жизнь потеряла краски, то, что раньше вызывало интерес стало безразлично',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            //         title: 'Жизненные кризисы, сложности с выстраиванием жизненной перспективы',
            //         text: 'Не знаю, куда я двигаюсь, не понимаю, что мне нужно',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            //         title: 'Перфекционизм ',
            //         text: 'Никогда не удается достичь совершенства, поэтому всегда собой недовольна; высокие ' +
            //             'ожидание и реальность не совпадают',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            //         title: 'Помощь в адаптации к переменам',
            //         text: 'Смена работы, места жительства и т.д.',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            //         title: 'Трудности самоопределения ',
            //         text: 'Кто Я в этом мире? Хочу разобраться в себе (своих потребностях, мотивах, чувствах, ценностях)',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            //         title: 'Проблемы в отношениях',
            //         text: '•\tс партнером: частые ссоры, партнер ' +
            //             'меня не понимает/не слышит, кажется, что пропали чувства/ не понимаю, что я чувствую' +
            //             '•\tс родителями: трудности сепарации (хочу отделиться, начать жить своей жизнью, но не получается), ' +
            //             'проблемы взаимодействия между разными поколениями ',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            //         title: 'Тревога, страхи, чувство вины',
            //         text: '',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            //         title: 'Неуверенность в себе, низкая самооценка',
            //         text: '',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            //         title: 'Чувство одиночества, не удается выстроить близкие отношения',
            //         text: '',
            //     },
            //     {
            //         src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            //         title: 'Постоянная самокритика, непринятие себя, в частности, недовольство своей внешностью/весом/телом',
            //         text: '',
            //     },
            // ],
        }
    },
    created() {
        // window.addEventListener('scroll', this.handleScroll);
    },

    destroyed() {
        // window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {

            if (this.$refs.firstheader.getBoundingClientRect().top < 550) {
                this.firstShow = true
            }

            if (this.$refs.secondheader.getBoundingClientRect().top < 550) {
                this.secondShow = true
            }

            if (this.$refs.thirdheader.getBoundingClientRect().top < 550) {
                this.show = true
            }

            //
            // if (this.$refs.hello.getBoundingClientRect().top < 550) {
            //   this.hello = true
            // }
            // if (this.$refs.hellohello.getBoundingClientRect().top < 550) {
            //   this.hellohello = true
            // }

        },

        headerScroll(evt, el) {

            if (el.getBoundingClientRect().top < 550) {
                document.documentElement.clientWidth > 960 ?
                    el.setAttribute('Class', this.classForDesktop) :
                    el.setAttribute('Class', this.classForMobile)
            }
        },

        showHeader() {
            let userScroll = window.pageYOffset;
            (userScroll > 100 && userScroll > this.scrollPre) ? this.isActive = true :
                this.isActive = false;
            this.scrollPre = userScroll
        }
    }
}
</script>


<style scoped>


.card1 {
    background-image: url('../../public/pictures/1.jpg');
    background-position: center center;
}

.card2 {
    background-image: url('../../public/pictures/2.jpg');
    background-position: center center;
}

.card3 {
    background-image: url('../../public/pictures/3.jpg');
    background-position: center center;
}

.card4 {
    background-image: url('../../public/pictures/4.jpg');
    background-position: center center;
}

.card5 {
    background-image: url('../../public/pictures/5.jpg');
    background-position: center center;
}

.card6 {
    background-image: url('../../public/pictures/6.jpg');
    background-position: center center;
}

.card7 {
    background-image: url('../../public/pictures/7.jpg');
    background-position: center center;
}

.card8 {
    background-image: url('../../public/pictures/8.jpg');
    background-position: center center;
}

.card9 {
    background-image: url('../../public/pictures/9.jpg');
    background-position: center center;
}

.card10 {
    background-image: url('../../public/pictures/10.jpg');
    background-position: center center;
}

.card11 {
    background-image: url('../../public/pictures/11.jpg');
    background-position: center center;
}

.card12 {
    background-image: url('../../public/pictures/12.jpg');
    background-position: center center;
}


.hidden-header {
    transform: translateY(-50px);
    opacity: 0.1;
}

.appear-header {
    transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    opacity: 1;
}


.slide-fade-enter-active {
    transition: all 1.5s ease;
}

.slide-fade-leave-active {
    transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */
{
    transform: translateY(-50px);
    opacity: 0;
}

.image-main {
    background-image: url("../images/photo7.jpg");
    background-position: center center;
}

.image {
    /*background-image: url("../images/photo8.jpg");*/
    background-image: url("../images/photo4.jpg");
    /*  background-image: url("../images/photo3.jpg");*/
    /*  background-image: url("../images/photo2.jpg");*/
    background-position: center center;
    background-size: cover;
}


.button {
    text-decoration: none;
    font-size: 1.5em;
    color: #212121;
    transition: 0.2s linear;
    background: rgba(214, 214, 214, 0.68);
    padding: 0.5em 0.5em;
    border-radius: 10px;
}

.button:hover {
    color: #cccccc;
    background: rgba(214, 214, 214, 0.48);
}


.title {
    color: #5d4a3d;
}

.row {
    padding: 0;
    /*background-image: url("../images/55.jpg");*/
    /*background-repeat: repeat-x;*/
    /*background: #bbb9b4 ;*/
}

.v-application .accent {
    background-color: white !important;
    border-color: white !important;
}

.v-application a {
    text-decoration: none;
}

.soft-grey {
    background-color: #eeeeee;
}


/*list card*/


.v-card__title {
    word-break: normal;
}


.shadow-slider-right {
    box-shadow: -50vw 0 200px -20px rgba(0, 0, 0, 0.8) inset;
    width: 100vw;
}

.align-content-slider-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: none;
}

.card-decor {
    color: white;
    background: rgba(255, 255, 255, 0.09);
    margin-right: calc(20% - 8px);
}

.card-decor-mobile-right {
    width: calc(60% - 10px);
    margin-right: calc(28% - 8px);
}


.card-decor {
    color: white;
    background: rgba(255, 255, 255, 0.19) !important;
    margin-right: calc(13% - 8px);
}

.shadow-slider-left {
    box-shadow: 50vw 0 200px -20px rgba(0, 0, 0, 0.8) inset;
    width: 100vw;
}

.align-content-slider-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: none
}

.card-decor-left {
    color: white;
    background: rgba(255, 255, 255, 0.19) !important;
    margin-left: calc(20% - 8px);
}

.card-decor-mobile-left {
    margin-left: calc(28% - 8px);
    width: calc(70% - 10px);
}


/*left version*/


.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
    opacity: 0;
}







.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}




</style>


