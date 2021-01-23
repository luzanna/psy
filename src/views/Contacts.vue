<template>
    <section style="background-color: #eeeeee">


        <div class="py-12"></div>

        <v-container class="text-center">
            <h2 class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase">Контакты</h2>

            <h2 class="hidden-md-and-up display-1 font-weight-bold mb-3 text-uppercase">Контакты</h2>

            <v-responsive
                class="mx-auto mb-12"
                width="50%"
            >
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>

            </v-responsive>


            <v-responsive
                class="mx-auto title font-weight-light mb-8"
                max-width="720"
            >
                Вы можете позвонить мне в любое время с 9 до 21, написать в социальных сетях или на почту.

            </v-responsive>


            <v-row>
                <v-col
                    v-for="({ icon, title, text }, i) in features"
                    :key="i"
                    cols="12"
                    md="4"
                >
                    <v-card
                        class="py-12 px-4"
                        color="grey lighten-5"
                        flat
                    >
                        <v-theme-provider dark>
                            <div>
                                <v-avatar
                                    color="primary"
                                    size="88"
                                >
                                    <v-icon
                                        large
                                        v-text="icon"
                                    ></v-icon>
                                </v-avatar>
                            </div>
                        </v-theme-provider>

                        <v-card-title
                            class="justify-center font-weight-black text-uppercase"
                            v-text="title"
                        ></v-card-title>

                        <v-card-text
                            class="subtitle-1"
                            v-text="text"
                        >

                        </v-card-text>
                    </v-card>
                </v-col>

                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abbd0e806c45661d745de7715f93f82227a7ad34a60bc18fc11dfb91f8ff68a68&amp;source=constructor"
                    width="500" height="400" frameborder="0"></iframe>

            </v-row>
        </v-container>

        <div class="py-12"></div>
    </section>

</template>

<script>
export default {
    name: "Contacts",
    data() {
        return {
            features: [
                {
                    icon: 'mdi-account-group-outline',
                    title: 'Телефон',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
                {
                    icon: 'mdi-update',
                    title: 'Телеграмм',
                    text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
                },
                {
                    icon: 'mdi-shield-outline',
                    title: 'Почта',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
                {
                    icon: 'mdi-shield-outline',
                    title: 'скайп',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
                {
                    icon: 'mdi-shield-outline',
                    title: 'Зум',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
                {
                    icon: 'mdi-shield-outline',
                    title: 'Адрес кабинета',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>
