window.onload = function() {
  var chart = new CanvasJS.Chart( 'chartContainer', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Daily Visitors'
    },
    axisY: {
      includeZero: false
    },
    data: [
      {
        type: 'line',
        dataPoints: [
          { y: 50 },
          { y: 14 },
          {
            y: 85,
            indexLabel: 'highest',
            markerColor: 'red',
            markerType: 'triangle'
          },
          { y: 30 },
          { y: 13 },
          { y: 10 },
          { y: 80 },
          { y: 20 },
          {
            y: 5,
            indexLabel: 'lowest',
            markerColor: 'DarkSlateGrey',
            markerType: 'cross'
          },
          { y: 15 },
          { y: 28 },
          { y: 21 }
        ]
      }
    ]
  });
  setTimeout( function() {
    chart.render();
  }, 1000 );
};
