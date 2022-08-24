import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';

import { BarGraphicComponent } from './components/bar-graphic/bar-graphic.component';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutGraphicComponent } from './components/donut-graphic/donut-graphic.component';
import { PieGraphicComponent } from './components/pie-graphic/pie-graphic.component';
import { PieChartComponent } from './pages/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutComponent,
    DonutHttpComponent,
    BarGraphicComponent,
    DonutGraphicComponent,
    PieGraphicComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    GraphicsRoutingModule
  ]
})
export class GraphicsModule { }
