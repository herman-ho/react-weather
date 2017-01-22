var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Weather application built with:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">OpenWeatherMap</a>
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
