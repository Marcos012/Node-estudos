const maiorTexto = require('../js/maiorTexto')
const {expect} = require ('chai')

describe("maiorTexto",() => {

  it ("se array for vazio deve retornar erro",() =>{
    expect(maiorTexto([])).to.be.eq('Erroo')
  })

  it("array não pode receber numeros", () =>{
    expect(maiorTexto([1234])).to.be.eq('Erroo')
  })

  it("Funcao deve retornar a maior palavra",() =>{
    expect(maiorTexto(['Camila', 'Marcossssss', 'syuagsayugsaysgua'])).to.be.eq('syuagsayugsaysgua')
  })
})
