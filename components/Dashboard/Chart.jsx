// import React, {useEffect, useState} from 'react';
// import { Line } from 'react-chartjs-2';
// import axios from "axios";
// import {Scatter} from "recharts";
//
// let chartData;
//
// async function historicalData() {
//     chartData = await axios.get('https://api.coingecko.com/api/v3/coins/kudoge/market_chart?vs_currency=usd&days=1000&interval=daily');
//     chartData = chartData.data.prices
//     console.log(chartData[0][0])
//     console.log(chartData[0][1])
// }
//
// // const [chartData, setChartData] = useState({});
//
// const data = {
//     datasets: [
//         {
//             data: chartData,
//         },
//     ],
// };
//
// const options = {
//     scales: {
//         yAxes: [
//             {
//                 ticks: {
//                     beginAtZero: true,
//                 },
//             },
//         ],
//         xAxes: [
//             {
//                 ticks: {
//                     beginAtZero: true,
//                 },
//             },
//         ],
//     },
// };
//
//
// // useEffect()
//
// const Chart = (props) => {
//
//     useEffect(() => {
//         historicalData()
//     });
//
//
//     return (
//         <React.Fragment>
//             <Scatter data={data} options={options} />
//         </React.Fragment>
//     )
// }
//
// export default Chart;
//
// // import React, { useState, useEffect } from "react";
// // import { Line } from "react-chartjs-2";
// // import axios from "axios";
// //
// // const Dankmemes = () => {
// //     const [chartData, setChartData] = useState({});
// //     const [employeeSalary, setEmployeeSalary] = useState([]);
// //     const [employeeAge, setEmployeeAge] = useState([]);
// //
// //     const chart = () => {
// //         let empSal = [];
// //         let empAge = [];
// //         axios
// //             .get("http://dummy.restapiexample.com/api/v1/employees")
// //             .then(res => {
// //                 console.log(res);
// //                 for (const dataObj of res.data.data) {
// //                     empSal.push(parseInt(dataObj.employee_salary));
// //                     empAge.push(parseInt(dataObj.employee_age));
// //                 }
// //                 setChartData({
// //                     labels: empAge,
// //                     datasets: [
// //                         {
// //                             label: "level of thiccness",
// //                             data: empSal,
// //                             backgroundColor: ["rgba(75, 192, 192, 0.6)"],
// //                             borderWidth: 4
// //                         }
// //                     ]
// //                 });
// //             })
// //             .catch(err => {
// //                 console.log(err);
// //             });
// //         console.log(empSal, empAge);
// //     };
// //
// //     useEffect(() => {
// //         chart();
// //     }, []);
// //     return (
// //         <div className="App">
// //             <h1>Dankmemes</h1>
// //             <div>
// //                 <Line
// //                     data={chartData}
// //                     options={{
// //                         responsive: true,
// //                         title: { text: "THICCNESS SCALE", display: true },
// //                         scales: {
// //                             yAxes: [
// //                                 {
// //                                     ticks: {
// //                                         autoSkip: true,
// //                                         maxTicksLimit: 10,
// //                                         beginAtZero: true
// //                                     },
// //                                     gridLines: {
// //                                         display: false
// //                                     }
// //                                 }
// //                             ],
// //                             xAxes: [
// //                                 {
// //                                     gridLines: {
// //                                         display: false
// //                                     }
// //                                 }
// //                             ]
// //                         }
// //                     }}
// //                 />
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default Dankmemes;
// // Copied
