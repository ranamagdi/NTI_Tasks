import { inject } from '@angular/core';
import { CanActivateFn ,Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

export const canActivateGuard: CanActivateFn = (route, state) => {
  let token=localStorage.getItem('token')
  if(!token){
    const route=inject(Router)
    const auth=inject(AuthService)
    const toastr=inject(ToastrService)
    toastr.warning('You Should login first');
    route.navigateByUrl('/login')
    return false
  }

  return true
};
