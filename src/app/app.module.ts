

/* Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialComponentsModule} from './material-components.module'
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
/* components*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {AddEmployeeComponent} from './components/add-employee/add-employee.component';
import {EmployeeInfoComponent} from './components/employee-info/employee-info.component';

/* services*/
import {AuthGuard} from './services/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    AddEmployeeComponent,
    EmployeeInfoComponent

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
