class Solution {
  fun rotate(matrix: Array<IntArray>): Unit {
    val length: Int = matrix.size
    val middle: double = ceil(length)
    length = length - 1

    for (i in 0..middle) {
      for (j in 0..middle) {
        if (middle * 2 != (length + 1) && middle - 1 == i) {
          continue
        }
        val tmp: Int = matrix[i][j]
        matrix[i][j] = matrix[length - j][i]
        matrix[length - j][i] = matrix[length - i][length - j]
        matrix[length - i][length - j] = matrix[j][length - i]
        matrix[j][length - i] = tmp
      }
    }
  }
}