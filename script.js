const dictionary = {
    "hallo": "salom",
    "buch": "kitob",
    "mond": "oy",
    "jahr": "yil",
    "fluss": "daryo",
    "stadt": "shahar",
    "programm": "dastur",
    "computer": "kompyuter",
    "schule": "maktab",
    "lehrer": "o'qituvchi"
};

const searchInput = document.getElementById('search');
const wordList = document.getElementById('word-list');

function displayWords(words) {
    wordList.innerHTML = '';
    for (const word in words) {
        const li = document.createElement('li');
        li.textContent = `${word} - ${words[word]}`;
        wordList.appendChild(li);
    }
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = {};
    for (const word in dictionary) {
        if (word.includes(query)) {
            filtered[word] = dictionary[word];
        }
    }
    displayWords(filtered);
});

// initial display
displayWords(dictionary);