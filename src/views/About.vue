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

    <section style="background-color: #eeeeee">
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

        <v-row>
          <v-col
                  v-for="({ src, text, title }, i) in articles"
                  :key="i"
                  cols="12"
                  md="4"
          >


            <h3
                    class="font-weight-black mb-4 text-uppercase text-center"
                    v-text="title"
            ></h3>


<!--            <object style="overflow: scroll" type="application/pdf" width="100%" height="500vh"-->
<!--                    v-bind:data="src">-->
<!--              <iframe scrolling="auto" width="100%" height="100%" style="border: none;"-->
<!--                      v-bind:src="src">-->
<!--                This browser does not support PDFs. Please download the PDF to view it:-->
<!--                <a v-bind:href="src" style="overflow: scroll">Download PDF</a>-->
<!--              </iframe>-->
<!--            </object>-->


            <div style="overflow: scroll; height: 80vh" >
              <pdf
                      v-for="i in numPages"
                      :key="i"
                      :src="src"
                      :page="i"
                      style="display: flex; width: 100%; flex-direction: column;"
              ></pdf>
            </div>



            <div
                    class="title font-weight-light mb-5 text-left"
                    v-text="text"
            ></div>













          </v-col>
        </v-row>

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

  import pdf from  'vue-pdf'
  var loadingTask = pdf.createLoadingTask('pdf/Diploma.pdf');



  export default {
    name: 'About',
    components: {
      pdf
    },
    data() {
      return {



        currentPage: 0,
        pageCount: 0,


        src: loadingTask,
        numPages: undefined,



        articles: [
          {
            src: 'pdf/Diploma.pdf',
            title: 'мгу специалист',
            text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
          },
          {
            src: 'pdf/Sertificats-1-2.pdf',
            title: 'нарративная практика',
            text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
          },
          {
            src: 'pdf/Sertificats-3.pdf',
            title: 'повышение квалификации',
            text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
          },
        ],

      }
    },

    mounted() {
      this.src.promise.then(pdf => {

        this.numPages = pdf.numPages;
      });
    },

  }
</script>



<style>
  .v-application a{
    text-decoration: none;
  }
</style>
