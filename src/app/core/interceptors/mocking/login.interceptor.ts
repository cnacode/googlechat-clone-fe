import {
  HttpSentEvent,
  HttpUserEvent,
  HttpProgressEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaderResponse,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface AuthenticationResponse {
  user: { id: Number; firstName: String; lastName: String; token: String };
}

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (req.url.endsWith('/authentication') && req.method == 'POST') {
      return new Observable(observer => {
        observer.next(
          new HttpResponse<AuthenticationResponse>({
            body: {
              user: {
                id: 1,
                firstName: 'Sina',
                lastName: 'Montazeri',
                token: 'thisisasampletoken'
              }
            },
            status: 200
          })
        );
        observer.complete();
      });
    }

    // pass through other requests.
    return next.handle(req);
  }
}
