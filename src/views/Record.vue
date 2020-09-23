<template>
        <section>
            <div class="py-12"></div>

            <v-container>
                <h2 class="hidden-md-and-up display-1 font-weight-bold mb-3 text-uppercase text-center">Запись на консультацию</h2>
                <h2 class="hidden-sm-and-down display-2 font-weight-bold mb-3 text-uppercase text-center">Запись на консультацию</h2>


                <v-responsive
                        class="mx-auto mb-12"
                        width="50%"
                >
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>
                <v-responsive
                        class="mx-auto title font-weight-light mb-8 text-justify"
                        max-width="720"
                >
                    Консультации проходят лично и онлайн. Мы можем встретиться в уютном кабинете недалеко от метро ..Пушкинская..(поставить карту?)
                    или созвониться через интернет. Для продуктивной онлайн консультации вам желательно найти тихое комфортное место,
                    где вас никто не будет отвлекать, чтобы мы могли погрузиться в психотерапию.
                    Для того, чтобы записаться, заполните форму. После обработки заявки с вами свяжутся для подтверждения и обсуждения деталей.
                </v-responsive>

                <v-responsive
                        class="mx-auto title font-weight-light mb-8 text-justify"
                        max-width="720"
                >
                    Для того, чтобы записаться, заполните форму. После обработки заявки с вами свяжутся для подтверждения и обсуждения деталей.
                </v-responsive>
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
                                    :counter="100"
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

                            <v-btn  type="submit"
                                    :disabled="!valid"
                                    color="success"
                                    class="mr-4"
                                    @click="validate"
                            >
                                Записаться
                            </v-btn>

                        </v-form>

                    </v-responsive>

                </v-theme-provider>
            </v-container>

            <div class="py-12"></div>
        </section>

</template>

<script>
    export default {
        name: "Record",
        data: () => ({
            valid: true,
            lazy: true,
            name: '',
            nameRules: [
                v => !!v || 'Обязательное поле',
                v => (v && v.length <= 30) || 'Слишком длинное имя',
            ],
            email: '',
            emailRules: [
                v => !!v || 'По этому адресу вы получите подтверждение о заявке',
                v => /.+@.+\..+/.test(v) || 'Введите верный адрес',
            ],
            phone: '',
            phoneRules:[
                v => !!v || 'По этому номеру проходит подтверждение о заявке',
                v => /[0-9]{10,}/.test(v) || 'Введите верный телефон',
            ],
            select: null,
            items: [
                'Очно',
                'Online',
            ],
            communicate: '',
            communicateRules: [
                v => (v.length <= 50) || 'Слишком длинное сообщение',
            ],
            problem: '',
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

        methods: {
            validate () {
                this.$refs.form.validate()
            },
            sendData(){
                let dataForm = {
                    username: this.name,
                    email: this.email,
                    formOfConsultation: this.select,
                    wayOfCommunicate: this.communicate,
                    problem: this.problem,
                }

                let res = JSON.stringify(dataForm);
                // this.getRequest();
                alert(res);


                // let response = await fetch('http://localhost:8080/sign_up', {
                //     method: 'POST',
                //
                //     body: JSON.stringify(dataForm)
                // });
                //
                // let result = await response.json();
                // alert(result.message);


            }
        },

    }
</script>

<style scoped>

    .formRecord{
        max-width: 500px;
        margin: auto;
        padding: 1em;
    }


</style>
