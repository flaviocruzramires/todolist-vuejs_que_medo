import Vue from 'vue';
import TarefaService from '../service/TarefaService';
import FormatterUril from '../util/FormatterUtil';
import Vuetify from 'vuetify';

export default Vue.component('tabela-tarefas', {
    data: function () {
        return {
            FormatterUril: FormatterUril,
        }
    },
    template:
        /* html */
        `
        <div>
            
            <v-simple-table>
                <thead>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Prazo</th>
                    <th>Finalizado</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <tr v-for="( tarefa, i ) in tasks">
                        <td>{{tarefa.titulo}}</td>
                        <td>{{tarefa.descricao}}</td>
                        <td>{{ FormatterUril.formatarData( tarefa.prazo )}}</td>
                        
                        <td>{{tarefa.finalizado}} --- {{( tarefa.finalizado) ? 'Não' : 'Sim'}}</td>
                        <td>
                            <input type="checkbox" true-value="true" false-value="false" v-model="tarefa.finalizado" @change="marcarTarefa()">
                            Sim: <input type="radio" v-model="tarefa.finalizado" value="true">
                            Não: <input type="radio" v-model="tarefa.finalizado" value="false">
                        </td>
                        <td>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn  v-on="on" @click="visualisar( i )">
                                            <v-icon>mdi-eye</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Visualisar Tarefa</span>
                                </v-tooltip>                            
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn  v-on="on" @click="editar( i )">
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Editar Tarefa</span>
                                </v-tooltip>                            
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn  v-on="on" @click="remover( i )">
                                         <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Delete Tarefa</span>
                                </v-tooltip>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </div>
    `,
    methods: {
        marcarTarefa() {
            TarefaService.atualizarLista(this.tarefas);
        },
        visualisar(i: number) {
            this.$router.push({
                name: 'detalhe', params: {
                    tarefaSelecionada: this.tasks[i]
                }
            });
        },
        editar(i: number) {
            this.$store.dispatch("tarefas/editar", i);
            this.$emit("editar");
        },
        remover(i: number) {
            if (confirm('Tem certeza que deseja remover?')) {
                this.$store.dispatch('tarefas/remover', i);
            }

        },

    },
    mounted() {
        this.$store.dispatch("tarefas/carregarTarefas");
    },
    computed: {
        tasks: function () { return this.$store.state.tarefas.tarefas }
    }

});
