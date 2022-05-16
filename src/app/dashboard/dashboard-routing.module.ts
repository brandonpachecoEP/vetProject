import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo:'owners',
        pathMatch: 'full',
      },
      {
        path: 'owners',
        loadChildren: () => import('./modules/owner/owner.module').then(m => m.OwnerModule),
      },
      {
        path: 'pets',
        loadChildren: () => import('./modules/pet/pet.module').then(m => m.PetModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
