export default class FormatterUtil {
    static formatarData( data: string ){
        let convertido = new Date( data );
        
        let dia = convertido.getDate()+1;
        let mes = convertido.getMonth() + 1;
        let ano = convertido.getFullYear();
        let retorno = `${dia}/${mes}/${ano}`
        //console.log(convertido, retorno);

        return retorno;
    }
}