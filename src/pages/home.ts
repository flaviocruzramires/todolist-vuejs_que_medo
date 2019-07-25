import Vue from 'vue';
import FormularioTarefa from './../componentes/FormularioTarefa';
import TabelaTarefas from './../componentes/TabelaTarefas';

export default Vue.component('home', {
    template:
        /* html */
        `
    <v-container>

        <v-layout row wrap justify-space-between class='my-3'  >
            <h1>{{title}}</h1>        
            <v-btn 
                icon
                color='dark'
                @click="exibirFormulario = !exibirFormulario"
                >
                <v-icon>
                    {{ exibirFormulario ? 'mdi-arrow-left' : 'mdi-plus'}}
                </v-icon>
            </v-btn>
        </v-layout>
            

        <form-tarefa v-if="exibirFormulario"></form-tarefa>
        <tabela-tarefas @editar="exibirFormulario = true" v-else="exibirFormulario"></tabela-tarefas>
    </v-container>
    `,
    data() {
        return {
            title: "Todolist Vuejs",
            exibirFormulario: false
        }
    },
    components: {
        FormularioTarefa,
        TabelaTarefas
    },
    computed: {
        tituloBotao: function () {
            return this.exibirFormulario ? 'Voltar' : 'Nova Tarefa';
        }
    },
    methods: {
        formatarData(data: string) {
            let temp = new Date(data);
            let dia = temp.getDate() + 1;
            let mes = temp.getMonth() + 1;
            let ano = temp.getFullYear();
            let retorno = `${dia}/${mes}/${ano}`
            //console.log(temp, retorno);

            return retorno;

        }
    }
})