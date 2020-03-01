anychart.onDocumentReady(function () {
  
//anychart.theme('darkTurquoise');
//anychart.theme('coffee');
  
  //Create a stage
  var stage = anychart.graphics.create("container");
  
  //stage.title("Diagram of the Causes of Mortality in the Army in the East");
  
    // create a chart
  var chart2 = anychart.polar();
  
  chart2.bounds(0,0,"40%","90%");
  
  // create a data set
   // create a data set
  chartData2 = {
    title: 'APRIL 1855 to MARCH 1856',
    header: ['#', 'Zymotic diseases', 'Wounds & injuries', 'All other causes'],
    rows: [
    ['Jul 1855', 107.5, 37.7, 9.3],
    ['Aug 1855', 129.9, 44.1, 6.7],
    ['Sep 1855', 47.5, 69.4, 5],
    ['Oct 1855', 32.8, 13.6, 4.6],
    ['Nov 1855', 56.4, 10.5, 10.1],
    ['Dec 1855', 25.3, 5, 7.8],
    ['Jan 1856', 11.4, 0.5, 13],
    ['Feb 1856', 6.6, 0, 5.2],
    ['Mar 1856', 3.9, 0, 9.1],
    ['April 1855', 177.5, 17.9, 21.2],
    ['May 1855', 171.8, 16.6, 12.5],
    ['Jun 1855', 247.6, 64.5, 9.6]
  ]};

 // sort data by X
    chart2.sortPointsByX(true)
            // set series type
            .defaultSeriesType('column')
            // disable y-axis
            .yAxis(false)
            // set x-scale
            .xScale('ordinal');
  
    // set chart data
    chart2.xGrid(false);
    chart2.yGrid(false);
	
  	// set chart data
    chart2.data(chartData2);
  
    // set the chart title
    //chart2.title("Polar Stacked Column Chart");

    // set title margin
    chart2.title().margin().bottom(20);

    // set stack mod
    chart2.yScale().stackMode('value');

    // set tooltip settings
    chart2.tooltip()
            .valuePrefix('')
            .displayMode('union');

    // enable legend
    var legend = chart2.legend();
    legend.enabled(true);
  
    // configure tooltips
    //chart.tooltip().format("{%value} ({%yPercentOfCategory}{decimalsCount:2}%)");

    // configure labels on the y-axis
    //chart.yAxis().labels().format("{%value}");

 	chart2.palette(["#9faaad", "#dcb0ac", "#6e625e"]);
    // set the container id
    chart2.container(stage);

    // initiate drawing the chart
    chart2.draw();
  
  // create a chart
  var chart = anychart.polar();

  chart.bounds("45%",0,"50%","90%");
  
  // create a data set
  chartData = {
    title: 'APRIL 1854 to MARCH 1855',
    header: ['#', 'Zymotic diseases', 'Wounds & injuries', 'All other causes'],
    rows: [
    ['Jul 1854', 150, 0, 9.6],
    ['Aug 1854', 328.5, 0.4, 11.9],
    ['Sep 1854', 312.2, 32.1, 27.7],
    ['Oct 1854', 197, 51.7, 50.1],
    ['Nov 1854', 340.6, 115.8, 42.8],
    ['Dec 1854', 631.5, 41.7, 48],
    ['Jan 1855', 1022.8, 30.7, 120],
    ['Feb 1855', 822.8, 16.3, 140.1],
    ['Mar 1855', 480.3, 12.8, 68.6],
    ['April 1854', 1.4, 0, 7],
    ['May 1854', 6.2, 0, 4.6],
    ['Jun 1854', 4.7, 0, 2.5 ]
  ]};

  // sort data by X
    chart.sortPointsByX(true)
            // set series type
            .defaultSeriesType('column')
            // disable y-axis
            .yAxis(false)
            // set x-scale
            .xScale('ordinal');
  
    // set chart data
    chart.xGrid(false);
    chart.yGrid(false);

  	// set chart data
    chart.data(chartData);

    // set title margin
    chart.title().margin().bottom(100);

    // set stack mod
    chart.yScale().stackMode('value');

    // set tooltip settings
    chart.tooltip()
            .valuePrefix('')
            .displayMode('union');

    // enable legend
    var legend = chart.legend();
    legend.enabled(true);
  
    // configure tooltips
    //chart.tooltip().format("{%value} ({%yPercentOfCategory}{decimalsCount:2}%)");

    // configure labels on the y-axis
    //chart.yAxis().labels().format("{%value}");

 	chart.palette(["#9faaad", "#dcb0ac", "#6e625e"]);
  	//chart.palette.apply()
  
    // set the container id
    chart.container(stage);

    // initiate drawing the chart
    chart.draw();
});