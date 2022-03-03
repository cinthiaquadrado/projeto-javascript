console.log(`Trabalhando com listas`);

//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista

console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); //retira um elemento da posição 2
console.log(listaDeDestinos);

console.log(listaDeDestinos[2]);