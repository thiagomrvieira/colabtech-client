import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistersComponent } from './registers/registers.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';



const routes: Routes = [
  { path: 'registros', component: RegistersComponent },
  { path: 'registros/:id', component: RegisterDetailsComponent },
  { path: '', redirectTo: 'registros', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
