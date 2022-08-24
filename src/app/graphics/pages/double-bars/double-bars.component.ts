import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html'
})
export class DoubleBarsComponent implements OnInit {



  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public productChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public providerChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };


  public productChartData: ChartData<'bar'> = {     
      labels: [ '2022','2021','2020','2019','2018' ], 
      datasets:[ 
        { data: [ 250, 310, 100, 150, 120 ], label: 'Cars', backgroundColor: '#8365E6' },
        { data: [ 150, 110, 50, 80, 20 ], label: 'Motor cycles', backgroundColor: '#F321FC' }
      ]
  };
  public providerChartData: ChartData<'bar'> = {     
      labels: [ '2022','2021','2020','2019' ], 
      datasets:[ 
        { data: [ 160, 140, 180, 130 ], label: 'Provider A' },
        { data: [ 60, 40, 110, 190 ], label: 'Provider B' }
      ]
  };

  constructor() { }
  ngOnInit(): void {


  }

}
