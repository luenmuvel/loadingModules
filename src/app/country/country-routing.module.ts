import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country-list.component';

// cuando los módulso son cargados a demanda entonces podemos decir que están siendo llamados por
// Lazy Loading. Esto se consigue usando la propiedad loadChildren en la configuración de la ruta
// Esos módulos no deben ser importados en el módulo, de otra forma serán cargados de forma ansiosa.

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children: [
      {
        path: 'country-list',
        component: CountryListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
