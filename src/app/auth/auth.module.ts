import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../auth/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AngularMatModule } from '../shared/angular-material.module';
import { CommonFormModule } from '../shared/form.module';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../auth/services/in-memory-data.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, TestComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AngularMatModule, CommonFormModule, BrowserModule, BrowserAnimationsModule
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
