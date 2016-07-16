const React = require('react');

const Autocomplete = React.createClass({
  getInitialState: function () {
    return { initialName: "" };
  },

  filterNames: function (event) {
    this.setState({ initialName: event.target.value });
  },

  clickedName: function (event) {
    this.setState({ initialName: event.target.id });
  },

  render: function () {
    let matchingNames = this.props.names.filter(name => {
        return( name.includes(this.state.initialName) );
    });

    return (
      <aside id="autocomplete">
        <h1>Autocomplete Widget</h1>
        <input type="text" onChange={this.filterNames} value={this.state.initialName}></input>
        <ul>
          {
            matchingNames.map(name => {
              return (<li key={name} id={name} onClick={this.clickedName}>{name}</li>);
            })
          }
        </ul>
      </aside>
    );
  }
});

module.exports = Autocomplete;
