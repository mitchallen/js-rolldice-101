// Author: Mitch Allen
// File: app.js

import { rollDice } from './rolldice.js';

let canvas = document.getElementById("canvas");
const SCREEN_SIZE = 300;
const DIM = 10;
const CELL_SIZE = SCREEN_SIZE / DIM;
const BORDER = 1;
const NEON_PINK = "#FF10F0";
const SOURCE = [ 
    "white",  
    NEON_PINK,
    "#444444",
];
// create an array filled with roll results
const arr = Array.from({ length: DIM * DIM }, () => rollDice( SOURCE ));
console.log(arr);
// draw canvas
let ctx = canvas.getContext('2d');
if (ctx) {
    // draw background
    ctx.clearRect(0, 0, SCREEN_SIZE, SCREEN_SIZE);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, SCREEN_SIZE, SCREEN_SIZE);
    // draw cells
    let cursor = 0;
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            ctx.fillStyle = arr[cursor++];
            ctx.fillRect(
                i * CELL_SIZE + BORDER,
                j * CELL_SIZE + BORDER,
                CELL_SIZE - BORDER * 2,
                CELL_SIZE - BORDER * 2
            );
        }
    }
}