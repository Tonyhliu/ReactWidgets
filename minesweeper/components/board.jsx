const React = require('react');
const Minesweeper = require('../minesweeper.js');
const Tile = require('./tile.jsx');

const Board = React.createClass({

  render: function() {
    return(
      <div>
          <div class="board">
            {this.props.board.grid.map( (row, i) => {
              return( <div key={i} id={i} className="row">
                {row.map( (tile, j) => {
                  let pos = [i, j];
                  return( <Tile tile={tile} key={pos} updateGame={this.props.updateGame}/> );
                })}
              </div> );
            })}
          </div>
      </div>
    );
  }

});

module.exports = Board;
