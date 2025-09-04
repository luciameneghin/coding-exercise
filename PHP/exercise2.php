<?php
function contLetters($str)
{
  $count = [];
  $arrayLettere = str_split($str);

  for ($i = 0; $i < count($arrayLettere); $i++) {
    $lettera = $arrayLettere[$i];
    if (isset($count[$lettera])) {
      $count[$lettera] = $count[$lettera] + 1;
    } else {
      $count[$lettera] = 1;
    }
  }
  return $count;
}

function anagrams($str1, $str2)
{
  $str1Pulita = strtolower(preg_replace('/[^a-z]/i', '', $str1));
  $str2Pulita = strtolower(preg_replace('/[^a-z]/i', '', $str2));

  if (strlen($str1Pulita) !== strlen($str2Pulita)) {
    return false;
  }


  $count1 = contLetters($str1Pulita);
  $count2 = contLetters($str2Pulita);

  foreach ($count1 as $lettera => $numero) {
    if (!isset($count2[$lettera]) || $count1[$lettera] !== $count2[$lettera]) {
      return false;
    }
  }

  return true;
}

echo anagrams('ciao', 'ioca') ? "true" : "false";
echo "\n";
echo anagrams('listen', 'silent') ? "true" : "false";
echo "\n";
echo anagrams('hello', 'world') ? "true" : "false";
