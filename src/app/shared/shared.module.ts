import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../material.module';
import { InfoComponent } from './info/info.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule( {
    declarations: [
        NavigationComponent,
        InfoComponent
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