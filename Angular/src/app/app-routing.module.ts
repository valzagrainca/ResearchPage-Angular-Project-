import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentComponent } from './components/employment/employment/employment.component';
import { TrendsComponent } from './components/trends/trends/trends.component';

const routes: Routes = [
  {path:'',redirectTo:'Trends',pathMatch:'full'},
  {path:'Trends',component:TrendsComponent},
  {path:'Employment',component:EmploymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
