import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConceptsDeBaseComponent } from './concepts-de-base/concepts-de-base.component';
import { CdbExercice1Component } from './concepts-de-base/cdb-exercice1/cdb-exercice1.component';
import { CdbExercice2Component } from './concepts-de-base/cdb-exercice2/cdb-exercice2.component';
import { CdbExercice3Component } from './concepts-de-base/cdb-exercice3/cdb-exercice3.component';
import { CdbExercice4Component } from './concepts-de-base/cdb-exercice4/cdb-exercice4.component';
import { CdbExercice5Component } from './concepts-de-base/cdb-exercice5/cdb-exercice5.component';
import { CdbExercice6Component } from './concepts-de-base/cdb-exercice6/cdb-exercice6.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConceptsDeBaseComponent,
    CdbExercice1Component,
    CdbExercice2Component,
    CdbExercice3Component,
    CdbExercice4Component,
    CdbExercice5Component,
    CdbExercice6Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
