/**
 * @jest-environment jsdom
 */

const { game, newGame } = require("../game");

beforeAll(() => {
    // This code is the same for all loading all html documents in the DOM
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct key", () => {
    test("Score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains the corrects ids", () => {
        expect(game.choices).toEqual(["button 1", "button2", "button 3", "button 4"])
    });

});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        newGame();
    });
    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should set currentGame to empty arrays", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should set playerMoves to empty arrays", () => {
        expect(game.playerMoves.length).toBe(0);
    });
});

