import Vue from 'vue';

export default Vue.component('not-found',{
    template:
    `
    <div>
        <h1>Ops, página não encontrada</h1>
        <p>
            A página que vc está procurando não existe,
            volte para a página inicial <router-link to="/">aqui</router-link>.
        </p>
    </div>
    `
});