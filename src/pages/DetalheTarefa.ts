import Vue from 'vue';

import FormatterUril from '../util/FormatterUtil';

export default Vue.component('detalhe-tarefa',{
    data(){
        return {
            FormatterUril : FormatterUril,
        }
    },
    template:`
    <div>
        <h1>Detalhe Tarefa</h1>
        <h2>Título da tarefa: {{tarefaSelecionada.titulo}}</h2>
        <p>Data Prazo: {{FormatterUril.formatarData( tarefaSelecionada.prazo ) }}</p>
        <p>Descrição: {{tarefaSelecionada.descricao}}</p>
        <p>Situação da tarefa: {{tarefaSelecionada.finalizado == "true" ? "Sim" : 'Não'}}</p>
    </div>
    `,
    props: {
        tarefaSelecionada: {}
    }
});