import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent, ToDoListFormDialog }  from './app.component';
import { routing }       from './app.routing';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import {Ng2DragDropModule} from "ng2-drag-drop";
import { ResourceModule } from 'ngx-resource';
import { SwapListComponent } from './components/swap-list/swap-list.component';
import {StatusFilterPipe} from './components/swap-list/statusFilterPipe';
import {OrderBy} from './components/swap-list/OrderByPipe';
import { ToDoListRes }  from './components/swap-list/ToDoService';
import {MdCardModule} from '@angular/material';
import { MaterialModule } from "@angular/material";
import {DropdownModule} from "ngx-dropdown";
@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        Ng2DragDropModule,
        ResourceModule.forRoot(),
        MaterialModule,
        DropdownModule
    ],
    declarations: [
        StatusFilterPipe,
        OrderBy,
        SwapListComponent,
        AppComponent,
        //    HeroesComponent,
        DashboardComponent,
        ToDoListFormDialog
        //HeroDetailComponent
    ],
    entryComponents: [
        ToDoListFormDialog,
    ],
    providers: [
        ToDoListRes
        //HeroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
