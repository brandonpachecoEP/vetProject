import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from "./components/pet-list/pet-list.component";
import { CreatePetComponent } from "./components/create-pet/create-pet.component";
import { EditPetComponent } from "./components/edit-pet/edit-pet.component";

const routes: Routes = [
  {
    path: '',
    component: PetListComponent,
  },
  {
    path: 'create',
    component: CreatePetComponent,
  },
  {
    path: 'edit/:id',
    component: EditPetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
