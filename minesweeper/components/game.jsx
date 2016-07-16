const React = require('react');
const Minesweeper = require('../minesweeper.js');
const Board = require('./board.jsx');

const Game = React.createClass({
  getInitialState: function() {
    return( {board: new Minesweeper.Board(10, 15)} );
  },

  updateGame: function(tile, altKeyDown) {
    if (altKeyDown) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  },

  restartGame: function() {
    this.setState( {board: new Minesweeper.Board(10, 15)} );
  },

  render: function() {
    if (this.state.board.won()) {
      alert("Yayy, you won!!");
    } else if (this.state.board.lost()) {
      alert("Boohoo, you lost!");
    }

    return(
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        <div className="newGame" onClick={this.restartGame}>New Game</div>
      </div>
    );

  }

});

module.exports = Game;
