const React = require('react');
const ReactDOM = require('react-dom');
const Game = require('./components/game.jsx');

const MinesweeperGame = React.createClass({
  render: function() {
    return(
      <div className="container">
        <h1>Minesweeper Game</h1>
        <p>Click to explore a tile.</p>
        <p>Alt + click to flag a tile.</p>
        <Game/>

      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<MinesweeperGame/>, document.getElementById('main'));
});
