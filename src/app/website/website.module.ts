import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './pages/home/home.component';

const websiteRoutes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(websiteRoutes)
  ]
})
export class WebsiteModule { }
