import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { IgxGridModule } from 'igniteui-angular';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    IgxGridModule
  ]
})
export class DemoModule { }
