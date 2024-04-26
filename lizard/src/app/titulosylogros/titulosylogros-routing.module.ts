import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

import { TitulosylogrosPage } from './titulosylogros.page';

const routes: Routes = [
  {
    path: '',
    component: TitulosylogrosPage,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitulosylogrosPageRoutingModule {}
