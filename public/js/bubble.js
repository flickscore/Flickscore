(function() {
  var width = 500,
    height = 500;

  var svg = d3
    .select("#chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)");

    // <defs>

    // </defs>

    var defs = svg.append("defs");

    defs.append("pattern")
  

  var radiusScale = d3
    .scaleSqrt()
    .domain([1, 100])
    .range([10, 80]);

  d3.queue()
    .defer(d3.csv, "../movies.csv")
    .await(ready);

  var simulation = d3
    .forceSimulation()
    .force("x", d3.forceX(width / 2).strength(0.05))
    .force("y", d3.forceY(width / 2).strength(0.05))
    .force("collide", d3.forceCollide(function(d) {
      return radiusScale(d.movieScore) + 1;
    }));

  function ready(error, datapoints) {
    var circles = svg
      .selectAll(".movies")
      .data(datapoints)
      .enter()
      .append("circle")
      .attr("class", "movies")
      .attr("r", function(d) {
        return radiusScale(d.movieScore);
      })
      .attr("fill", function(d){
        return "url(#" + d.id + ")"
      })
      .on('click', function(d){
        console.log(d)
      })

    defs.selectAll(".movie-patters")  
      .data(datapoints)
      .enter().append("pattern")
      .attr("class", "artist-pattern")
      .attr("id", function(d){
        return d.id
      })
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("height", 1)
      .attr("width", 1)
      .attr("preserveAspectRatio", "none")
      .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
      .attr("xlink:href", function(d){
        return d.moviePoster
      })

    simulation.nodes(datapoints).on("tick", ticked);

    function ticked() {
      circles
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });
    }
  }
})();
