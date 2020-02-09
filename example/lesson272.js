let textarea = document.getElementById("sandbox"),
    text = textarea.value,
    dictionary = [];

function addWord(dictionary, word) {
    if (!(word in dictionary)) {
        dictionary[word]=0;
    }
    dictionary[word] +=1;
}

text = text.toLowerCase();
text = text.replace(",", "");
text = text.replace(".", "");
text = text.replace("!", "");
text = text.replace("-", "");
text = text.split(" ")

text.forEach(element => {
    addWord(dictionary,element);
});

dictionary.sort(function(first, second) {
    return second[1] - first[1];
};

console.log(dictionary);