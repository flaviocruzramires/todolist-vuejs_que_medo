import Tarefa from "../model/Tarefa";

export default class TarefaService{
    static LISTA_TAREFAS = 'tarefas';
    static buscarTodos(): Array<Tarefa>{

        let tarefas = JSON.parse( localStorage.getItem( TarefaService.LISTA_TAREFAS)  );

        if(!tarefas){
            return []
        }
        else{
            return tarefas;
        }


    }

    static cadastrar( tarefa: Tarefa ){
        let cadastrados = TarefaService.buscarTodos();
        cadastrados.push( tarefa );
        TarefaService.atualizarLista( cadastrados );
    }

    static atualizarLista( listaTarefas: Array<Tarefa> ){
        localStorage.setItem( TarefaService.LISTA_TAREFAS , JSON.stringify( listaTarefas ) );
    }

}