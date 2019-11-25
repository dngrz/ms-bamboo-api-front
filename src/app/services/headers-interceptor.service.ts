import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Accept-Encoding', 'gzip, deflate');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Cache-Control', 'no-cache');
    headers.append('Connection', 'keep-alive');
    headers.append('Host', 'localhost:8085');
    headers.append('Origin', 'localhost:8085');
    headers.append('User-Agent', 'PostmanRuntime/7.19.0');
    headers.append('cache-control', 'no-cache');


    const tokenizeRequest = req.clone({
      setHeaders:headers
    });
    return next.handle(tokenizeRequest);
  }
}
