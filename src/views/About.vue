<template>
  <div class="about">
    <section id="about-me">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold text-uppercase mb-3">Почему я стала заниматься психологией</h2>

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



    <section style="background-color: #eeeeee">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase">Образование и дипломы</h2>

        <v-responsive
                class="mx-auto mb-12"
                width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>



        <embed src="../pdf/Diploma.pdf" type="application/pdf" width="100%" height="100%">




        <object data="../pdf/Diploma.pdf" type="application/pdf" width="100%" height="100%">
          <iframe src="../pdf/Diploma.pdf" width="100%" height="100%" style="border: none;">
            This browser does not support PDFs. Please download the PDF to view it:
            <a href="../pdf/Diploma.pdf">Download PDF</a>
          </iframe>
        </object>


      </v-container>

      <div class="py-12"></div>
    </section>


    <section>
      <div class="py-12"></div>


      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Основные подходы в психотерапии</h2>

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
