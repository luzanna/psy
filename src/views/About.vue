<template>
  <div class="about">


    <section id="about-me">
      <div class="py-12"></div>

      <v-container class="text-center">


        <h2 class="hidden-sm-and-down display-2 font-weight-bold text-uppercase mb-3">Почему я стала заниматься психологией</h2>

        <h2 class=" hidden-md-and-up display-1 font-weight-bold text-uppercase text-center mb-3">Почему я стала заниматься психологией</h2>


        <v-responsive
                class="mx-auto mb-8"
                width="50%"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-responsive
                class="mx-auto title font-weight-light mb-8"
                max-width="720"
        >
          Привет! Меня зовут Мария и я практикующий психолог и психотерапевт. Помогаю своим клиентам разобраться в себе и
          сделать свою жизнь проще и качественней.
          Для меня психотерапия - это....
          Добавить что-то про индивидуальный подход.

        </v-responsive>

<!--        <v-avatar-->
<!--                class="elevation-12 mb-12"-->
<!--                size="128"-->
<!--        >-->
<!--          <v-img src="../images/cover.jpg"></v-img>-->
<!--        </v-avatar>-->

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

<!--образование-->

    <section class="soft-grey">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="hidden-sm-and-down  display-2 font-weight-bold mb-3 text-uppercase">Образование и дипломы</h2>

        <h2 class="hidden-md-and-up  display-1 font-weight-bold mb-3 text-uppercase">Образование и дипломы</h2>
        <v-responsive
                class="mx-auto mb-12"
                width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row  v-for="({ src, text, pages, title }, i) in articles"
                :key="i"
                cols="12"
                class="mb-3">

            <div v-if="!isMobile()">

              <v-btn
                      @click.stop="dialog = true; numberOfDiploma = i"
                      style="box-shadow: none;  height: 30vh; border-radius: 0"
              >

                <div class="diploma-for-mobile">
                  <img
                        :src="pages[0]"
                        class="pages-of-diploma"
                  />
                </div>
              </v-btn>

            </div>
            <div v-else>
              <v-btn
                      @click.stop="dialog = true; numberOfDiploma = i"
                      style="box-shadow: none;  height: 30vh; border-radius: 0"
              >
              <div class="diploma-for-mobile" >

                <img
                      :src="pages[0]"
                      class="pages-of-diploma"
                />
              </div>
              </v-btn>

            </div>

          <v-col style="margin: auto" >
            <h3
                  class="font-weight-black text-uppercase text-left"
                  v-text="title"
          ></h3>

            <div
                    class="title font-weight-light mb-5 text-left"
                    v-text="text"
            ></div>
          </v-col>






        </v-row>

        <!--модальное окно с дипломами-->
        <v-row justify="center">
          <v-dialog
                  v-model="dialog"
                  scrollable  max-width="max-content"
          >
            <v-card style="display: flex; justify-content: start; height: fit-content;" hidden>

              <v-btn
                      style="position: fixed; background: rgba(0,0,0,0.6)"
                      text
                      @click="dialog = false"
              >
                x
                <!--            <v-icon>highlight-off</v-icon>-->
                <!--                  <v-icon>x</v-icon>-->

              </v-btn>

              <img   alt=""
                     v-for="page in articles[numberOfDiploma].pages"
                     :key="page"
                     :src="page"
                     style="height: 90vh"
              />
            </v-card>
          </v-dialog>
        </v-row>







<!--        <v-row>-->
<!--          <v-col-->
<!--                  v-for="({ src, text, pages, title }, i) in articles"-->
<!--                  :key="i"-->
<!--                  cols="12"-->
<!--                  md="6"-->
<!--          >-->


<!--            <h3-->
<!--                    class="font-weight-black mb-4 text-uppercase text-center"-->
<!--                    v-text="title"-->
<!--            ></h3>-->



<!--            <div v-if="!isMobile()">-->
<!--&lt;!&ndash;              <object class="scroll-pdf" type="application/pdf"&ndash;&gt;-->
<!--&lt;!&ndash;                      v-bind:data="src">&ndash;&gt;-->
<!--&lt;!&ndash;                <iframe class="scroll-pdf-iframe"&ndash;&gt;-->
<!--&lt;!&ndash;                        v-bind:src="src">&ndash;&gt;-->
<!--&lt;!&ndash;                  Этот браузер не поддерживает PDF. Пожалуйста, скачайте PDF, чтобы посмотреть его:&ndash;&gt;-->
<!--&lt;!&ndash;                  <a v-bind:href="src">Скачать PDF</a>&ndash;&gt;-->
<!--&lt;!&ndash;                </iframe>&ndash;&gt;-->
<!--&lt;!&ndash;              </object>&ndash;&gt;-->

<!--              <div class="diploma-for-mobile"-->
<!--              style="display: flex;  width:300px">-->


<!--              <img  v-for="item in pages"-->
<!--                    :key="item"-->
<!--                    :src="item"-->
<!--                    class="pages-of-diploma"-->
<!--              />-->
<!--              </div>-->

<!--            </div>-->
<!--            <div v-else>-->
<!--              <div class="diploma-for-mobile">-->

<!--                <img  v-for="item in pages"-->
<!--                      :key="item"-->
<!--                      :src="item"-->
<!--                      class="pages-of-diploma"-->
<!--                />-->
<!--              </div>-->

<!--            </div>-->




<!--&lt;!&ndash;            <div>&ndash;&gt;-->
<!--&lt;!&ndash;              <a v-bind:href="src">  <img src="diplomas/mgu.JPG"  width="100%"/> </a>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->



<!--&lt;!&ndash;            <div style="overflow: scroll; overflow-x: scroll; height: 80vh;" >&ndash;&gt;-->
<!--&lt;!&ndash;              <pdf&ndash;&gt;-->
<!--&lt;!&ndash;                      v-for="i in numPages"&ndash;&gt;-->
<!--&lt;!&ndash;                      :key="i"&ndash;&gt;-->
<!--&lt;!&ndash;                      :src="src"&ndash;&gt;-->
<!--&lt;!&ndash;                      :page="i"&ndash;&gt;-->
<!--&lt;!&ndash;                      style=" display: flex"&ndash;&gt;-->
<!--&lt;!&ndash;              ></pdf>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            <div-->
<!--                    class="title font-weight-light mb-5 text-left"-->
<!--                    v-text="text"-->
<!--            ></div>-->

<!--          </v-col>-->
<!--        </v-row>-->

      </v-container>

  <div class="py-12"></div>
    </section>




    <!--подходы-->
    <section>
      <div class="py-12"></div>

      <v-container>
        <h2 class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center">Основные подходы в психотерапии</h2>
        <h2 class="hidden-md-and-up  display-1 font-weight-bold mb-3 text-uppercase text-center">Основные подходы в психотерапии</h2>


        <v-responsive
                class="mx-auto mb-12"
                width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-theme-provider light>
          <v-responsive
                  class="mx-auto title font-weight-light mb-8 text-center"
                  max-width="720"
          >
            какой подход для какой проблемы лучше всего подходит
          </v-responsive>

        </v-theme-provider>
      </v-container>

      <div class="py-12"></div>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'About',
    components: {
    },
    data() {
      return {

        dialog: false,

        numberOfDiploma: 0,



        articles: [
          {
            src: 'pdf/Diploma.pdf',
            title: 'мгу специалист',
            pages: ['diplomas/Diploma_page-0001.jpg', 'diplomas/Diploma_page-0002.jpg', 'diplomas/Diploma_page-0003.jpg'],
            text: 'Phasellus lorem enim, luctus ut velit eget, ',
          },
          {
            src: 'pdf/Sertificats-1-2.pdf',
            title: 'повышение квалификации',
            pages: ['diplomas/Sertificats-1-2_page-0001.jpg', 'diplomas/Sertificats-1-2_page-0002.jpg'],
            text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. ',
          },
          {
            src: 'pdf/Sertificats-3.pdf',
            title: 'повышение квалификации',
            pages: ['diplomas/Sertificats-3_page-0001.jpg'],
            text: 'Vestibulum in dictum velit, in rhoncusellus lorem enim, luctus ut velit eget.',
          },
          {
            src: 'pdf/Sertificats-2.pdf',
            title: 'повышение квалификации',
            pages: ['diplomas/Sertificats-2_page-0001.jpg'],
            text: 'Vestibulum in dictum velit, Phasellus lorem enim, luctus ut velit eget.',
          },
        ],
      }
    },

    methods: {
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>


<style>
  .v-application a{
    text-decoration: none;
  }
  .soft-grey{
    background-color: #eeeeee
  }

  .diploma-for-mobile{
    /*overflow: hidden;*/
    /*overflow-x: scroll;*/
    display: flex;
    height: 30vh;
  }
  .pages-of-diploma{
    height: inherit;
  }
</style>
