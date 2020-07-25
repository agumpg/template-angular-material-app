import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../material.module';
import { InfoComponent } from './info/info.component';
import { AppRoutingModule } from '../app-routing.module';
import { RemedyComponent } from './info/remedy/remedy.component';

@NgModule( {
    declarations: [
        NavigationComponent,
        InfoComponent,
        RemedyComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule
    ],
    exports: [
        NavigationComponent
    ],
    providers: [],
} )
export class SharedModule { }