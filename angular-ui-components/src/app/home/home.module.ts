import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IgxGridModule } from 'igniteui-angular';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    IgxGridModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
