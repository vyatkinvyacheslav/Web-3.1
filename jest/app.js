function sortByName(inputArray) {
  inputArray.sort(function (a, b) {
    var nameA = a.toLowerCase(),
      nameB = b.toLowerCase();
    if (nameA < nameB)
      //сортируем названия по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // нет сортировки
  });
  return inputArray;
}

exports.sortByName = sortByName;

const config = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};

module.exports = config;

"coverageThreshold": {
        "branches": 100,
        "functions": 100,
        "lines": 100
  }
