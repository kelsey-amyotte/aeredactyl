import {createSlice} from '@reduxjs/toolkit';
import {Obfuscate} from './functions/obfuscate';

const redactedSlice = createSlice({
    name: 'redactedBulbapediaArticle',
    initialState: {
        unredactedText: '<h1>Bronzong</h1><br></br><br></br>Bronzong is a large Pokémon resembling a blue-green bell with two arms coming out of its sides. ' +
        'It has a hollow body and a yoke attached at the top. Its face can be best described as being a "Totem Pole" design; Bronzong has two round, red eyes with' +
        ' blue-green irises and a rectangular mouth with one visible row of square teeth. It also has several darker, rectangular markings on its body.<br></br>' +
        'When angered, Bronzong lets out a warning cry that rings out like the tolling of a bell. It can summon rain clouds, which earned it the nickname "bringer of ' +
        ' plentiful harvests" and led to some referring to it as a deity since ancient times. Bronzong\'s cry is also believed to have the power to open a hole, leading ' +
        'to other worlds. Many scientists believe the Bronzong found in Galar originated from a different region after researching the pattern on its body. Some Bronzong ' + 
        'can sleep up to 2,000 years, which lead to quite the media story, when one was discovered in a construction site.',
        listOfCommonWords: ["is", "a", "the"],
        redactedText: '',
        wordMap: [],
        guesses: [],
        currentGuess: '',
        guessCount: 0
    },
    reducers: {
        redact(state, action) {
            let response = Obfuscate(unredactedText);
            redactedText = response.charMap;
            wordMap = response.wordMap;
        },
        guess(state, action, guess) {
            if (wordMap.get(guess)) {
                wordMap.keys.forEach((element) => {
                  charmap.splice(element[0], element[1], guess.split(''));
                });
              }
              console.log(charmap.join(""));
              return charmap.join("");
        }
    }
})

export const { redact, guess } = redactedSlice.actions;
export default redactedSlice.reducer;