

button=document.getElementById("Enter");
button.addEventListener("click", function (e){
    let city=document.getElementById("city").value;
    let p=/^[A-za-z]*$/g;
    if(city!="" && p.test(city)){
        let k="";
        var m="metric";
        let url= "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+k+"&units="+m;
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            let n=data['name'];
            let t=data.main.temp;
            let pre=data.main.pressure;
            let humi=data.main.humidity;
            let d=data.weather;
            let ws=data.wind.speed;
            document.getElementById("res").innerHTML="<b> WEATHER REPORT: </b> <BR> "+n+" : "+t+" Celsius <br> Pressure: "+pre+"<br> Humidity: "+humi+"<br> Description: "+d[0].description+"<br> Wind Speed: "+ws+" m/s ";
        }).catch((err)=>{alert("Error: City Not Found")});
    }
    else{
        alert("Enter valid city Name");
    }
});
