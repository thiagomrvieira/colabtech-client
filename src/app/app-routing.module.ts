import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistersComponent } from './registers/registers.component';


const routes: Routes = [
  { path: 'registros', component: RegistersComponent },
  { path: '', redirectTo: 'registros', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
