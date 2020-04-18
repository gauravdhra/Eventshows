import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.barColor();
  }
  barChartOptions: ChartOptions = {    
    responsive: true,
    maintainAspectRatio: false,
  //   layout: {
  //     padding: {
  //         left: 50,
  //         right: 10,
  //         top: 20,
  //         bottom: 0
  //     },    
  // },
    scales: {
      xAxes: [{
          // ticks: { fontColor: '#585858;' },
          gridLines: {
              // color: "rgba(0, 0, 0, 0)",
              display:false
          }
      }],
      yAxes: [{
          display:false,

          gridLines: {
              // color: "rgba(0, 0, 0, 0)",
              display:false
          },          
      }],
    },
    legend:{
      display:false,   // label on top of the bar chart will not display if display is false
    },    
        
  };
  barChartLabels: Label[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];  
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Color[] = [
    { backgroundColor: this.barColor() },    
  ];
  
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33],
      barThickness:12,
      // borderWidth:5,      
    },
  ];
  
  barColor(){    
    var arr = this.barChartLabels;
    for(let i = 0; i<arr.length; i++){
      return ((i+1)%2 == 0 ? '#636363' : '#2F2F2F');
    }
  }
}
