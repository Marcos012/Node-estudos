const maiorTexto = (texto) => {
  if (Array.isArray(texto) && texto.length != 0) {
  return 'Erroo'
  }

  for(let i = 0; i < texto.length; i++){
    if (typeof texto[i] === 'number'){
      return 'Erroo'
    }
  }
}

module.exports = maiorTexto
