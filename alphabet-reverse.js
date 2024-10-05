const word = "NEGIE1";
function reverseAlphabet(str) {
    const alphabets = str.match(/[a-zA-Z]/g).reverse().join('');
    const number = str.match(/\d/g).join('');
    return alphabets + number;
}

console.log("Hasil reverse dari ",word," adalah", reverseAlphabet(word));
