import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetRoutingModule } from './pet-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
// Modules
import { MaterialModule } from "../../../material/material.module";
import { CreatePetComponent } from './components/create-pet/create-pet.component';
import { DeletePetComponent } from './components/delete-pet/delete-pet.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';


@NgModule({
  declarations: [
    CreatePetComponent,
    DeletePetComponent,
    DetailPetComponent,
    EditPetComponent,
    PetListComponent,
    PetFormComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class PetModule { }
