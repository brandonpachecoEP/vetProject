import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
// Components
import { OwnerDetailComponent } from './components/owner-detail/owner-detail.component';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { OwnerCreateComponent } from './components/owner-create/owner-create.component';
// Modules
import { MaterialModule } from "../../../material/material.module";
import { OwnerFormComponent } from './components/owner-form/owner-form.component';
import { OwnerEditComponent } from './components/owner-edit/owner-edit.component';
import { OwnerDeleteComponent } from './components/owner-delete/owner-delete.component';


@NgModule({
  declarations: [
    OwnerDetailComponent,
    OwnerListComponent,
    OwnerCreateComponent,
    OwnerFormComponent,
    OwnerEditComponent,
    OwnerDeleteComponent
  ],
    imports: [
        CommonModule,
        OwnerRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
})
export class OwnerModule { }
