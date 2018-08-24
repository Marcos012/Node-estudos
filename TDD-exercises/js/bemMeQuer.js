const bemMeQuer = (num) =>{
if (typeof num != 'number') {
  return "Errooo"
}
 if (num %2 === 0){
  return "Bem-me-Quer"
} else{
  return "Mal-me-Quer"
}
}

module.exports = bemMeQuer
