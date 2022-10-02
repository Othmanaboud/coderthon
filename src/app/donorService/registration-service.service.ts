import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DonorLogin } from '../classes/donor-login';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private htpp:HttpClient) { }
  public loginDonor(login:DonorLogin):Observable<any>{
    return this.htpp.post<any>("http://localhost:8080/logindoner",login); 
  }
  public registerDonor(login:DonorLogin):Observable<any>{
    return this.htpp.post<any>("http://localhost:8080/registdoner",login);
  }
  handleError(error:Response){

  }
}
