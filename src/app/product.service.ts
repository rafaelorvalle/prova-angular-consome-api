import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
    providedIn: 'root'
  })
export class ProductService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:3000';

  baseurlFakeApi = "https://freetestapi.com/api/v1/cats"

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // GET
   getProducts(): Observable<Product>{
    return this.http.get<Product>(this.baseurlFakeApi).pipe(retry(1),catchError(this.errorHandl))

  }

  

  errorHandl(error:any){
    let errorMessage = ''
    // o erro está vindo do front
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      // erro que veio da API
      errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage
    })
  }






}

