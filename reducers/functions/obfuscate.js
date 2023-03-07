/*  make a hashmap
key: word
value: (startStringPos, endStringPos)
replace every non-space with a censor

when guessed correctly, replace the characters in that position with the word
*/

function Obfuscate(answer) {
    var startTime = performance.now()

    let index = 0;

    // turn string with html into charmap

    console.log(answer);

    charmap = answer.split('');
    
    while (index < charmap.length) {
      // ignore HTML tags
      if (charmap[index] === '<') {
        while (charmap[index] !== '>') {
          index++;
        }
      }
      else if (charmap[index] === ' ' || charmap[index] === '.' || charmap[index] === '>') {
        index++;
      } else {
        let startIndex = index;
        while (charmap[index] !== '<' && charmap[index] !== ' ' && charmap[index] !== '.' && index !== charmap.length) {
          index++;
        }

        let word = charmap.slice(startIndex, index).join("");
        if (!listOfCommonWords.includes(word)) {
          wordMap = CreateOrUpdateKeyValuePair(wordMap, word, startIndex, index);
          charmap.fill('&#9608;', startIndex, index);
        }
      }
    }
    var endTime = performance.now()
    console.log(`took ${endTime - startTime} milliseconds`)
    console.log(wordMap);
    return { charMap: charmap.join(""), wordMap: wordMap };
  }
  /*DeObfuscate: function (word) {
    if (wordMap.get(word)) {
      wordMap.keys.forEach((element) => {
        charmap.splice(element[0], element[1], word.split(''));
      });
    }
    console.log(charmap.join(""));
    return charmap.join("");
  }*/
export default Obfuscate;

function CreateOrUpdateKeyValuePair(wordMap, word, startIndex, endIndex) {
  let wordKey = wordMap.get(word);
  if (wordKey == null) {
    wordMap.set(word, [[startIndex, endIndex]]);
  } else {
    wordKey.push([startIndex, endIndex]);
  }
  return wordMap;
}