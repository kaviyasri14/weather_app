import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import * as _ from 'lodash';
import * as moment from 'moment';
@Injectable()
export class WeatherFetchService {
  summary;
  temperature;
  presdet;
  curdet;
 dayWiseMap;
 dayTileList;
 templist;
 datelist;
 farenheit;
 sungraph = {x:[],
y:[]};
sunx;
suny;
noload

  constructor(private http: Http) {
   this.dayWiseMap = {};
  this.dayTileList = [];
  this.templist = [];
  this.datelist = [];
   }
   getCityDetails(city) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=27d43832d2a4adcb97fcbfa23db130aa`;
    this.noload = true;
    this. http.get(url)
    .subscribe(res => {      
      const data = res.json();
this.noload=false
      console.log(data);
      this.summary = {
        name: res.json().city.name,
        country: res.json().city.country,
      day: moment(res.json().list[0].dt * 1000).format('dddd'),
        temp: res.json().list[0].weather[0].description,
      };
      this.temperature = Math.round(res.json().list[0].main.temp - 270);
      this.farenheit = Math.round((this.temperature  * .5556) + 32);      
     const curicon=res.json().list[0].weather[0].icon;

    //  const iconId = obj[0].weather[0].icon;
    //  console.log('icon',iconId)
       // const icon =  'http://openweathermap.org/img/w/' + iconId + '.png';
       let icon;
       let description;
       if(curicon.includes('02')||curicon.includes('03')){
         icon = '../../assets/images/sky.png';
         description = 'Cloudy'
       }
       else if(curicon.includes('04')){
         icon = '../../assets/images/weather.png';
         description = 'Cloudy'
       }
       else if(curicon.includes('10')||curicon.includes('13')){
         icon = '../../assets/images/rain.png';
         description = 'Rainy'
       }
       else if(curicon.includes('11')){
         icon = '../../assets/images/thunderstrom.png';
         description = 'Thunderstrom'
       }
       else if(curicon.includes('01')){
         icon = '../../assets/images/sun.png';
         description = 'Sunny'
       }
       else if(curicon.includes('09')){
         icon = '../../assets/images/climate.png';
         description = 'Drizzle'
       }
       else if(curicon.includes('13')){
         icon = '../../assets/images/snow.png';
         description = 'Snow'
       }
       else if(curicon.includes('50')){
         icon = '../../assets/images/mist.png';
         description = 'Mist'
       }
     
      this.presdet = {
         sunrise:moment(res.json().city.sunrise*1000).format('h:mm a'),
         sunset:moment(res.json().city.sunset*1000).format('h:mm a'),
          pressure: res.json().list[0].main.pressure,
          humidity: res.json().list[0].main.humidity,
          icon:icon
         
          // icon : 'http://openweathermap.org/img/w/' + res.json().list[0].weather[0].icon + '.png',
      };
      console.log(this.presdet)
      this.dayWiseMap = {};
      data.list.forEach(date => {
        // console.log(date);
        const dateValue = new Date(date.dt * 1000);
        const dayNum = dateValue.getDay();
        if (dayNum in this.dayWiseMap) {
          this.dayWiseMap[dayNum].push(date);
        } else {
          this.dayWiseMap[dayNum] = [date];
        }
      });
      // console.log(this.dayWiseMap);
     const sortedMap = _.sortBy(this.dayWiseMap, (value) => {
        let dayOfWeek = new Date(value[0].dt * 1000).getDay();
        let today = new Date().getDay();
        const diff = dayOfWeek - today;
        return diff < 0 ? diff + 7 : diff;
      });
      // console.log(this.dayWiseMap);
      this.dayTileList = [];
    this.dayTileList = _.map( sortedMap, (obj) => {
      const minTemp = _.reduce(obj.map(interval => interval.main.temp_min), (a, b) => a + b) / obj.length;
      const iconId = obj[0].weather[0].icon;
      // console.log('icon',iconId)
        // const icon =  'http://openweathermap.org/img/w/' + iconId + '.png';
        let icon;
        let description;
        if(iconId.includes('02')||iconId.includes('03')){
          icon = '../../assets/images/sky.png';
          description = 'Cloudy'
        }
        else if(iconId.includes('04')){
          icon = '../../assets/images/weather.png';
          description = 'Cloudy'
        }
        else if(iconId.includes('10')||iconId.includes('13')){
          icon = '../../assets/images/rain.png';
          description = 'Rainy'
        }
        else if(iconId.includes('11')){
          icon = '../../assets/images/thunderstrom.png';
          description = 'Thunderstrom'
        }
        else if(iconId.includes('01')){
          icon = '../../assets/images/sun.png';
          description = 'Sunny'
        }
        else if(iconId.includes('09')){
          icon = '../../assets/images/climate.png';
          description = 'Drizzle'
        }
        else if(iconId.includes('13')){
          icon = '../../assets/images/snow.png';
          description = 'Snow'
        }
        else if(iconId.includes('50')){
          icon = '../../assets/images/mist.png';
          description = 'Mist'
        }
        
      return {
        day: moment(obj[0].dt * 1000).format('ddd'),
        minTemp: Math.round(minTemp - 270),
        maxTemp: Math.round(obj[0].main.temp_max - 270),
        imageURL: icon,
        description:description,
        dayNum: new Date(obj[0].dt * 1000).getDay()
      };

    });

    this.templist = [];
    this.datelist = [];
    this.dayWiseMap[0].forEach(element => {
      this.templist.push(Math.round(element.main.temp - 270));
      this.datelist.push(moment(element.dt * 1000).format( 'h:mm a'));
    });
 
    let atttime = new Date().getHours()+ ':' + new Date().getMinutes() + 'am'
    let curry;
    console.log(new Date().getMinutes())

    if(new Date().getHours()>12&&new Date().getHours()%12>Number(this.presdet.sunset.split(':')[0]))
    {
      curry={
        y:-10,
        marker:{
symbol:'url(../../assets/images/moon.png)'
        }
      }
      this.sungraph.x=[this.addorsubHr(this.presdet.sunrise,'sub'),this.presdet.sunrise,'1 pm',this.presdet.sunset,atttime],
      this.sungraph.y=[-30,0,10,0,curry]
    }
    else{
      curry={
        y:Math.round(this.dayWiseMap[new Date().getDay()][0].main.temp-270),
         marker:{ symbol:'url(../../assets/images/sun.png)'}
      }
    }
    this.sungraph.x=[this.addorsubHr(this.presdet.sunrise,'sub'),this.presdet.sunrise,atttime,this.presdet.sunset,this.addorsubHr(this.presdet.sunset,'add')]
    this.sungraph.y=[-30,0,curry,0,-1*(curry.y)]
    console.log("sungrpah",this.sungraph.x)
     this.sunx = this.sungraph.x; 
     this.suny = this.sungraph.y;
    console.log(this.sunx,this.suny)
    });

   

 
      }
   

addorsubHr(time,type){
  if(type=='add')
  {
    return(Number(time.split(':')[0])+2)+'pm'
  }
  else if(type=='sub'){
    return(Number(time.split(':')[0])-1)+'pm'
  }
}

   
   updateGraphDetails(day){
  
     this.datelist=[];
     this.templist=[];
     this.dayWiseMap[day].forEach(element => {
      this.templist.push(Math.round(element.main.temp-270));
      this.datelist.push(moment(element.dt * 1000).format('h:mm a'));
      // console.log(this.templist);
     });
   }
   updateSummary(day){
    const dayInfoForDay = this.dayWiseMap[day];
    // console.log(dayInfoForDay);
    this.summary = {
      ...this.summary,
      day: moment(dayInfoForDay[0].dt * 1000).format("dddd"),
      temp: dayInfoForDay[0].weather[0].description
    }
   }
}
