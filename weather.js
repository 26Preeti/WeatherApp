

function test(){
let c=document.getElementById("city").value;
let p=/^[a-z]*$/g;
if(c!="" && p.test(c)){
document.getElementById("result").innerHTML=c;
}
else{
document.getElementById("result").innerHTML="Enter City Name"
}
}

