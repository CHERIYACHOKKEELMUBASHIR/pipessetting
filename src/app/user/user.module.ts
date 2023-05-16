import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertableComponent } from './usertable/usertable.component';
import {  HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PipePipe } from './pipe.pipe';
import { PipesPipe } from './pipes.pipe';
import { PipessPipe } from './pipess.pipe';


@NgModule({
  declarations: [
    UsertableComponent,
    PipePipe,
    PipesPipe,
    PipessPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class UserModule { }
