const sentence = "Saya sangat senang mengerjakan soal algoritma";

function longest(sentence) {
    const words = sentence.split(' '); // Memisahkan kata berdasarkan spasi
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord + ': ' + longestWord.length + ' character';
}

console.log("Kata terpanjang adalah",longest(sentence));