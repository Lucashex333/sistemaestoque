// produtos.js
// ----------------------------------------------------
// Banco local de produtos para o sistema de leitura
// ----------------------------------------------------
// Como usar:
// 1) Cada chave do objeto é o CÓDIGO do produto (igual ao código de barras).
// 2) O campo mais importante é "descricao", pois é ele que aparece na tela,
//    no relatório e no CSV.
// 3) Você pode adicionar quantos campos quiser (referencia, tamanho, cor, etc.).
//
// Exemplo de integração no index.html:
//   - <script src="produtos.js"></script>
//   - function buscarProdutoLocal(codigo) {
//       return window.PRODUTOS_DB?.[codigo] || null;
//     }
//
// O sistema vai chamar buscarProdutoLocal(codigo) a cada leitura.

window.PRODUTOS_DB = {

  "395283": {
    codigo: "395283",
    descricao: "Camiseta Von Dutch USA Los Angeles Marinho Tamanho G Referencia VD109",
    referencia: "VD109",
    marca: "Von Dutch",
    categoria: "Camiseta",
    tamanho: "G",
    cor: "Marinho"
  },

  
  "7891234567890": {
    codigo: "7891234567890",
    descricao: "Tênis Puma Smash V2 Branco Tamanho 40",
    referencia: "PM123",
    marca: "Puma",
    categoria: "Calçado",
    tamanho: "40",
    cor: "Branco"
  },

  "303129": {
  codigo: "303129",
  descricao: "Bermuda Von Dutch Mini Logo Preto Tamanho G Referência VD7002",
  referencia: "VD7002",
  marca: "Von Dutch",
  categoria: "Bermuda",
  linha: "Mini Logo",
  tamanho: "G",
  cor: "Preto"
},

  "123456": {
    codigo: "123456",
    descricao: "Boné Trucker Preto Aba Curva Tamanho Único",
    referencia: "BN001",
    marca: "Generic",
    categoria: "Acessório",
    tamanho: "Único",
    cor: "Preto"
  }

  // ==================================================
  // PARA ADICIONAR MAIS PRODUTOS:
  // - copie um bloco acima e ajuste o código + dados
  // - lembre de separar por vírgula entre os itens
  // ==================================================
};
