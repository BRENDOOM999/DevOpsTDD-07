
const data = [
   {id: 1, nome: "Cripto", idade: 5, sexo:'F', especie:"calopsita"},
   {id: 2, nome: "Lipe", idade: 8, sexo:'M', especie:"cachorro"}
];

function listar(){
    return data;
}

function listaPorId(id){
     const pet = data.find(pet => pet.id === id)
     if(!pet){
         return {
            erro:"True",
            mensagem: "Pet nao encontrado!"
         }
     }
     return pet;
}

function cadastrar(pet) {
    pet.id = data.length+1;
     data.push(pet);
     return pet;
}

module.exports = {
    listar,
    listaPorId,
    cadastrar,
}