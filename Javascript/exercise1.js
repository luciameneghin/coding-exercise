/*
Esercizio 1: Validatore di Parentesi
Descrizione:
Scrivi una funzione che verifica se le parentesi in una stringa sono bilanciate. La funzione deve gestire parentesi tonde (), quadre [] e graffe {}.
Input: "([{}])"
Output: true
Input: "([)]"
Output: false
*/

function parenthesisValidator(string) {
  let stack = [];
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      let indexClose = close.indexOf(char);
      let expectedOpen = open[indexClose];

      if (stack.length === 0 || stack[stack.length - 1] !== expectedOpen) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(parenthesisValidator("([{}])")); //true
console.log(parenthesisValidator("([)]")); //false
