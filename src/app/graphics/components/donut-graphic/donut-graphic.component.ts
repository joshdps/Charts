import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-donut-graphic',
  templateUrl: './donut-graphic.component.html'
})
export class DonutGraphicComponent implements OnInit {
  
  // Vars
  @Input() donutData: number[] = []

  // Doughnut properties
  @Input() doughnutChartLabels: string[] = [];

  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.donutData }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

    // Pie
    public doughnutChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
          
        },
      }
    };

  constructor() { }

  ngOnInit(): void {

  }
  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
