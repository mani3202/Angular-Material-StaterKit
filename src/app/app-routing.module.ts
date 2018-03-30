import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './routes/login/login.component';
import {DashboardComponent} from './routes/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import {AuthGuard} from './services/auth-guard.service';
import {AddEmployeeComponent} from './components/add-employee/add-employee.component';
import {EmployeeInfoComponent} from './components/employee-info/employee-info.component';
export const routes: Routes = [

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        children: [
            {
              path: '',
              
              children: [
                { path: 'addEmployee', component: AddEmployeeComponent },
                { path: 'employeeInfo', component: EmployeeInfoComponent },
                { path: '', redirectTo: 'employeeInfo',pathMatch: 'full' }
              ]
            }
          ]
    },
    {
        path: '**',
        redirectTo: ''
    }
 ];
 
 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
 })
 export class AppRoutingModule { }
 
