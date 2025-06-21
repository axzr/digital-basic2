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
  // for testing purposes, just return a random boolean

  return Math.random() < 0.5;
};
