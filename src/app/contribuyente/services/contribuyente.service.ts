import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {ResponseContribuyentes} from "../../response/contribuyenteResponse";
import { ResponseComprobanteFiscal } from 'src/app/response/comprobanteFiscalResponse';

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {

  private baseURLContribuyente = "https://localhost:44358/api/Contribuyente/";

  private baseURLComprobantesFiscales = "https://localhost:44358/api/ComprobantesFiscales/";


  private error = throwError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  getAllContribuyentes(): Observable<ResponseContribuyentes[]> {
    return this.httpClient.get<ResponseContribuyentes[]>(this.baseURLContribuyente + 'ListSelectContribuyente')
    .pipe(
      catchError(this.error)
    )}


    findComprobanteFiscalesByIdentifier(identifier): Observable<ResponseComprobanteFiscal[]>{
      return this.httpClient.get<ResponseComprobanteFiscal[]>(this.baseURLComprobantesFiscales + 'GetComprobantesFiscalesByIdentifier/' + identifier)
      .pipe(
        catchError(this.errorHandler)
      )}


    errorHandler(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }


}
