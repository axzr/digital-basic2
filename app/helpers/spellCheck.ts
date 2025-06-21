import { validWords } from "./wordlist";

export const spellCheck = (
  text: string,
  callback: (a: number, b: number) => void
) => {
  const words = text.split(/\s+/);

  words.forEach((word) => {
    if (!isDictionaryWord(word)) {
      // if this isn't a valid word, then let the callback know where it is in the text
      // this is slightly clumsy atm as it will only find the first occurrence of the word
      // also, it's matching previous partials
      // @@@@ Fix this
      const start = text.indexOf(word);
      const end = start + word.length;
      callback(start, end);
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
