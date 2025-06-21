import { validWords } from "./wordlist";

export const spellCheck = (
  text: string,
  callback: (a: number, b: number) => void
) => {
  const words = text.split(/\s+/);

  // we don't want to check words more than once
  // so use a Set to track unique words
  const uniqueWords = new Set([...words]);

  uniqueWords.forEach((word) => {
    if (!isDictionaryWord(word)) {
      // need to find every instance of the word in the text
      // this is really inefficient, needs to be improved @@@@
      // ideally we want to store the start of each word as we build the list of words - instead of, or perhaps in addition to, the Set
      let search = 0;

      while (search < text.length) {
        const index = text.indexOf(word, search);
        if (index === -1) break; // No more instances found

        // check it's the whole word, not part of another word
        const beforeChar = index > 0 ? text[index - 1] : " ";
        const afterChar =
          index + word.length < text.length ? text[index + word.length] : " ";

        if (/\w/.test(beforeChar) || /\w/.test(afterChar)) {
          search = index + 1; // Skip to next character
          continue; // Skip this instance, it's part of another word
        }

        const start = index;
        const end = start + word.length;
        callback(start, end);
        search = end; // Move search position forward
      }
    }
  });
};

const isDictionaryWord = (word: string): boolean => {
  // binary chop into the dictionary to see if this is a valid word

  let lower = 0;
  let upper = validWords.length - 1;
  let searchWord = word.toLowerCase();

  while (lower <= upper) {
    const mid = Math.floor((lower + upper) / 2);
    const midWord = validWords[mid];

    if (midWord === searchWord) {
      return true; // Found the word
    } else if (midWord < searchWord) {
      lower = mid + 1; // Search in the upper half
    } else {
      upper = mid - 1; // Search in the lower half
    }
  }

  return false; // Word not found
};
