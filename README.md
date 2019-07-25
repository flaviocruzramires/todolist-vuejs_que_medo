# 🚀 Welcome to your new awesome project!

This project has been created using **webpack scaffold**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application
```typescrypt
    // metodos
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
```