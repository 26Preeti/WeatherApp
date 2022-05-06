import {apk} from "./k.js";
let button=document.getElementById("Enter");
button.addEventListener("click", function (){
    let city=document.getElementById("city").value;
    let p=/^[A-z ,a-z0-9]*$/g;
    if(city!="" && p.test(city)){
        if(/^[A-z a-z0-9]*[" "]+[A-z a-z0-9]*$/g.test(city)){
           city=city.replace(/\s+/g," ");
        }
        let k=apk;
        var m="metric";
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${k}&units=${m}`;
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            let n=data['name'];
            let t=data.main.temp;
            let con=data.sys.country;
            let pre=data.main.pressure;
            let humi=data.main.humidity;
            let d=data.weather;
            let ws=data.wind.speed;
            document.getElementById("res").innerHTML="<b> WEATHER REPORT: </b> <BR> "+n+" "+con+" : "+t+" Celsius <br> Pressure: "+pre+"<br> Humidity: "+humi+"<br> Description: "+d[0].description+"<br> Wind Speed: "+ws+" m/s ";
        }).catch((err)=>{document.getElementById("res").innerHTML="Error: City Not Found<br>(Please Enter appropriate value)"});
    }
    else{
        document.getElementById("res").innerHTML="Have a Great day!";
        alert("Enter valid city Name");
        
    }
});

let s=document.getElementById("city");
s.addEventListener("input",function(){
    let t=document.getElementById("city").value;
    if(t==""){
        document.getElementById("res").innerHTML="Have a Great day!";
    }
});
