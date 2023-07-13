import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibilidadComponent } from './disponibilidad.component';

const routes: Routes = [{ path: '', component: DisponibilidadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisponibilidadRoutingModule { }
