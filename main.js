 var abc = [];
function submit(){
    var ea=[];
for(var i=1;i<=4;i++){
    var a1 = document.getElementById("S"+i).value;
console.log(a1);
    abc.push(a1);
}

console.log(abc);
var x = abc.length;
console.log(x);
for(var j=0;j<x;j++){
    ea.push("<h4> name is "+ abc[j]+ "</h4>");
    console.log(ea);
}
document.getElementById("answer").innerHTML = ea;
var n = ea.join(" ");
console.log(n)
document.getElementById("none").innerHTML = n;
document.getElementById("submit").style.display = "none";
document.getElementById("sort").style.display = "inline-block";
}
function sort(){
    abc.sort();  
    console.log(abc);
    var ar = [];
  var cba = abc.length;
  console.log(cba);
 for(var k = 0;k<cba;k++){
     ar.push("<h4> name is "+ abc[k]+ "</h4>");
     console.log(ar);
 }   
 var rc=ar.join(" ");
 console.log(rc);
 
document.getElementById("none").innerHTML = rc;
}

