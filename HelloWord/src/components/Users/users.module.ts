import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Users } from './users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Users
  ],
  exports: [
    Users
  ]
})
export class UsersModule { }
