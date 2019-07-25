import TarefaService from './../service/TarefaService';
import { Module } from 'Vuex';

const module: Module<any, any> = {
    namespaced: true,
    state: {
        snackbar: {
            message: '',
            color:'',
            show: false,
            icon: ''
        }
    },
    
    mutations:{
        mutationOpenSnackbar(state, payload) {
            state.snackbar.message = payload.message;
            state.snackbar.color = payload.color;
            state.snackbar.show = true;
            state.snackbar.icon = payload.icon;

            
        },
        mutationCloseSnackbar(state) {
            state.snackbar.show = false;
        }

    },
    actions:{
        showSnackbar( context : any, payload  ) {
            context.commit('mutationOpenSnackbar', payload)
        },
        closeSnackbar(context){
            context.commit('mutationCloseSnackbar')
        }

    }


}

export default module