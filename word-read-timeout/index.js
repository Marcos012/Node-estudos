let word = "Palavra"
readWord = (callback) => {
  setTimeout(() => {
    callback();
  }, 3000)
}

printWord = () => {
  console.log(word);
}

readWord(printWord);

console.log('Olá');