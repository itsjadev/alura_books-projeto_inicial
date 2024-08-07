let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getbuscarLivrosApi();


async function getbuscarLivrosApi() {
    const res = await fetch(endPointApi)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosDesconto)
}