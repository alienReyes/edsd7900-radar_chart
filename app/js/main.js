//////////////////////////////////////////////////////////////
//////////////////////// Set-Up //////////////////////////////
//////////////////////////////////////////////////////////////

var margin = {top: 100, right: 100, bottom: 100, left: 100},
  width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
  height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

//////////////////////////////////////////////////////////////
////////////////////////// Data //////////////////////////////
//////////////////////////////////////////////////////////////

var s1Val=0
var data = [
  [//iPhone
  {axis:"Scholarship",value:s1Val},
  {axis:"Systemic Thinking",value:.2},
  {axis:"Reflection",value:.2},
  {axis:"Practice",value:.4},
  {axis:"Collaboration",value:.1},
  {axis:"Advocacy",value:.1},
  {axis:"Civic Engagement",value:.1},
  {axis:"Humane Ethics",value:.1}
  ]
    ];
//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var color = d3.scale.ordinal()
  .range(["#CC333F","#CC333F","#00A0B0"]);

var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue:5,
    factor: 4,
  levels: 5,
  roundStrokes: false,
  color: color
};
//Call function to draw the Radar chart


// slider setup

$(".slider" ).slider({
      value:0,
      orientation: "horizontal",
      range: "max",
      min: 0,
      max: 5,
      animate: true
    });


$( ".slider" ).on( "slide", function( event, ui ) {
  drawChart ()
} );

$( ".slider" ).on( "slidechange", function( event, ui ) {
  drawChart ()
} );


  drawChart ();


function drawChart (){
  var sliderValues=[]
  $( ".slider" ).each(function() {
  sliderValues.push(  $(this).slider("option", "value"));
});
  data = [
        [//iPhone
        {axis:"Scholarship",value:sliderValues[0]},
        {axis:"Systemic Thinking",value:sliderValues[1]},
        {axis:"Reflection",value:sliderValues[2]},
        {axis:"Practice",value:sliderValues[3]},
        {axis:"Collaboration",value:sliderValues[4]},
        {axis:"Advocacy",value:sliderValues[5]},
        {axis:"Civic Engagement",value:sliderValues[6]},
        {axis:"Humane Ethics",value:sliderValues[7]}
        ]
      ];
RadarChart(".radarChart", data, radarChartOptions);
}
