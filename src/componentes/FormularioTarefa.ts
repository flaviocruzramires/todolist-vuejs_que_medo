import Vue from 'vue';

import TarefaService from "../service/TarefaService";

export default Vue.component('form-tarefa', {
    data: function () {
      return {
        // task: {}
        datepicker: false,
        carregando: false
      }
    },    
    template:
    /*html*/
     `
        <form>
            <v-container grid-list-lg >
                <h2>{{ indiceEdicao != null ?  'Editar Tarefa':'Nova Tarefa'}}</h2>
                <v-layout column wrap >
                    <v-flex >
                        <v-text-field 
                            filled 
                            name='titulo'
                            v-validate="'required'"
                            color='red'
                            type="text"
                            label="Título da tarefa"
                            v-model="task.titulo"
                            :error-messages="errors.collect('titulo')"
                            >
                        </v-text-field>
                    </v-flex>
                    <v-flex >
                        <v-text-field 
                            type="text" 
                            label="Descrição da tarefa" 
                            v-model="task.descricao"
                            name='descricao'
                            v-validate="'required'"
                            :error-messages="errors.collect('descricao')"
                            >
                        </v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-menu
                            v-model="datepicker"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <template v-slot:activator="{on}">
                                <v-text-field 
                                    type="date" 
                                    label="Prazo da tarefa" 
                                    v-model="task.prazo"
                                    name='prazo'
                                    v-validate="'required'"
                                    :error-messages="errors.collect('prazo')"
                                    v-on="on"
                                >
                                </v-text-field>
                            </template>
                            <v-date-picker
                                v-model="task.prazo"
                                @input="datepicker = false"
                            >
                            
                            </v-date-picker>
                        </v-menu>
                    </v-flex>
                </v-layout>
                <v-layout justify-end >
                    <v-btn text color="success" type="button" @click="salvar">Salvar</v-btn>
                    <v-btn text color="error" type="button" @click="cancelar">Cancelar</v-btn>
                </v-layout>
                </v-container>
        </form>
        
    `,
    methods : {
        async salvar(){
           if( await this.$validator.validate() ) {
                this.$store.dispatch('tarefas/salvarTarefa', this.task);
                this.$store.dispatch('alertas/showSnackbar',{
                    message: 'Tarefa salva com sucessoasdfasdfs  dfsdfsdfsdfs  dfsdfsdfsdfsdfsd  fsdfdfsfsd',
                    color: 'success',
                    icon: 'mdi-magnify'
                });
                this.cancelar();
           }
        },
        cancelar(){
            this.task = {};
            this.$store.dispatch('tarefas/limparEdicao');
            this.$emit('voltar');
        }
    },
    computed: {
        indiceEdicao(){
            return this.$store.state.indiceEdicao;
        },
        task: {
            get(){
                return  this.$store.getters['tarefas/getTarefaEdicao'];
            },
            set(){

            }
        }
    }
  })
