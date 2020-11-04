import React from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';
import { KEY } from '../apis/openweather';
import './App.css';

class App extends React.Component {

	state = { weather: { list: [], city: {} } }; 


	onSearchSubmit = async term => {
		let weatherData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${term}&appid=${KEY}`);
		weatherData = await weatherData.json();
		const dailyWeather = weatherData.list.filter((item) => {
			return item.dt_txt.includes('15:00:00');
		})
		this.setState({ weather: { list: dailyWeather, city: weatherData.city }});
	}


	render() {
		return (
			<div className="ui container">
				<div className="search">
					<SearchBar onSubmit={this.onSearchSubmit} />
				</div>
				<div className="city">
					{this.state.weather.city.name && this.state.weather.city.country ? `${this.state.weather.city.name}, ${this.state.weather.city.country}`: ''}
				</div>
        <WeatherList weather={this.state.weather.list} />
			</div>
		);
	}
}


export default App;
