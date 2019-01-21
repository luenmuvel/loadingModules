import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryRoutingModule } from './country-routing.module';

import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryService } from './services/country.service';

// En las cargas "Preloading" los Modulos "Features" son cargados asincrónicamente en background.
// Estos módulos son cargados justo despues que la aplicación ya cargó.
// Cuando disparamos la aplicación, lo primero que se carga son el AppModule y los módulos importados en él de forma ansiosa.
// Justo despues de ello, los módulos configurados para preloading son cargados de forma asincrónica.
// Preloading es útil para cargar esos Features que tienen alta probabilidad de ser visitados por el usuario
// justo despues de cargar la aplicación.
// Para configurar Preloading, Angular nos proporciona de la propiedad preloadingStrategy, la cual es usada con
// RouterModule.forRoot() en el módulo de ruteo.

// Para configurar features modules de con preloading, primero debemos configurarlo como Lazy Loading Modules.
// y luego usarlo con la estrategia In-Build de Angular llamada PreloadAllModules. Estamos activando la precarga
// de todos los módulos cargados de forma Lazy.

// Usando PreloadAllModules, todos los módulos cargados con loadChildren serán precargados. Los módulos configurados con loadChildre
// serán o bien cargados de forma LAZY o por PRELOAD, pero no ambos. Para precargar solo módulos que elijamos
// necesitamos usar una estrategia de carga personalizada.
// Una ve que hayamos configurado con la estrategia PreloadAllModules, luego de la carga de los módulos
// de carga ansiosa (Eager), Angular busca los módulos aplicables para "preload". Los módulos configurados con loadChildren
// serán aplicables para "preloading". Debemos tener cuidado de que esos módulos no sean importados en el módulo de aplicación (AppModule)
// Podemos crear una estrategia de precarga personalizada. Por eso necesitamos crear un servicio que implemente la
// interface PreloadingStrategy y sobre escriba su método preload, entonces configurar este servicio con la propiedad
// preloadingStrategy en el módulo de routing. Para seleccionar un módulo para precarga personalizada necesitamos usar
// "data" en la configuración de la ruta. data puede ser configurado como:

// data: { preload: true }

// Esto lo hacemos para la precarga selectiva de módulos.

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CountryRoutingModule,
  ],
  declarations: [
    CountryComponent,
    CountryListComponent,
  ],
  providers: [
    CountryService,
  ]
})
export class CountryModule {
  constructor() {
    console.log('Country module loaded');
  }
}
