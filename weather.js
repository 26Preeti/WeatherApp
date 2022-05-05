

button=document.getElementById("Enter");
button.addEventListener("click", function (){
    let city=document.getElementById("city").value;
    let p=/^[A-za-z]*$/g;
    if(city!="" && p.test(city)){
        let k="";
        let m="metric"
        let url= "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+k+"&units="+m;
        fetch(url).then((response)=>{
            return response.json();
        }).then((data)=>{
            let n=data['name'];
            let t=data.main.temp;
            let mt=data.main.temp_min;
            let maxt=data.main.temp_max;
            let pre=data.main.pressure;
            let humi=data.main.humidity;
            document.getElementById("result").innerHTML=n+" : "+t+" Celsius <br> Min Temp: "+mt+" <br> Max Temp: "+maxt+"<br> Pressure: "+pre+"<br> Humidity: "+humi;
        }).catch((err)=>{alert("Error: City Not Found")});
    }
    else{
        alert("Enter valid city Name");
    }
});
