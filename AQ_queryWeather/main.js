var app=new Vue({
    el:"#app",
    data:{
        city:"杭州",
        weatherList:[],
    },
    methods:{
        searchWeather:function(){
            //console.log(this.city);
            //console.log("query");
            var currentThis=this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city).then(function(response){
                //console.log(response);
                console.log(response.data.data.forecast);
                //注意this重定向
                currentThis.weatherList=response.data.data.forecast;
            }).catch(function(err){
                console.log(err);
            });
        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather();
        }
    }
})