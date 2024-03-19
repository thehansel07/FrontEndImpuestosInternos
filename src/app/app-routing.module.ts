import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './contribuyente/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'contribuyente/index', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
