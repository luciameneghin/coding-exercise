<?php
function parenthesisValidator($string)
{
  $stack = [];
  $open = ['(', '[', '{'];
  $close = [')', ']', '}'];

  for ($i = 0; $i < strlen($string); $i++) {      // strlen() invece di .length
    $char = $string[$i];

    if (in_array($char, $open)) {               // in_array() invece di includes()
      array_push($stack, $char);
    } else if (in_array($char, $close)) {
      $indexClose = array_search($char, $close);  // array_search() invece di indexOf()
      $expectedOpen = $open[$indexClose];

      if (count($stack) === 0 || $stack[count($stack) - 1] !== $expectedOpen) {
        return false;
      }
      array_pop($stack);
    }
  }
  return count($stack) === 0;
}

echo parenthesisValidator("([{}])") ? "true" : "false";  // echo invece di console.log
echo "\n";  // A capo
echo parenthesisValidator("([)]") ? "true" : "false";
