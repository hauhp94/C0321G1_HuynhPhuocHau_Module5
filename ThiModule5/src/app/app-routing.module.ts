import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {ListSavingComponent} from './SavingManager/list-saving/list-saving.component';
import {EditSavingComponent} from './SavingManager/edit-saving/edit-saving.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'saving/list', component: ListSavingComponent},
  {path: 'saving/edit/:id', component: EditSavingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
