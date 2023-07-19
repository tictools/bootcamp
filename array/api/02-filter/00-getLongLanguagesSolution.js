/**
 * CONSTANTS
 */
const languagesList = ["Java", "C++", "JavaScript", "C#", "TypeScript"];

/**
 * Given 'wordsList' array, define function 'extractLongWords' to return an array only with strings with length equal or greater then 5
 *
 * expected: ['JavaScript', 'TypeScript']
 */
const getLongLanguages = (languages) => {
  const longLanguages = languages.filter((language) => {
    const isLongLanguage = language.length >= 5;
    return isLongLanguage;
  });

  return longLanguages;
};

console.log(
  "🚀 ~ file: 00-getLongLanguagesSolution.js:12 ~ getLongLanguages ~ getLongLanguages:",
  getLongLanguages(languagesList)
);
