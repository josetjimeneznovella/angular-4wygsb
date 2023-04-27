import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IPassenger } from "./passenger.model";

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http: HttpClient) { }

  findAll(page: number, size: number): Observable<IPassenger> {

    return this.http.post<IPassenger>(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`, { page, size });

  }

}