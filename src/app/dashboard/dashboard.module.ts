import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PaginationModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FileUploadModule } from 'ng2-file-upload';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TooltipModule, DatepickerModule} from 'ng2-bootstrap';
import { FxDatepickerComponent }     from './datepicker.component';
import { SelectModule } from 'ng2-select';
//import { RlTagInputModule } from 'angular2-tag-input';
import { TagInputModule } from 'ng2-tag-input';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClickOutsideModule}   from './ng2-click-outside.module';

import { NavComponent } from './nav.component';
//import { DashboardComponent } from './dashboard.component';
import { BookM_shopM_dataTableComponent } from '../charts/lineCharts/book-m_shop-m_data-table.component';
import { Shop_bookM_dataChartsComponent } from '../charts/lineCharts/shop_book-m_data.component';
import { M_shop_bookM_dataChartsComponent } from '../charts/lineCharts/m_shop_book-m_data.component';
import { MonitorComponent } from '../charts/lineCharts/monitor.component';
//import { pieChartsComponent } from '../charts/pieCharts/pieCharts.component';
//import { DatatableComponent } from '../tables/datatable/datatable.component';
//import { BootstrapComponent } from '../bootstraps/static/bootstrap.component';
//import { PluginComponent } from '../bootstraps/plugin/plugin.component';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from '../_services/auth.guard';

const tablesRoutes: Routes = [
    {
        //path:'main/:id',
        path: 'main',
        //path:'',
        component: NavComponent,
        children: [
            //{ path: '', component: DashboardComponent },
            //{ path: 'dashboard', component: DashboardComponent },
            { path: 'bookM_shopM_dataTable', component: BookM_shopM_dataTableComponent, canActivate: [AuthGuard] },
            { path: 'shop_bookM_dataCharts', component: Shop_bookM_dataChartsComponent, canActivate: [AuthGuard] },
            { path: 'm_shop_bookM_dataCharts', component: M_shop_bookM_dataChartsComponent, canActivate: [AuthGuard] },
            { path: 'monitor', component: MonitorComponent, canActivate: [AuthGuard] },
            //{ path: 'pieCharts', component: pieChartsComponent },
            //{ path: 'datatable', component: DatatableComponent },
            //{ path: 'bootstrap-static', component: BootstrapComponent },
            //{ path: 'bootstrap-plugin', component: PluginComponent }
        ]
    }
]


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(tablesRoutes),
        ChartsModule,
        PaginationModule,
        Ng2SmartTableModule,
        FileUploadModule,
        SelectModule,
        TagInputModule,
        //BrowserAnimationsModule,
        BrowserModule, TooltipModule, ModalModule.forRoot(), DatepickerModule.forRoot(), ClickOutsideModule

    ],
    declarations: [
        FxDatepickerComponent,
        NavComponent,
        //DashboardComponent,
        BookM_shopM_dataTableComponent,
        M_shop_bookM_dataChartsComponent,
        Shop_bookM_dataChartsComponent,
        MonitorComponent,
        //pieChartsComponent,
        //DatatableComponent,
        //BootstrapComponent,
        //PluginComponent
    ],

    providers: [
        AuthGuard, ...AUTH_PROVIDERS
    ]
})
export class DashboardModule { }