import React from 'react';

const WeatherCard = ({ date, type, icon, temp }) => {
	
	return(
		<div className='daily'>
			<h2>{date}</h2>
			<img src={`http://openweathermap.org/img/w/${icon}.png`} alt={type} style={{height: '100px'}}/>
			<h3>{type}</h3>
			<div className='container' style={{display: 'flex', alignItems: 'center'}}>
				<h3>{temp}&deg;F</h3>
			</div>
		</div>

	);
};

export default WeatherCard;



