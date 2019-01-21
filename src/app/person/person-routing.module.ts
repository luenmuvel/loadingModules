
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';

const personRoutes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
    children: [
      {
        path: 'person-list',
        component: PersonListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(personRoutes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
