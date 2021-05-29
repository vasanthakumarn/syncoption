import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForexContainerComponent } from './components/forex-container/forex-container.component';


const routes: Routes = [
  {
    path: '',
    component: ForexContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
