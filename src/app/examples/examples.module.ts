import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from '../material.module';
import { TabsComponent } from './tabs/tabs.component';

@NgModule( {
    declarations: [
        ButtonComponent,
        TabsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [

    ],
    providers: [],
} )
export class ExamplesModule { }