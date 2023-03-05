import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  public host:string="http://localhost:8080"

  public cin: string | undefined ="";
  constructor(private http:HttpClient) {
  }

  public setCin(cin?:string){
    this.cin=cin;
  }
  public getCitizenByCin() {
    return this.http.get(this.host+"/citizens/"+this.cin)
  }


 public createCitizen(formData: FormData): Observable<any> {
    return this.http.post(`${this.host+"/citizens"}`, formData);
  }


}
