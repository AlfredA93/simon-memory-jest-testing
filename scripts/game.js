let game = {
    score: 0,
    currentGame : ["button 1", "button2"],
    playerMoves : ["button 1", "button2"],
    choices : ["button 1", "button2", "button 3", "button 4"],
}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
}

module.exports = { game, newGame };