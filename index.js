var candidates = ["Hillary Clinton","Ted Cruz","Bernie Sanders","Marco Rubio","Ben Carson","Donald J. Trump","John Kasich","Jeb Bush","Scott Walker","Carly Fiorina","Chris Christie","Rand Paul","Rick Perry","Bobby Jindal","Lindsey Graham","Mike Huckabee","Martin O'Malley","George Pataki","Rick Santorum","Lawrence Lessig","Jim Webb","Lincoln Chafee","Jim Gilmore"]

var money = [188.0,104.2,96.3,84.6,68.0,27.3,27.3,157.6,39.5,26.0,26.0,20.6,16.7,11.0,10.0,8.8,7.1,2.1,2.0,1.2,0.8,0.4,0.2]

var pac = [57.5,49.6,0.1,34.2,10.1,1.8,6.9,124.1,24.1,14.2,18.0,8.5,15.2,4.5,4.4,4.7,1.1,1.5,0.6,0,0.1,0,0]

var delegates = [1266,463,1038,172,0,752,144,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

var poll = [54,32,36,0,0,42,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

var party = ["d", "r", "d", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "d", "r", "r", "d", "d", "d", "r"]

d3.select(".money")
.selectAll("div")
.data(money)
.enter().append("div")
.style("width",function(d) {return d * 5 + "px";})
.text(function(d) {return d;});

d3.select(".money")
.selectAll("div")
.data(candidates)
.append("div")
.text(function(d) {return d;});

d3.select(".d")
.on("click",function() {

	d3.select(".money").html("");

	d3.select(".money")
	.selectAll("div")
	.data(delegates)
	.enter().append("div")
	.style("width",function(d) {return d * 0.8 + "px";})
	.text(function(d) {return d;});

	d3.select(".money")
	.selectAll("div")
	.data(candidates)
	.append("div")
	.text(function(d) {return d;});

});

d3.select(".m")
.on("click",function() {
	d3.select(".money").html("");

	d3.select(".money")
	.selectAll("div")
	.data(money)
	.enter().append("div")
	.style("width",function(d) {return d * 5 + "px";})
	.text(function(d) {return d;});

	d3.select(".money")
	.selectAll("div")
	.data(candidates)
	.append("div")
	.text(function(d) {return d;});

});

d3.select(".p")
.on("click",function() {
	d3.select(".money").html("");

	d3.select(".money")
	.selectAll("div")
	.data(pac)
	.enter().append("div")
	.style("width",function(d) {return d * 5 + "px";})
	.text(function(d) {return d;});

	d3.select(".money")
	.selectAll("div")
	.data(candidates)
	.append("div")
	.text(function(d) {return d;});

});

d3.select(".s")
.on("click",function() {
	d3.select(".money").html("");

	d3.select(".money")
	.selectAll("div")
	.data(poll)
	.enter().append("div")
	.style("width",function(d) {return d * 10 + "px";})
	.text(function(d) {return d;});

	d3.select(".money")
	.selectAll("div")
	.data(candidates)
	.append("div")
	.text(function(d) {return d;});

});