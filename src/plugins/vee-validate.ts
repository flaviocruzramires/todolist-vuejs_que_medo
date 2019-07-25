import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate,{
    locale:'ptBr',
    dictionary: {
        ptBr: {
            messages: {
                required: () => 'O campo é obrigatório'
            }
        }
    }
});


/*
Vue.use(VeeValidate, {
    locate: 'ptBr',
    dictionary: {
        ptBr:{
            messages:{
            required:() => 'O campo é obrigatório'
            }    
        }
    }
} );

*/