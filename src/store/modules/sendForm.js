export default {
    // strict: true,
    // namespace: true,
    state: {
        inputDataOfUser: {
            name: '',
            email: '',
            phone: '',
            select: null,
            communicate: '',
            problem: '',
        },
    },
    mutations: {
        updateName (state, name){
            state.inputDataOfUser.name = name
        },

        updateEmail (state, email){
            state.inputDataOfUser.email = email
        },

        updatePhone (state, phone){
            state.inputDataOfUser.phone = phone
        },

        updateSelect (state, select){
            state.inputDataOfUser.select = select
        },

        updateCommunicate (state, communicate){
            state.inputDataOfUser.communicate = communicate
        },

        updateProblem (state, problem){
            state.inputDataOfUser.problem = problem
        },


        cleanState(state) {
            state.inputDataOfUser = {
                name: '',
                email: '',
                phone: '',
                select: null,
                communicate: '',
                problem: '',
            }
        },
    },
    actions: {
        async postDataOfUserAsync({state}) {
            // запрос на сервак поменять адрес
            return  await fetch('https://atarasov.ru/api/posts/?access_token=mycSH1GDCTr2daqnxeEdWvde1X5QQ1', {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                method: 'POST',
                body: JSON.stringify(state.inputDataOfUser)
            });
        },
    },
    getters: {
    },
    modules: {
    }
}
