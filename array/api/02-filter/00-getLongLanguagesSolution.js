/**
 * CONSTANTS
 */
const languagesList = ["Java", "C++", "JavaScript", "C#", "TypeScript"];

/**
 * Given 'wordsList' array, define function 'extractLongWords' to return an array only with strings with length equal or greater then 5
 *
 * expected: ['JavaScript', 'TypeScript']
 */
const getLonglasnguages = (languages) => {
  const longLanguages = languages.filter((language) => {
    const isLongLanguage = language.length >= 5;
    return isLongLanguage;
  });

  return longLanguages;
};
