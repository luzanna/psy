<template>
  <section>
    <div class="py-12"></div>

    <v-container>
      <div class="hidden-md-and-up display-1 font-weight-bold mb-3 text-uppercase text-center">Ошибка 404</div>
      <div class="hidden-md-and-up display-1 font-weight-bold mb-3 text-uppercase text-center">Страница не найдена :(</div>

      <div class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center">Ошибка 404</div>
      <div class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center">Страница не найдена :(</div>


      <v-responsive
              class="mx-auto mb-12"
              width="50%"
      >
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
    </v-container>

                <div class="py-12"></div>
  </section>
</template>

<script>
  export default {
    name: '404',
  }
</script>
