import { CanActivateFn, Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // uname: any= sessionStorage.getItem('username');
  let router = inject(Router);
  console.log("hello"+route+ state.url);
  if(sessionStorage.getItem('username') == null)
  {
    router.navigate(['login']);
    return false;
  }
  return true;
};
