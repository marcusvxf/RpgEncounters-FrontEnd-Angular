import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environment/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let request = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + environment.api_key),
  });
  return next(request);
};
