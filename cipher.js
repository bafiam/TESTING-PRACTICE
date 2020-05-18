const caesar = (() => {
  const convertLetterToNumber = (letter) => {
    const results = letter.charCodeAt(0) - 96;

    return results;
  };

  const convertNumberToLetter = (num) => {
    const results = String.fromCharCode(num + 96);

    return results;
  };
  const encrpt = (str, key) => {
    const getNum = convertLetterToNumber(str);
    const getCipher = getNum + key;

    if (getCipher <= 26) {
      return convertNumberToLetter(getCipher);
    }
    const convertCipher = getCipher - 26;
    return convertNumberToLetter(convertCipher);
  };


  const cipher = (word, key) => {
    if (key > 25) {
      key = 0;
    }
    const sentenceSplit = word.split(' ');
    const finalResults = [];
    if (sentenceSplit.length > 0) {
      sentenceSplit.forEach((element) => {
        const results = [];
        const wordStr = element.split('');
        wordStr.forEach((letter) => {
          if (/[a-zA-Z]/.test(letter)) {
            const a = encrpt(letter, key);
            results.push(a);
          } else {
            results.push(letter);
          }
        });
        finalResults.push(results.join(''));
      });
    }
    return finalResults.join(' ');
  };
  return { cipher };
})();

export default caesar;
