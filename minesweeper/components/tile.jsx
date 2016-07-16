const React = require('react');
const Minesweeper = require('../minesweeper.js');

const Tile = React.createClass({

  handleClick: function(event) {
    event.preventDefault();
    console.log(event.altKey);
    this.props.updateGame(this.props.tile, event.altKey);
  },

  render: function() {
    let tState = "";

    if (this.props.tile.flagged) {
      tState = "🚩";
    } else if (this.props.tile.bombed && this.props.tile.explored) {
      tState = "💣";
      console.log("You lose");
    } else if (this.props.tile.explored) {
      tState = this.props.tile.adjacentBombCount();
    }

    return(<div className="tile" onClick={this.handleClick}>{tState}</div>);
  }
});

module.exports = Tile;
