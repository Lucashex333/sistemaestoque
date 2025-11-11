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
// REGATA MINI LOGO PEITO • VDR002 • MILITAR • M
"342159": {
  codigo: "342159",
  descricao: "Regata Von Dutch Mini Logo Peito Militar Tamanho M Referência VDR002",
  referencia: "VDR002",
  marca: "Von Dutch",
  categoria: "Regata",
  linha: "Mini Logo Peito",
  tamanho: "M",
  cor: "Militar"
},

// V.6 CAMISETA LOGO ORANGE • VDV26006 • PRETO • G
"437246": {
  codigo: "437246",
  descricao: "Camiseta Von Dutch V.6 Logo Orange Preto Tamanho G Referência VDV26006",
  referencia: "VDV26006",
  marca: "Von Dutch",
  categoria: "Camiseta",
  linha: "V.6 Logo Orange",
  tamanho: "G",
  cor: "Preto"
},

// V.6 CAMISETA LOGO ORANGE • VDV26006 • PRETO • M
"437245": {
  codigo: "437245",
  descricao: "Camiseta Von Dutch V.6 Logo Orange Preto Tamanho M Referência VDV26006",
  referencia: "VDV26006",
  marca: "Von Dutch",
  categoria: "Camiseta",
  linha: "V.6 Logo Orange",
  tamanho: "M",
  cor: "Preto"
},

// I.4 CAMISETA LOGO ML • VD0117 • BRANCO • G
"359626": {
  codigo: "359626",
  descricao: "Camiseta Von Dutch I.4 Logo Manga Longa Branco Tamanho G Referência VD0117",
  referencia: "VD0117",
  marca: "Von Dutch",
  categoria: "Camiseta",
  linha: "I.4 Logo ML",
  tamanho: "G",
  cor: "Branco"
},

// CAMISETA VON DUTCH LOGO SIGNATURE • VD1001 • BRANCO • G
"240495": {
  codigo: "240495",
  descricao: "Camiseta Von Dutch Logo Signature Branco Tamanho G Referência VD1001",
  referencia: "VD1001",
  marca: "Von Dutch",
  categoria: "Camiseta",
  linha: "Logo Signature",
  tamanho: "G",
  cor: "Branco"
},

// CAMISETA VON DUTCH LOGO SIGNATURE • VD1001 • BRANCO • P
"240435": {
  codigo: "240435",
  descricao: "Camiseta Von Dutch Logo Signature Branco Tamanho P Referência VD1001",
  referencia: "VD1001",
  marca: "Von Dutch",
  categoria: "Camiseta",
  linha: "Logo Signature",
  tamanho: "P",
  cor: "Branco"
},

// REGATA MINI LOGO PEITO • VDR002 • PRETO • P
"308076": {
  codigo: "308076",
  descricao: "Regata Von Dutch Mini Logo Peito Preto Tamanho P Referência VDR002",
  referencia: "VDR002",
  marca: "Von Dutch",
  categoria: "Regata",
  linha: "Mini Logo Peito",
  tamanho: "P",
  cor: "Preto"
},

// REGATA LOGO • VDR001 • PRETO • M • (preço antigo R$49,99)
"303095": {
  codigo: "303095",
  descricao: "Regata Von Dutch Logo Preto Tamanho M Referência VDR001",
  referencia: "VDR001",
  marca: "Von Dutch",
  categoria: "Regata",
  linha: "Logo",
  tamanho: "M",
  cor: "Preto"
},

// REGATA LOGO • VDR001 • PRETO • M • (preço R$59,99)
"303096": {
  codigo: "303096",
  descricao: "Regata Von Dutch Logo Preto Tamanho M Referência VDR001",
  referencia: "VDR001",
  marca: "Von Dutch",
  categoria: "Regata",
  linha: "Logo",
  tamanho: "M",
  cor: "Preto"
},

// REGATA MINI LOGO PEITO • VDR002 • BRANCO • G
"308074": {
  codigo: "308074",
  descricao: "Regata Von Dutch Mini Logo Peito Branco Tamanho G Referência VDR002",
  referencia: "VDR002",
  marca: "Von Dutch",
  categoria: "Regata",
  linha: "Mini Logo Peito",
  tamanho: "G",
  cor: "Branco"
},
  // REGATA MINI LOGO PEITO • VDR002 • MILITAR • M
"347159": {
  codigo: "347159",
  descricao: "Regata Von Dutch Mini Logo Peito Militar Tamanho M Referência VDR002",
  referencia: "VDR002",
  marca: "Von Dutch",
  categoria: "Regata",
  linha: "Mini Logo Peito",
  tamanho: "M",
  cor: "Militar"
},

// I.4 CAMISETA LOGO ML • VD0117 • BRANCO • G
"359626": {
  codigo: "359626",
  descricao: "Camiseta Von Dutch I.4 Logo Manga Longa Branco Tamanho G Referência VD0117",
  referencia: "VD0117",
  marca: "Von Dutch",
  categoria: "Camiseta",
  linha: "I.4 Logo ML",
  tamanho: "G",
  cor: "Branco"
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



