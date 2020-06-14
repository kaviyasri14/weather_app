import { WeatherFetchService } from './../services/weather-fetch.service';
import { Component , Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-futureicons',
  templateUrl: './futureicons.component.html',
  styleUrls: ['./futureicons.component.css']
})
export class FutureiconsComponent implements OnChanges {
  // @Input('date') firstlist;
  //   @Input('temp') secondlist;
    chart;
  @Input('sunx') sunx;
  @Input('suny') suny;

  constructor(private service:WeatherFetchService) { }

  ngOnChanges() {
    console.log("changing takes place from future",this.sunx,this.suny);
    this.chart = new Chart({
      chart: {
        type: 'area',
        
      
      },
      title:{
        text:''
    },
     
      xAxis: {
        categories: this.sunx
      },
      yAxis: {
        
      },
      plotOptions: {

        area: {
          negativeColor:'#484848',
          dataLabels: {
            enabled: true

          },
          enableMouseTracking: false
        }
      },
      series: [{
        
        data: this.suny,
        color: 'rgb(235, 132, 15)',
        // negativeColor: '#0088FF',
       }]
    });
  }
  
}


