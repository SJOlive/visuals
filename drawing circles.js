 var svg = d3.select("svg")
  // X coordinates of 25 circles
  var coordsX = [10, 30, 50, 70, 90, 110, 130, 150, 170,
                 190, 210, 230, 250, 270, 290, 310, 330,
                 350, 370, 390, 410, 430, 450, 470, 490]

  var i = 0;
  // If use d3.timer, get a slightly different animation
  var t = d3.interval(function(elapsed) {
    svg.append("circle")
       .attr("cx", coordsX[i])
       .attr("cy", 10)
       .attr("r", 10)
       .transition()
       .duration(1000)
       .attr("cy", "490")
    i = i+1
    if (i ==25) t.stop();
  }, 200);