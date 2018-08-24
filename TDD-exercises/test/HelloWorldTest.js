const ola = require('../js/helloWorld')
const {expect} = require('chai')

describe("arquivoHelloWorld",() =>{

  it("deve retornar Hello World", () =>{
    expect(ola()).to.be.eq('Hello World')
  })

})
