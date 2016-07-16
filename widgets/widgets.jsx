const React = require('react');
const ReactDOM = require('react-dom');
const Tabs = require('./tabs.jsx');
const WeatherClock = require('./weatherClock.jsx');
const Autocomplete = require('./autocomplete.jsx');

const tabContent = [{title: "My Title", content: "body body body"},
                    {title: "My 2nd Title", content: "2nd body body body"},
                    {title: "My 3rd Title", content: "3rd body body body"}];

const ACNames = ["Abbey", "Abe", "Abby", "Ace", "Aliza",
                  "Bob", "Charles", "Dylan",
                  "Evan", "Finn", "Gail", "Henry"];


const Widgets = React.createClass({

  render() {
    return(
      <div>
        <h2>Widgets Header</h2>
        <Autocomplete names={ACNames}/>
        <WeatherClock componentDidMount/>
        <Tabs tabContent={tabContent}/>
      </div>

    );
  }

});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
