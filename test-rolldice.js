
import { rollDice } from './rolldice.js';

function testRollDice() {

    // create a source list for testing
    const source = ['A','B','C','D','E'];

    // define the number of dice rolls
    const LIMIT = 100;

    // create an array filled with dice rolls
    let arr = Array.from({length: LIMIT}, () => rollDice( source ));

    // log the generated dice rolls
    console.log(arr);

    // count the occurences of each roll result
    let occurrences = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

    // log a summary of the occurences
    console.log(occurrences);
}

// call test function for rollDice
testRollDice();
