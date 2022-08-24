import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';

const routes: Routes = [
  {
    path: 'bars',
    component: BarsComponent
  },
  {
    path: 'donut',
    component: DonutComponent
  },
  {
    path: 'donut-http',
    component:  DonutHttpComponent
  },
  {
    path: 'double-bars',
    component: DoubleBarsComponent
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  },
  {
    path: '**',
    redirectTo: 'donut'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
