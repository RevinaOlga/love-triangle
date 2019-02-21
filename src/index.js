/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var sum = 0;
    for (var i = 0; i < preferences.length; i++) {
      for (var j = 0; j < preferences.length; j++) {
        for (var k = 0; k < preferences.length; k++) {
          if (preferences[i] == j + 1 && preferences[j] == k + 1 && preferences[k] == i + 1) {
            sum++;
          }
        }
      }
    }
    return Math.floor(sum / 3);
};
