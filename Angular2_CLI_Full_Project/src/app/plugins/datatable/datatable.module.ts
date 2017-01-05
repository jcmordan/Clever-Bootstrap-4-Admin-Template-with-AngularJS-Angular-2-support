import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

// DataTable
import { DataTableModule }          from 'angular2-datatable';
import { HttpModule }               from '@angular/http';
import { FormsModule }              from '@angular/forms';

import { DataTableComponent }       from './datatable.component';
import {SharedModule} from "../../shared/shared.module";

//Routing
import { DatatableRoutingModule }     from './datatable-routing.module';

//
@NgModule({
    imports: [
        DatatableRoutingModule,
        CommonModule,
        DataTableModule,
        FormsModule,
        HttpModule,
        SharedModule
    ],
    declarations: [
        DataTableComponent
    ]
})
export class DatatableInitModule { }
