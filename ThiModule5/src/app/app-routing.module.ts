import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {ListSavingComponent} from './saving-manager/list-saving/list-saving.component';
import {EditSavingComponent} from './saving-manager/edit-saving/edit-saving.component';
import {ChartDemoComponent} from './chart/chart-demo/chart-demo.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'saving/list', component: ListSavingComponent},
  {path: 'saving/edit/:id', component: EditSavingComponent},
  {path: 'chart', component: ChartDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
