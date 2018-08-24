const bemMeQuer = require('../js/bemMeQuer')
const {expect} = require('chai')

describe("bemMeQuer",() =>{

  it("funcao sem argumento deve retornar erro", () =>{
    expect(bemMeQuer()).to.be.eq('Errooo')
  })

  it("deve retornar Bem-me-Quer quando o numero de petalas for par",() => {
    expect(bemMeQuer(4)).to.be.eq('Bem-me-Quer')
  })

  it("deve retornar Mal-me-Quer quando o numero de petalas for impar",() => {
    expect(bemMeQuer(5)).to.be.eq('Mal-me-Quer')
  })

  it("Nao pode receber uma string",() => {
    expect(bemMeQuer('suygdya')).to.be.eq('Errooo')
  })

})
