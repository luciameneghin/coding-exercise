/*Esercizio 2: Anagrammi
Traccia dell'Esercizio
Descrizione:
Scrivi una funzione che determina se due stringhe sono anagrammi. Due stringhe sono anagrammi se contengono esattamente le stesse lettere con la stessa frequenza, ignorando spazi, punteggiatura e maiuscole/minuscole.
Esempi:

Input: "listen", "silent" → Output: true
Input: "hello", "world" → Output: false
Input: "A gentleman", "Elegant man" → Output: true
Input: "conversation", "voices rant on" → Output: true
Input: "abc", "def" → Output: false
*/

function anagrams(str1, str2) {
  let str1Pulita = str1.replace(/[^a-z]/gi, '').toLowerCase();
  let str2Pulita = str2.replace(/[^a-z]/gi, '').toLowerCase();

  if (str1Pulita.length !== str2Pulita.length) {
    return false;
  }

  function countLetters(string) {
    let count = {};
    let arrayLettere = string.split('');

    for (let i = 0; i < arrayLettere.length; i++) {
      let lettera = arrayLettere[i];
      if (count[lettera]) {
        count[lettera] = count[lettera] + 1;
      } else {
        count[lettera] = 1;
      }
    }
    return count;
  }

  let count1 = countLetters(str1Pulita);
  let count2 = countLetters(str2Pulita);

  for (let lettera in count1) {
    if (count1[lettera] !== count2[lettera]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams('ciao', 'ioca'));  // true
console.log(anagrams('listen', 'silent'));  // true
console.log(anagrams('hello', 'world'));  // false