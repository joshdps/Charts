import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { GraficService } from '../../services/grafic.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html'
})
export class DonutHttpComponent implements OnInit {

  labels: string[] = []

  donutData: number[] | any[] = []

  // Doughnut properties

  public doughnutChartLabels: string[] = [
  //  'Download', 'In-Store', 'Mail-Order'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
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

  constructor( private graphicService: GraficService ) { }

  ngOnInit(): void {
    this.graphicService.getRRSSUsersCount()
      .subscribe( data => {
        const labels = Object.keys( data )
        const values = Object.values( data )
        
        this.doughnutChartLabels = labels
        this.donutData =  values 

        console.log( this.donutData  );
        console.log( this.doughnutChartLabels  );
        
      })    
  }

  getUsersCount(){

      this.donutData = [200, 150, 300]
         
    }
}
