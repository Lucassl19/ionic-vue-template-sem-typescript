import { createStore } from 'vuex'


export default createStore({
    state: {
        msg: 'Funcionou'
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getMsg(state) {
            return state.msg
        }
    },
    modules: {

    }
})