<template>
    <div>
        <section>
            <div class="py-12"></div>

            <v-container>
                <h2 class="hidden-md-and-up display-1 font-weight-bold mb-3 text-uppercase text-center">Запись на
                    консультацию</h2>
                <h2 class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center">Запись на
                    консультацию</h2>


                <v-responsive
                    class="mx-auto mb-12"
                    width="50%"
                >
                    <v-divider class="mb-1"></v-divider>
                    <v-divider></v-divider>
                </v-responsive>


                <!--                -->
                <!--                <v-responsive-->
                <!--                        class="mx-auto font-weight-light mb-8 text-left"-->
                <!--                        max-width="720"-->
                <!--                >-->
                <!--                    Консультации проходят лично и онлайн. Мы можем встретиться в уютном кабинете недалеко от метро ..Пушкинская..(поставить карту?)-->
                <!--                    или созвониться через интернет. Для продуктивной онлайн консультации вам желательно найти тихое комфортное место,-->
                <!--                    где вас никто не будет отвлекать, чтобы мы могли погрузиться в психотерапию.-->
                <!--                    Для того, чтобы записаться, заполните форму. После обработки заявки с вами свяжутся для подтверждения и обсуждения деталей.-->
                <!--                </v-responsive>-->

                <!--                <v-responsive-->
                <!--                        class="mx-auto title font-weight-light mb-8 text-justify"-->
                <!--                        max-width="720"-->
                <!--                >-->
                <!--                    Для того, чтобы записаться, заполните форму. После обработки заявки с вами свяжутся для подтверждения и обсуждения деталей.-->
                <!--                </v-responsive>-->


                <!--                <v-theme-provider light>-->
                <!--                    <v-responsive-->
                <!--                            class="mx-auto title font-weight-light mb-8"-->
                <!--                            max-width="720"-->
                <!--                    >-->
                <!--                        <v-form class="formRecord"-->
                <!--                                method="post"-->
                <!--                                action="App.vue"-->
                <!--                                @submit.prevent="sendData"-->
                <!--                                ref="form"-->
                <!--                                v-model="valid"-->
                <!--                                :lazy-validation="lazy"-->
                <!--                        >-->
                <!--                            <v-text-field-->
                <!--                                    outlined-->
                <!--                                    v-model="name"-->
                <!--                                    :counter="30"-->
                <!--                                    :rules="nameRules"-->
                <!--                                    label="Имя*"-->
                <!--                                    required-->
                <!--                            ></v-text-field>-->

                <!--                            <v-text-field-->
                <!--                                    outlined-->
                <!--                                    v-model="email"-->
                <!--                                    :rules="emailRules"-->
                <!--                                    label="E-mail*"-->
                <!--                                    required-->
                <!--                            ></v-text-field>-->

                <!--                            <v-text-field-->
                <!--                                    outlined-->
                <!--                                    v-model="phone"-->
                <!--                                    :rules="phoneRules"-->
                <!--                                    label="Телефон*"-->
                <!--                                    required-->
                <!--                            ></v-text-field>-->

                <!--                            <v-select-->
                <!--                                    outlined-->
                <!--                                    v-model="select"-->
                <!--                                    :items="items"-->
                <!--                                    label="Формат консультации"-->
                <!--                            ></v-select>-->

                <!--                            <v-text-field-->
                <!--                                    outlined-->
                <!--                                    v-model="communicate"-->
                <!--                                    :rules="communicateRules"-->
                <!--                                    :counter="50"-->
                <!--                                    label="Предпочтительный способ связи"-->
                <!--                            ></v-text-field>-->

                <!--                            <v-textarea-->
                <!--                                    outlined-->
                <!--                                    v-model="problem"-->
                <!--                                    :auto-grow="autoGrow"-->
                <!--                                    :counter="counter ? counter : false"-->
                <!--                                    :hint="hint"-->
                <!--                                    :label="label"-->
                <!--                                    :placeholder="placeholder"-->
                <!--                                    :row-height="rowHeight"-->
                <!--                                    :rows="rows"-->
                <!--                            ></v-textarea>-->

                <!--                            <v-checkbox-->
                <!--                                    outlined-->
                <!--                                    v-model="checkbox"-->
                <!--                                    :rules="[v => !!v || 'Согласие обязательно']"-->
                <!--                                    label="Я согласен на обработку персональных данных"-->
                <!--                                    required-->
                <!--                            ></v-checkbox>-->

                <!--                            <v-btn  type="submit"-->
                <!--                                    :disabled="!valid"-->
                <!--                                    color="success"-->
                <!--                                    class="mr-4"-->
                <!--                                    @click="validate"-->
                <!--                            >-->
                <!--                                Записаться-->
                <!--                            </v-btn>-->


                <!--                            {{this.$store.state.inputDataOfUser}}-->

                <!--                        </v-form>-->

                <!--                    </v-responsive>-->

                <!--                </v-theme-provider>-->
            </v-container>

            <!--            <div class="py-12"></div>-->
        </section>
        <section class="soft-grey">
            <div class="py-12"></div>


            <v-container>

                <h1 class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center"> Как проходят
                    консультации </h1>

                <h1 class="hidden-md-and-up display-1 font-weight-bold text-uppercase text-center mb-3"> Как проходят
                    консультации </h1>

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

                        <div ref="hellohello">
                            <!--              <transition name="slide-fade-up">-->
                            <!--                <div v-if="hellohello">-->

                            Наши сеансы будут проходить в уютном кабинете или онлайн - на ваш выбор. После встречи или
                            звонка вы рассказываете, чего
                            хотите от наших сеансов, я разрабатываю план, в зависимости от вашего запроса и т д.
                            Дописать еще текста и оформить елочкой(?)
                            ЦЕНЫ И ТИПЫ УСЛУГ!!!!!!!
                            <!--                </div>-->
                            <!--              </transition>-->
                        </div>
                    </v-responsive>

                </v-theme-provider>
            </v-container>

            <div class="py-12"></div>
        </section>

        <section class="overflow-hidden">
            <div class="row accent no-gutters">
                <div class=" col-md-6 col">
                    <div class="row fill-height  align-center justify-center">
                        <div class="col col-12">


                            <v-responsive
                                class="mx-auto  font-weight-light mb-8 text-left"
                                max-width="720"
                            >
                                Консультации проходят лично и онлайн. Мы можем встретиться в уютном кабинете недалеко от
                                метро ..Пушкинская..(поставить карту?)
                                или созвониться через интернет. Для продуктивной онлайн консультации вам желательно
                                найти тихое комфортное место,
                                где вас никто не будет отвлекать, чтобы мы могли погрузиться в психотерапию.
                                Для того, чтобы записаться, заполните форму. После обработки заявки с вами свяжутся для
                                подтверждения и обсуждения деталей.
                            </v-responsive>

                            <v-responsive
                                class="mx-auto title font-weight-light mb-8 text-left"
                                max-width="720"
                            >
                                Для того, чтобы записаться, заполните форму. После обработки заявки с вами свяжутся для
                                подтверждения и обсуждения деталей.
                            </v-responsive>


                        </div>
                    </div>
                </div>
                <div class="text-center col-md-6 col-12">
                    <div class="row fill-height align-center justify-center">
                        <div class="col col-12">

                            <v-theme-provider light>
                                <v-responsive
                                    class="mx-auto title font-weight-light mb-8"
                                    max-width="720"
                                >
                                    <v-form class="formRecord"
                                            method="post"
                                            action="App.vue"
                                            @submit.prevent="sendData"
                                            ref="form"
                                            v-model="valid"
                                            :lazy-validation="lazy"
                                    >
                                        <v-text-field
                                            outlined
                                            v-model="name"
                                            :counter="30"
                                            :rules="nameRules"
                                            label="Имя*"
                                            required
                                        ></v-text-field>

                                        <v-text-field
                                            outlined
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail*"
                                            required
                                        ></v-text-field>

                                        <v-text-field
                                            outlined
                                            v-model="phone"
                                            :rules="phoneRules"
                                            label="Телефон*"
                                            required
                                        ></v-text-field>

                                        <v-select
                                            outlined
                                            v-model="select"
                                            :items="items"
                                            label="Формат консультации"
                                        ></v-select>

                                        <v-text-field
                                            outlined
                                            v-model="communicate"
                                            :rules="communicateRules"
                                            :counter="50"
                                            label="Предпочтительный способ связи"
                                        ></v-text-field>

                                        <v-textarea
                                            outlined
                                            v-model="problem"
                                            :auto-grow="autoGrow"
                                            :counter="counter ? counter : false"
                                            :hint="hint"
                                            :label="label"
                                            :placeholder="placeholder"
                                            :row-height="rowHeight"
                                            :rows="rows"
                                        ></v-textarea>

                                        <v-checkbox
                                            outlined
                                            v-model="checkbox"
                                            :rules="[v => !!v || 'Согласие обязательно']"
                                            label="Я согласен на обработку персональных данных"
                                            required
                                        ></v-checkbox>

                                        <v-btn type="submit"
                                               :disabled="!valid"
                                               color="success"
                                               class="mr-4"
                                               @click="validate"
                                        >
                                            Записаться
                                        </v-btn>


                                        <!--                                    {{this.$store.state.inputDataOfUser}}-->

                                    </v-form>

                                </v-responsive>

                            </v-theme-provider>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'

export default {
    name: "Record",
    data: () => ({
        valid: true,
        lazy: true,
        // name: '',
        nameRules: [
            v => !!v || 'Обязательное поле',
            v => (v && v.length <= 30) || 'Слишком длинное имя',
        ],
        // email: '',
        emailRules: [
            v => !!v || 'По этому адресу вы получите подтверждение о заявке',
            v => /.+@.+\..+/.test(v) || 'Введите верный адрес',
        ],
        // phone: '',
        phoneRules: [
            v => !!v || 'По этому номеру проходит подтверждение о заявке',
            v => /[0-9]{10,}/.test(v) || 'Введите верный телефон',
        ],
        // select: null,
        items: [
            'Очно',
            'Online',
        ],
        // communicate: '',
        communicateRules: [
            v => (v.length <= 50) || 'Слишком длинное сообщение',
        ],
        // problem: '',
        problemRules: [
            v => !!v || 'Обязательное поле',
            v => (v && v.length <= 2000) || 'Слишком длинное сообщение',
        ],

        autoGrow: true,
        counter: 2000,
        hint: '',
        label: 'Опишите свою проблему',
        placeholder: '',
        rounded: false,
        rowHeight: 24,
        rows: 1,

        checkbox: false,
    }),

    computed: {
        name: {
            // ...mapState(['sendForm.inputDataOfUser.name']),
            get() {
                return this.$store.state.sendForm.inputDataOfUser.name
            },

            set(value) {
                this.updateName(value)
                // this.$store.commit('updateName', value)
            }
        },

        email: {
            // ...mapState(['sendForm.inputDataOfUser.updateEmail']),
            get() {
                return this.$store.state.sendForm.inputDataOfUser.email
            },
            set(value) {
                this.updateEmail(value)
                // this.$store.commit('updateEmail', value)
            }
        },

        phone: {
            // ...mapState(['sendForm.inputDataOfUser.phone']),
            get() {
                return this.$store.state.sendForm.inputDataOfUser.phone
            },

            set(value) {
                this.updatePhone(value)
                // this.$store.commit('updatePhone', value)
            }
        },

        select: {
            // ...mapState(['sendForm.inputDataOfUser.select']),

            get() {
                return this.$store.state.sendForm.inputDataOfUser.select
            },
            set(value) {
                this.updateSelect(value)
                // this.$store.commit('updateSelect', value)
            }
        },

        communicate: {
            // ...mapState(['sendForm.inputDataOfUser.communicate']),

            get() {
                return this.$store.state.sendForm.inputDataOfUser.communicate
            },
            set(value) {
                this.updateCommunicate(value)
                // this.$store.commit('updateCommunicate', value)
            }
        },

        problem: {
            // ...mapState(['sendForm.inputDataOfUser.problem']),

            get() {
                return this.$store.state.sendForm.inputDataOfUser.problem
            },
            set(value) {
                this.updateProblem(value)
                // this.$store.commit('updateProblem', value)
            }
        },
    },

    methods: {
        ...mapMutations(['updateName', 'updatePhone', 'updateEmail', 'updateSelect', 'updateCommunicate', 'updateProblem']),
        ...mapActions(['postDataOfUserAsync', 'cleanState']),

        validate() {
            this.$refs.form.validate()
        },

        async sendData() {
            // this.$store.dispatch('postDataOfUserAsync').then(
            this.postDataOfUserAsync()
                .then(
                    (response => {
                            if (response.ok) {
                                this.$router.push({path: '/successful_entry'})
                                this.cleanState();
                            } else {
                                alert("server error " + response.status + ", try later " + JSON.stringify(this.$store.state.sendForm.inputDataOfUser))
                            }
                        }
                    )
                )
                .catch(err => console.log(err))
        }
    },
}
</script>

<style scoped>

.formRecord {
    max-width: 500px;
    margin: auto;
    padding: 1em;
}

body .v-application .accent {
    background-color: white !important;
    border-color: white !important;
}

</style>
