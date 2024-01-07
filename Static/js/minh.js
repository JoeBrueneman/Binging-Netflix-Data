// Select DOM items
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const hamburger = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');

const url = 'data';
d3.json(url).then(function(data) {
    console.log(data);
    console.log(data[0]);
    console.log(data[0]);
});

anychart.onDocumentReady(function() {
  anychart.data.loadJsonFile("http://127.0.0.1:5000/data",
    function(data) {
      let xaxis_yaxis = (x:"averageRating, value: "Hours_Viewed");
      let chart = anychart.scatter();
      let marker = chart.marker(data);
      marker.type("circle").size(2);
      chart.yAxis().title("Hours Viewed");
      chart.xAxis().title( "Average Rating");
      chart.title("Hours Viewed vs Average Rating")
      chart.container("container");
      chart.draw();
    }
  );
});
// JS 

//var chart; 
  
// JSC.fetch(''./resources/GPDAndEnergyUse.csv'') 
//   .then(function(response) { 
//     return response.text(); 
//   }) 
//   .then(function(text) { 
//     var data = JSC.csv2Json(text); 
//     chart = renderChart(data); 
//   }); 
// function renderChart(sample) { 
//   d3.json(url).then(function(data){
//     var series = [ 
//       { 
//         name: 'GDP', 
//         type: 'marker', 
//         points: data.map(function(data) { 
//           return { 
//             x: data.Hours_Viewed, 
//             y: data.averageRating, 
             
//           }; 
//         }) 
//       } 
//     ]; 
//     return JSC.chart('chartDiv', { 
//       title_label_text: 
//         'Correlation of energy consumption and GDP per person', 
//       defaultPoint: { 
//         tooltip: 
//           '<b>%country</b><br>Energy use: <b>%xValue</b><br>GDP per capita: <b>%yValue</b>', 
//         opacity: 0.8, 
//         marker: { 
//           type: 'circle', 
//           outline_width: 0, 
//           size: 12 
//         } 
//       }, 
//       axisToZoom: 'xy', 
//       legend_visible: false, 
//       yAxis: { 
//         label_text: 
//           'GDP per capita, PPP (current international $)', 
//         alternateGridFill: 'none', 
//         scale_zoomLimit: 5000 
//       }, 
//       xAxis: { 
//         label_text: 
//           'Energy use (kg of oil equivalent per capita)', 
//         scale_zoomLimit: 100 
//       }, 
//       series: series 
//     });
//   }   
// )} 