import { Injectable }     from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state,"--------------------------------",route);
      return this.login(state.url);
    // console.log('AuthGuard#canActivate called');
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  
  login(url)
  {
    // var data = localStorage.getItem('loggedIn');
    if(localStorage.getItem('loggedIn'))
    {
        // console.log('if')
        // this.router.navigateByUrl('/dashboard');
       return true;
        
    }
    else
    {
        // console.log('else')
        this.router.navigateByUrl('/login');
        return true;
    }
  }
  constructor(public router:Router)
  {

  }
}