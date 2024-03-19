import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'persona/index', pathMatch: 'full'},
  { path: 'contribuyente/index', component: IndexComponent },
  { path: 'contribuyente/:rncCedula/edit', component: EditComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContribuyenteRoutingModule { }
