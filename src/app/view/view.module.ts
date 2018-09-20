import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { JqxBarGaugeComponent } from './jqx-bar-gauge/jqx-bar-gauge.component';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { JqxChartComponent } from './jqx-chart/jqx-chart.component';
import {jqxChartComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { JqxTextAreaComponent } from './jqx-text-area/jqx-text-area.component'
import {jqxTextAreaComponent} from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea";
import { JqxGridComponent } from './jqx-grid/jqx-grid.component';
import { jqxGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid";
import { JqxDataTableComponent } from './jqx-data-table/jqx-data-table.component';
import { jqxDataTableComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable";
import { JqxTreeMapComponent } from './jqx-tree-map/jqx-tree-map.component';
import { jqxTreeMapComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreemap";
import { JqxTreeComponent } from './jqx-tree/jqx-tree.component';
import { jqxTreeComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtree";
import { jqxExpanderComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ViewRoutingModule,
    FormsModule
    
  ],
  declarations: [
    ViewComponent,
    JqxBarGaugeComponent,
    jqxBarGaugeComponent, 
    JqxChartComponent,
    jqxChartComponent, 
    JqxTextAreaComponent,
    jqxTextAreaComponent,
    JqxGridComponent,
    jqxGridComponent, 
    JqxDataTableComponent,
    jqxDataTableComponent, 
    JqxTreeMapComponent,
    jqxTreeMapComponent,
    JqxTreeComponent,
    jqxTreeComponent,
    jqxExpanderComponent
  ]
})
export class ViewModule { }
