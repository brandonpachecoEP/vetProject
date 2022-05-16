import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// Interfaces
import { PetInterface } from "../interfaces/pet.interface";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";


const uri = environment.API_PETS;

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<PetInterface[]> {
    return this.http.get<PetInterface[]>(`${uri}`)
  }

  findOneOwner(id: number): Observable<PetInterface> {
    return this.http.get<PetInterface>(`${uri}/${id}`)
  }

  createPet(body: PetInterface): Observable<PetInterface> {
    return this.http.post<PetInterface>(`${uri}`, body);
  }

  updatePet(id: string, body: PetInterface): Observable<PetInterface> {
    return this.http.patch<PetInterface>(`${uri}/${id}`, body)
  }

  deletePet(id: number): Observable<PetInterface> {
    return this.http.delete<PetInterface>(`${uri}/${id}`)
  }

  getPetsWithOwnerId(id: number): Observable<PetInterface> {
    return this.http.get<PetInterface>(`${uri}/${id}`)
  }

}
