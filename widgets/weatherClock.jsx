const React = require('react');

const weatherClock = React.createClass({
  getInitialState: function() {
    return {currentDate: new Date()};
  },

  componentDidMount: function() {
    this.handle = setInterval(this.tick, 1000);
    let that = this;

    navigator.geolocation.getCurrentPosition(
      pos => {
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude;

        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=645c5d39c7603f17e23fcaffcea1a3c1`;
        console.log(url);
        const request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            const resp = request.responseText;
            console.log("Weather data pulled");
            console.log(resp);

            that.weather = JSON.parse(resp).weather[0].description;
            that.tempK = JSON.parse(resp).main.temp;
            that.tempF = Math.round((that.tempK * 9/5) - 459.67);

            console.log(that.weather);
            console.log(that.tempF);

          } else {
            // We reached our target server, but it returned an error
            console.log("Got an error pulling weather data");
          }
        };

        request.onerror = function() {
          // There was a connection error of some sort
          console.log("There was a connection error?");
        };

        request.send();



      }
    );


  },

  componentWillUnmount: function() {
    clearInterval(this.handle);
    this.handle = 0;
  },

  tick: function() {
    this.setState({currentDate: new Date()});
  },

  render: function() {
    return(
      <div>
        <h1>Weather Clock!</h1>
        {this.state.currentDate.toString()}
        <ul>
          <li>Lat: {this.lat}</li>
          <li>Lon: {this.lon}</li>
          <li>Weather: {this.weather}</li>
          <li>Temperature: {this.tempF}</li>
        </ul>
      </div>
    );
  }


});

module.exports = weatherClock;
