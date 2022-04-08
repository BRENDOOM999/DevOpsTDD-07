const pets = require("./pets");

describe("Testes da funcionalidade listar",
() => {
    test("Listar todos os pets", () => {
        expect(pets.listar()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    nome:expect.any(String),
                    idade:expect.any(Number),
                    sexo:expect.any(String),
                    especie:expect.any(String)
                })
            ])
        )
    });

    it("Listar pet por ID", () => {
        expect(pets.listaPorId(2)).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome:expect.any(String),
                idade:expect.any(Number),
                sexo:expect.any(String),
                especie:expect.any(String)
            })
        )
    });
    it("Listar pet por ID - Pet nao emcpmtado", () => {
       expect(pets.listaPorId(999999)).toEqual(
           expect.objectContaining({
               erro:"True",
               mensagem: "Pet nao encontrado!"
           })
       )
    });
});

describe("Cadastro de pets", () => {
    it("Cadastrar novo pet", () => {
        expect(pets.cadastrar ({
            nome:'Vitor',
            idade: 10,
            sexo: "M",
            especie:"Gato",
        })).toEqual(expect.objectContaining({
                id: expect.any(Number),
                nome:expect.any(String),
                idade:expect.any(Number),
                sexo:expect.any(String),
                especie:expect.any(String)
        }))
    })
})