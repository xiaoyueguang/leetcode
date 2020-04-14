<?php
class Solution {
  /**
   * @param Integer $n
   * @return Integer[][]
   */
  function generateMatrix($n) {
    if ($n === 0) {
      return [];
    }
    $length = $n * $n;

    $result = [];
    $walkMatrix = [];

    for ($i = 0; $i < $n; $i++) {
      for ($j = 0; $j < $n; $j++) {
        if ($j === 0) {
          array_push($result, [0]);
          array_push($walkMatrix, [true]);
        } else {
          array_push($result[$i], 0);
          array_push($walkMatrix[$i], true);
        }
      }
    }

    $dir = 0;
    $points = [0, 0];
    $i = 1;
    while ($i < $length + 1) {
      $result[$points[0]][$points[1]] = $i;
      $i++;
      $walkMatrix[$points[0]][$points[1]] = false;
      switch ($dir) {
        case 0:
          if ($points[1] === $n - 1 || !$walkMatrix[$points[0]][$points[1] + 1]) {
            $dir++;
            $points[0]++;
          } else {
            $points[1]++;
          }
          break;
        case 1:
          if ($points[0] === $n - 1 || !$walkMatrix[$points[0] + 1][$points[1]]) {
            $dir++;
            $points[1]--;
          } else {
            $points[0]++;
          }
          break;
        case 2:
          if ($points[1] === 0 || !$walkMatrix[$points[0]][$points[1] - 1]) {
            $dir++;
            $points[0]--;
          } else {
            $points[1]--;
          }
          break;
        case 3:
          if ($points[0] === 0 || !$walkMatrix[$points[0] - 1][$points[1]]) {
            $dir = 0;
            $points[1]++;
          } else {
            $points[0]--;
          }
          break;
      }
    }
    return $result;
  }
}

$s = new Solution();

$result = $s->generateMatrix(2);

var_dump($result);
