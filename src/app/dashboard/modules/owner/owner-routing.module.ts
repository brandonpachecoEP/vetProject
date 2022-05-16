import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { OwnerListComponent } from "./components/owner-list/owner-list.component";
import { OwnerCreateComponent } from "./components/owner-create/owner-create.component";
import { OwnerEditComponent } from "./components/owner-edit/owner-edit.component";

const routes: Routes = [
  {
    path: '',
    component: OwnerListComponent,
  },
  {
    path: 'create',
    component: OwnerCreateComponent,
  },
  {
    path: 'edit/:id',
    component: OwnerEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
