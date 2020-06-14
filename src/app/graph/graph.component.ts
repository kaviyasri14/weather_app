import { Component , Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnChanges {
  @Input('date') firstlist;
  @Input('temp') secondlist;
  chart;
  

  ngOnChanges() {
    console.log("changing takes place",this.firstlist,this.secondlist);
    this.chart = new Chart({
      chart: {
        type: 'line',
       
      }, 
      title:{
        text:''
    },     
      xAxis: {
        categories: this.firstlist,
       
      },
      yAxis: {
       
      },
      plotOptions: {
        area: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
       
        data: this.secondlist,
       }]
    });
  }
}
