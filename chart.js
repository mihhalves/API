$(function() {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});

// $(function () {

//     $('#container').highcharts({
//       chart: {
//         polar: true,
//         type: 'area'
//       },
//       title: {
//         text: 'Rag',
//       },
//       pane: {
//         size: '100%'
//       },
//       xAxis: {
//         min:0,
//         max:5,
//         categories: ['unit 01', 'unit 02', 'unit 03', 'unit 04', 'unit 05'],
//         tickmarkPlacement: 'on',      
//         lineWidth: 0,
//         gridLineColor:'#000',
//       },
//       yAxis: {
//         min: 0, 
//         max: 100,
//         lineWidth: 0,
//         tickPositioner:()=>[0,50,75,100],
//         showLastLabel: true,
//         gridLineInterpolation: "polygon",
//         gridLineColor:'#000',
//         plotBands: [{
//         "from": 75,
//         "to": 100,
//         "color": "#ED5B36",
//         "outerRadius": "100%",
//         "thickness": "50%"
//       }, {
//         "from": 50,
//         "to": 75,
//         "color": "#F8CC2D",
//         "outerRadius": "100%",
//         "thickness": "50%"
//       }, {
//         "from": 0,
//         "to": 50,
//         "color": "#6DBA52",
//         "outerRadius": "100%",
//         "thickness": "50%",
//       }]
//       },
//       tooltip: {
//         enabled: true
//       },
//       legend: {
//         enabled: false,
//       },
//        series: [{
//         name: 'first',
//         data: [{name:"unit 01" , y:20},75,65,50,90],
//         pointPlacement: 'on',
//         color: '#37A3EF80'
//       }] ,
//       credits: {
//         enabled: false
//       },
//       exporting: {
//         enabled: false
//       }
//     });
    
//     var chart = $('#container').highcharts();
//     const numbersArray = ()=> [...new Array(101)].map((num,idx) =>  idx)
//     var labelArray = [
//       numbersArray(),numbersArray(),numbersArray(),numbersArray(),numbersArray()
//     ];
    
    
    
//     /* console.log(numbersArray()) */
//    /*  for (var i = 0; i<=5; i++) {
//       chart.addSeries({
//         name: 'dummy series #' + i + ' for label placement',
//         data: [
//           { name: labelArray[0][i], y: i }, 
//           { name: labelArray[1][i], y: i }, 
//           { name: labelArray[2][i], y: i }, 
//           { name: labelArray[3][i], y: i }, 
//           { name: labelArray[4][i], y: i }
//         ],
//         dataLabels: {
//           enabled: true, padding: 0, y: 0,
//           formatter: function() {
//             return '<span style="font-weight: normal;">' + this.point.name + '</span>';
//           }
//         },
//         pointPlacement: 'on',
//         lineWidth: 0,
//         color: 'transparent',
//         showInLegend: false,
//         enableMouseTracking: false
//       });
//     } */
  
//   });