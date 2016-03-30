var candidates = ["Hillary Clinton","Ted Cruz","Bernie Sanders","Marco Rubio","Ben Carson","Donald J. Trump","John Kasich","Jeb Bush","Scott Walker","Carly Fiorina","Chris Christie","Rand Paul","Rick Perry","Bobby Jindal","Lindsey Graham","Mike Huckabee","Martin O'Malley","George Pataki","Rick Santorum","Lawrence Lessig","Jim Webb","Lincoln Chafee","Jim Gilmore"]

var money = [188.0,104.2,96.3,84.6,68.0,27.3,27.3,157.6,39.5,26.0,26.0,20.6,16.7,11.0,10.0,8.8,7.1,2.1,2.0,1.2,0.8,0.4,0.2]

var delegates = [1266,463,1038,172,0,752,144]

var party = ["d", "r", "d", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "r", "d", "r", "r", "d", "d", "d", "r"]

/*
var everything = [
    {cand:"Hillary Clinton", money:188.0, party: 0}
    {cand:"Ted Cruz", money:104.2, party:1}
    {cand:"Bernie Sanders", money:96.3, party:0}
    {cand:"Marco Rubio", money: 84.6, party:1}
    {cand:"Ben Carson", money:68.0, party:1}
    {cand:"Donald J. Trump", money:27.3, party:1}
    {cand:"John Kasich", money:27.3, party:1}
    {cand:"Jeb Bush", money:157.6, party:1}
    {cand:"Scott Walker", money:39.5, party:1}
    {cand:"Carly Fiorina", money:26.0, party:1}
    {cand:"Chris Christie", money:26.0, party:1}
    {cand:"Rand Paul", money: 20.6, party:1}
    {cand:"Rick Perry", money:16.7, party:1}
    {cand:"Bobby Jindal", money:11.0, party:1}
    {cand:"Lindsey Graham", money:10.0, party:1}
    {cand:"Mike Huckabee", money:8.8, party:1}
    {cand:"Martin O'Malley", money:7.1, party: 0}
    {cand:"George Pataki", money:2.1, party:1}
    {cand:"Rick Santorum", money:2.0, party:1}
    {cand:"Lawrence Lessig", money:1.2, party: 0}
    {cand:"Jim Webb", money:0.8, party: 0}
    {cand:"Lincoln Chafee", money:0.4, party: 0}
    {cand:"Jim Gilmore" money:0.2, party:1}
]
*/

/*
d3.select(".money")
.selectAll("div")
.data(candidates)
.enter().append("div")
.text(function(d) {return d;});
*/

d3.select(".money")
.selectAll("div")
.data(money)
.enter().append("div")
.style("width",function(d) {return d * 5 + "px";})
/*.style("background-color", function(d){
    if(d == "d"){
	return "steelblue";
    } else {
	return "#cd5c5c";
    }
}*/
.text(function(d) {return d;});

d3.select(".money")
.selectAll("div")
.data(candidates)
.append("div")
.text(function(d) {return d;});

d3.select("p")
.on("click",function() {

	d3.select(".money")
	.html("");

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

/*
d3.select(".money")
.selectAll("div")
.data(party)
.append("div")
.style("background-color", function(d){
    if(d=="d"){
	return "steelblue";
    } else{
	return "#cd5c5c";
    }
}
*/