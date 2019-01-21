import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';

import { PersonService } from './services/person.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PersonComponent,
    PersonListComponent,
  ],
  providers: [
    PersonService,
  ]
})
export class PersonModule {
  constructor() {
    console.log('Person module loaded');
  }
}
