var money = [188.0,104.2,96.3,84.6,68.0,27.3,27.3,157.6,39.5,26.0,26.0,20.6,16.7,11.0,10.0,8.8,7.1,2.1,2.0,1.2,0.8,0.4,0.2]

d3.select(".money")
.selectAll("div")
.data(money)
.enter().append("div")
.style("width",function(d) {return d * 3 + "px";})
.text(function(d) {return d;});