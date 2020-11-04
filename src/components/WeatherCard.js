import React from 'react';

// const test = (response) => {  
//   const today = new Date();
//   const day = 60 * 60 * 24 * 1000;

//   const dateBins = {};
//   const nBins = 6; // there can be reports for up to 6 distinct dates

//   for (let i = 0; i < nBins; i++) {
//       // set up a bin (empty array) for each date
//       const date = new Date(today.getTime() + i * day);
//       dateBins[date.getDate()] = [];
//   }

//   const reports = response;
//   for (const report of reports) {
//       const reportDate = new Date(report.dt * 1000).getDate();
//       dateBins[reportDate].push(report);
//   }
//   return dateBins;
// }

// const test1 = (day, response) => {
//     const test3 = test(response);
//     let max = test3[day].reduce((max, current) => (current.main.temp_max > max ? current.main.temp_max : max),0)
//     return max;
// }



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

// // test() {    
//     const today = new Date();
//     const day = 60 * 60 * 24 * 1000;

//     const dateBins = {};
//     const nBins = 6; // there can be reports for up to 6 distinct dates

//     for (let i = 0; i < nBins; i++) {
//         // set up a bin (empty array) for each date
//         const date = new Date(today.getTime() + i * day);
//         dateBins[date.getDate()] = [];
//     }

//     const reports = weatherData.list;
//     for (const report of reports) {
//         const reportDate = new Date(report.dt * 1000).getDate();
//         dateBins[reportDate].push(report);
//     }
//     return dateBins;
// // }

// // function test1(day) {
// //     const test3 = test();
// //     let max = test3[day].reduce((max, current) => (current.main.temp_max > max ? current.main.temp_max : max),0)
// //     return max;
// // }


