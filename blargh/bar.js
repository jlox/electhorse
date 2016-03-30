var hdata = [188, 130.4, 97.5, 32.9, 57.5, 13.2, 45.2]
var tdata = [104.2, 54.7, 41.0, 13.6, 49.6, 18.6, 26.0]
var bdata = [96.3, 96.3, 81.6, 14.7, .01, 0.1, 0.1]
var ddata = [27.3, 25.5, 23.9, 1.6, 1.8, 1.6, 0.2]
var cands = ["Hillary Clinton", "Ted Cruz", "Bernie Sanders", "Donald Trump"]
var party = ["d", "r", "d", "r"]
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");

var p = 0
while p < 4{
    if (p==0){
    barEnter.style("width", function(d,i) { 
	if (hdata[i] >= 60)
	    return d * 3 + "px";
	else
	    return d * 5 + "px"; });
    barEnter.style("background-color", function(i) {
	if (party[i] == "d")
	    return "#cd5c5c";
	else
	    return "steelblue"; });
    barEnter.text( function(d, i) { return cands[i] + " : " + d; });
    } else if (p==1){
    barEnter.style("width", function(d,i) { 
	if (tdata[i] >= 60)
	    return d * 3 + "px";
	else
	    return d * 5 + "px"; });
    barEnter.style("background-color", function(i) {
	if (party[i] == "d")
	    return "#cd5c5c";
	else
	    return "steelblue"; });
    barEnter.text( function(d, i) { return cands[i] + " : " + d; });
    } else if (p==2){
    barEnter.style("width", function(d,i) { 
	if (bdata[i] >= 60)
	    return d * 3 + "px";
	else
	    return d * 5 + "px"; });
    barEnter.style("background-color", function(i) {
	if (party[i] == "d")
	    return "#cd5c5c";
	else
	    return "steelblue"; });
    barEnter.text( function(d, i) { return cands[i] + " : " + d; });
    }else if (p==3){
    barEnter.style("width", function(d,i) { 
	if (ddata[i] >= 60)
	    return d * 3 + "px";
	else
	    return d * 5 + "px"; });
    barEnter.style("background-color", function(i) {
	if (party[i] == "d")
	    return "#cd5c5c";
	else
	    return "steelblue"; });
    barEnter.text( function(d, i) { return cands[i] + " : " + d; });
    }

}
