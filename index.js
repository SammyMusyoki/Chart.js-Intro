// Import stylesheets
import './style.css';
import Chart from 'chart.js/auto';

// Write Javascript code!
const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

(async function () {
  const data = [
    {
      year: 2010,
      count: 10,
    },
    {
      year: 2011,
      count: 20,
    },
    {
      year: 2012,
      count: 15,
    },
    {
      year: 2013,
      count: 25,
    },
    {
      year: 2014,
      count: 22,
    },
    {
      year: 2015,
      count: 30,
    },
    {
      year: 2016,
      count: 28,
    },
  ];

  new Chart(ctx, {
    type: 'line',
    // options: {
    //   animation: false,
    //   plugins: {
    //     legend: {
    //       display: false
    //     },
    //     tooltip: {
    //       enabled: false
    //     }
    //   }
    // },
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: 'Acquisition by Year',
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
