import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './examples/button/button.component';
import { TabsComponent } from './examples/tabs/tabs.component';


const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'tabs', component: TabsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'button' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
