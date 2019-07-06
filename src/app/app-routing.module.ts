import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AguasAndinasComponent } from './views/aguas-andinas/aguas-andinas.component';
import { EnelComponent } from './views/enel/enel.component';

const routes: Routes = [
  { path: 'aguas-andinas', component: AguasAndinasComponent },
  { path: 'enel', component: EnelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
