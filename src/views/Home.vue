<template>
  <div>

<!--    основной экран-->
    <section id="welcome" class="overflow-hidden">
          <div class="row no-gutters">

            <!--            Большой экран-->

            <div class="hidden-sm-and-down col-md-6 col">
              <div class="v-responsive v-image" style="height: 100vh;">
                <div class="v-responsive__sizer" style="padding-bottom: 113.125%;"></div>
                <div class="v-image__image v-image__image--cover image"></div>
                <div class="v-responsive__content" style="width: 960px;"></div>
              </div>
            </div>
              <div class="hidden-sm-and-down row align-center justify-center">
                <div class="col-md-6 col-10 text-center">
                  <div class="py-12"></div>

                  <h1 class="display-3 v-heading mb-3 font-weight-light ">
                    Психолог <br/>
                    Мария Юдина
                  </h1>
                  <p class="title font-weight-light"  style="line-height: 1.7 !important;">
                    Психологическая помощь<br>
                  </p>
                  <router-link to="/sign_up" class="mt-4 v-btn v-btn--contained v-btn--rounded theme--light v-size--default secondary text-center"><span class="v-btn__content">Записаться</span></router-link>
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
                <div class="v-image__image v-image__image--cover image"></div>
                <div class="v-responsive__content" style="width: 960px;">

                  <div class="hidden-md-and-up row align-center justify-center">
                    <div class="col-md-6 text-center">
                      <div class="py-12"></div>

                      <h1 class="display-2 v-heading mb-3 font-weight-light colo white--text">
                        Психолог <br/>
                        Мария Юдина
                      </h1>
                      <p class="title font-weight-light white--text"  style="line-height: 1.7 !important;">
                        Психологическая помощь<br>
                      </p>
                      <router-link to="/sign_up" class="mt-4 v-btn v-btn--contained v-btn--rounded theme--light v-size--default  text-center"><span class="v-btn__content black--text">Записаться</span></router-link>
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

<!--        <div class="parallax-container">-->
<!--          <div class="parallax-title">Психолог-->
<!--            <br/> Мария Юдина<br/>-->
<!--          </div>-->
<!--          <router-link to="/sign_up" class="button">Консультация</router-link>-->
<!--    &lt;!&ndash;      <Scroll class="scroll"/>&ndash;&gt;-->
<!--          <parallax :speed-factor="0.3" breakpoint="(min-width: 80px)">-->
<!--            &lt;!&ndash;                <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg">&ndash;&gt;-->
<!--            &lt;!&ndash;                <img src="../images/cover.jpg"/>&ndash;&gt;-->
<!--            &lt;!&ndash;                <img src="../images/photo3.jpg">&ndash;&gt;-->
<!--            <img src="../images/photo.jpg">-->

<!--            &lt;!&ndash;                <img src="../images/photo2.jpg"/>&ndash;&gt;-->
<!--          </parallax>-->
<!--        </div>-->


<!--    <v-parallax-->
<!--            height="600"-->
<!--            src="../images/photo3.jpg"-->
<!--    >-->
<!--&lt;!&ndash;                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"&ndash;&gt;-->
<!--    &lt;!&ndash;      src="../images/cover.jpg"&ndash;&gt;-->
<!--      &lt;!&ndash;                <img src="../images/cover.jpg"/>&ndash;&gt;-->
<!--      &lt;!&ndash;                <img src="../images/photo3.jpg">&ndash;&gt;-->
<!--      &lt;!&ndash;                <img src="../images/photo2.jpg"/>&ndash;&gt;-->
<!--      <v-row-->
<!--              align="center"-->
<!--              justify="center"-->
<!--      >-->
<!--        <v-col class="text-md-center" cols="10">-->
<!--          <h1 class="display-2 font-weight-thin mb-4 text-h2">-->
<!--            Психолог-->
<!--            <br/>-->
<!--            Мария Юдина-->
<!--          </h1>-->

<!--          <h4 class="subheading">Психологическая помощь</h4>-->
<!--          <br/>-->
<!--          <router-link to="/sign_up" class="button">Записаться</router-link>-->
<!--          <br/>-->
<!--          <br/>-->

<!--          <v-btn-->
<!--                  dark-->
<!--                  class="align-self-end"-->
<!--                  fab-->
<!--                  outlined-->
<!--                  @click="$vuetify.goTo('#about-me')"-->
<!--          >-->
<!--            <v-icon>mdi-chevron-double-down</v-icon>-->
<!--          </v-btn>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-parallax>-->



<!--    давайте знакомиться-->

    <section id="about-me" style="background-color: #eeeeee">
      <div class="py-12"></div>

      <v-container class="text-center">
        <div  ref="firstheader">
          <div v-scroll="headerScroll">
            <transition name="slide-fade">
            <div v-if="firstShow">
              Давайте знакомиться
            </div>
          </transition>
          </div>


        </div>

        <v-responsive
                class="mx-auto mb-8"
                width="50%"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-responsive
                class="mx-auto title font-weight-light mb-8 text-justify"
                max-width="720"
        >
          <div  ref="hello">
<!--            <div v-scroll="unitScroll">-->
            <transition name="slide-fade-up">
              <div v-if="hello">
                Привет! Меня зовут Мария и я практикующий психолог и психотерапевт. Помогаю своим клиентам разобраться в себе и
                сделать свою жизнь проще и качественней.
                Для меня психотерапия - это....
                Добавить что-то про индивидуальный подход.
              </div>
            </transition>
<!--            </div>-->
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

<!--ко мне обращаются-->

    <section>
      <div class="py-12"></div>

      <v-container>

        <div  ref="secondheader">
              <div v-scroll="headerScroll">
                <transition name="slide-fade">
                  <div v-if="secondShow">
                    Ко мне обращаются
                  </div>
                </transition>
              </div>
        </div>

        <v-responsive
                class="mx-auto mb-12"
                width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
                  v-for="({ src, text, title }, i) in articles"
                  :key="i"
                  cols="12"
                  md="4"
          >
                  <v-img
                          :src="src"
                          class="mb-auto"
                          height="275"
                          max-width="100%"
                  >
                  </v-img>

            <h3
                    class="font-weight-black mb-4 text-uppercase text-center"
                    v-text="title"
            ></h3>

            <div
                    class="title font-weight-light mb-5 text-left"
                    v-text="text"
            ></div>

          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>



<!--    <section>-->
<!--      <div class="py-12"></div>-->

<!--      <v-container class="text-center">-->
<!--        <h2 class="display-2 font-weight-bold mb-3 text-uppercase">Ко мне обращаются</h2>-->

<!--        <v-responsive-->
<!--                class="mx-auto mb-12"-->
<!--                width="50%"-->
<!--        >-->
<!--          <v-divider class="mb-1"></v-divider>-->

<!--          <v-divider></v-divider>-->
<!--        </v-responsive>-->

<!--        <v-row>-->
<!--          <v-col-->
<!--                  v-for="({ icon, title, text, image }, i) in features"-->
<!--                  :key="i"-->
<!--                  cols="12"-->
<!--                  md="4"-->
<!--          >-->
<!--            <v-card-->
<!--                    dark-->
<!--                    class="py-12 px-4 image-card"-->
<!--                    color="grey lighten-5"-->
<!--                    flat-->
<!--                    :datasrc="image"-->
<!--            >-->
<!--&lt;!&ndash;              <v-card >&ndash;&gt;-->



<!--&lt;!&ndash;                      <v-parallax&ndash;&gt;-->
<!--&lt;!&ndash;                              src="../images/cover.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;                      >&ndash;&gt;-->
<!--                  &lt;!&ndash;                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"&ndash;&gt;-->
<!--                      &lt;!&ndash;      src="../images/cover.jpg"&ndash;&gt;-->
<!--                        &lt;!&ndash;                <img src="../images/cover.jpg"/>&ndash;&gt;-->
<!--                        &lt;!&ndash;                <img src="../images/photo3.jpg">&ndash;&gt;-->
<!--                        &lt;!&ndash;                <img src="../images/photo2.jpg"/>&ndash;&gt;-->


<!--                        <v-theme-provider dark style="background-color: rgba(0,0,0,0.64)">-->
<!--                          <div style="padding: 1em">-->
<!--                            <v-avatar-->
<!--                                    color="primary"-->
<!--                                    size="88"-->
<!--                            >-->
<!--                              <v-icon-->
<!--                                      large-->
<!--                                      v-text="icon"-->
<!--                              ></v-icon>-->
<!--                            </v-avatar>-->
<!--                          </div>-->
<!--                        </v-theme-provider>-->

<!--                        <v-card-title  style="background-color: rgba(0,0,0,0.64)"-->
<!--                                class="justify-center font-weight-black text-uppercase"-->
<!--                                v-text="title"-->
<!--                        ></v-card-title>-->

<!--                        <v-card-text style="background-color: rgba(0,0,0,0.64)"-->
<!--                                class="subtitle-1"-->
<!--                                v-text="text"-->
<!--                        >-->
<!--                        </v-card-text>-->
<!--&lt;!&ndash;                      </v-parallax>&ndash;&gt;-->







<!--&lt;!&ndash;              <v-theme-provider dark>&ndash;&gt;-->
<!--&lt;!&ndash;                <div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <v-avatar&ndash;&gt;-->
<!--&lt;!&ndash;                          color="primary"&ndash;&gt;-->
<!--&lt;!&ndash;                          size="88"&ndash;&gt;-->
<!--&lt;!&ndash;                  >&ndash;&gt;-->
<!--&lt;!&ndash;                    <v-icon&ndash;&gt;-->
<!--&lt;!&ndash;                            large&ndash;&gt;-->
<!--&lt;!&ndash;                            v-text="icon"&ndash;&gt;-->
<!--&lt;!&ndash;                    ></v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                  </v-avatar>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;              </v-theme-provider>&ndash;&gt;-->

<!--&lt;!&ndash;              <v-card-title&ndash;&gt;-->
<!--&lt;!&ndash;                      class="justify-center font-weight-black text-uppercase"&ndash;&gt;-->
<!--&lt;!&ndash;                      v-text="title"&ndash;&gt;-->
<!--&lt;!&ndash;              ></v-card-title>&ndash;&gt;-->

<!--&lt;!&ndash;              <v-card-text&ndash;&gt;-->
<!--&lt;!&ndash;                      class="subtitle-1"&ndash;&gt;-->
<!--&lt;!&ndash;                      v-text="text"&ndash;&gt;-->
<!--&lt;!&ndash;              >&ndash;&gt;-->
<!--&lt;!&ndash;              </v-card-text>&ndash;&gt;-->
<!--            </v-card>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->

<!--      <div class="py-12"></div>-->
<!--    </section>-->



<!--      <div ref="headerrrr">-->
<!--        <transition name="slide-fade">-->
<!--          <p v-if="show">привет</p>-->
<!--        </transition>-->
<!--      </div>-->


<!--как проходят консультации-->
    <section style="background-color: #eeeeee">
      <div class="py-12"></div>


      <v-container>


        <div  ref="thirdheader">
          <div v-scroll="headerScroll">
            <transition name="slide-fade">
              <div v-if="show">
                Как проходят консультации
              </div>
            </transition>
          </div>
        </div>

        <v-responsive
                class="mx-auto mb-12"
                width="50%"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-theme-provider light>
          <v-responsive
                  class="mx-auto title font-weight-light mb-8 text-justify"
                  max-width="720"
          >

            <div  ref="hellohello">
              <transition name="slide-fade-up">
                <div v-if="hellohello">

                Наши сеансы будут проходить в уютном кабинете или онлайн - на ваш выбор. После встречи или звонка вы рассказываете, чего
            хотите от наших сеансов, я разрабатываю план, в зависимости от вашего запроса и т д. Дописать еще текста и оформить елочкой(?)
            ЦЕНЫ И ТИПЫ УСЛУГ!!!!!!!
                </div>
              </transition>
            </div>
          </v-responsive>

        </v-theme-provider>
      </v-container>

      <div class="py-12"></div>
    </section>

  </div>
</template>

<script>

export default {
  // import Parallax from "vue-parallaxy"
  // import Scroll from "../components/Scroll";
  // import Card from ""

  name: 'Home',
  components: {
  },
  directives: {
    scroll: {
      inserted(el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
          // el.setAttribute('style', 'color: red')
    // }
    }
  },
  data(){
    return{

      show: false,
      firstShow: false,
      secondShow: false,

      hello: false,
      hellohello: false,


      classForDesktop: 'hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center',
      classForMobile: 'hidden-xs-and-up display-1 font-weight-bold text-uppercase text-center mb-3',

      classForUnitDesktop: '',
      classForUnitMobile: '',

      background: '',

      articles: [
        {
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Зависимость',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Депрессия',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Трудоголизм',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
      ],

      features: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Зависимость',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
          image: '../images/photo.jpg'
        },
        {
          icon: 'mdi-update',
          title: 'Депрессия',
          text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
          image: '../images/cover.jpg'

        },
        {
          icon: 'mdi-shield-outline',
          title: 'Расстройства личности',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
          image: '../images/cover.jpg'

        },
      ],
    }
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll(){

      if (this.$refs.firstheader.getBoundingClientRect().top < 550) {
        this.firstShow = true
      }

      if (this.$refs.secondheader.getBoundingClientRect().top < 550) {
        this.secondShow = true
      }

      if (this.$refs.thirdheader.getBoundingClientRect().top < 550) {
        this.show = true
      }


      if (this.$refs.hello.getBoundingClientRect().top < 550) {
        this.hello = true
      }
      if (this.$refs.hellohello.getBoundingClientRect().top < 550) {
        this.hellohello = true
      }

    },

    headerScroll(evt, el) {
      console.log(el.getBoundingClientRect().top)

      if (el.getBoundingClientRect().top < 550) {
        document.documentElement.clientWidth > 960 ?
                el.setAttribute('Class', this.classForDesktop) :
                el.setAttribute('Class', this.classForMobile)
      }
    },

    // unitScroll(evt, el) {
      // if (el.getBoundingClientRect().top < 550) {
      //   console.log(el)

        // document.documentElement.clientWidth > 960 ?
        //         el.setAttribute('Class', this.classForUnitDesktop) :
        //         el.setAttribute('Class', this.classForMobile)
        // }
      // },
  }
}
</script>


<style scoped>

  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateY(-100px);
    opacity: 0;
  }

  .slide-fade-up-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-up-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-up-enter, .slide-fade-up-leave-to
    /* .slide-fade-up-leave-active до версии 2.1.8 */ {
    transform: translateY(100px);
    opacity: 0;
  }




  /*старый параллакс*/


  .parallax-container {
    position: relative;
    z-index: 1;
  }
  .parallax-title {
    position: absolute;
    top: 40vh;
    left: 10vw;
    text-align: left;
    color: #d6d6d6;
    /*background: rgba(214, 214, 214, 0.68);*/
    font-size: 3em;
  }

  .image{
    background-image: url("../images/photo2.jpg");
    background-position: center center;
  }


  .button{
    text-decoration: none;
    font-size: 1.5em;
    color: #212121;
    transition: 0.2s linear;
    background: rgba(214, 214, 214, 0.68);
    padding: 0.5em 0.5em;
    border-radius: 10px;
  }

  .button:hover{
    color: #cccccc;
    background: rgba(214, 214, 214, 0.48);
  }


  .title {
    color: #5d4a3d;
  }

  .row{
    padding: 0;
  }

  .v-application a{
    text-decoration: none;
  }

  </style>
