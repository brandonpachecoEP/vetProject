import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// Interfaces
import { OwnerInterface } from "../interfaces/owner.interface";
// Env
import { environment } from "../../../../../environments/environment";
import {Observable} from "rxjs";

const uri = environment.API_OWNERS

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getAllOwners(): Observable<OwnerInterface[]> {
    return this.http.get<OwnerInterface[]>(`${uri}`)
  }

  findOneOwner(id: number): Observable<OwnerInterface> {
    return this.http.get<OwnerInterface>(`${uri}/${id}`)
  }

  createOwner(body: OwnerInterface): Observable<OwnerInterface> {
    return this.http.post<OwnerInterface>(`${uri}`, body);
  }

  updateOwner(id: string, body: OwnerInterface): Observable<OwnerInterface> {
    return this.http.patch<OwnerInterface>(`${uri}/${id}`, body)
  }

  deleteOwner(id: number): Observable<OwnerInterface> {
    return this.http.delete<OwnerInterface>(`${uri}/${id}`)
  }

}
