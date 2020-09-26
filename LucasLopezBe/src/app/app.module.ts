import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ConceptsDeBaseComponent } from './exercices/concepts-de-base/concepts-de-base.component';
import { CdbExercice1Component } from './exercices/concepts-de-base/cdb-exercice1/cdb-exercice1.component';
import { CdbExercice2Component } from './exercices/concepts-de-base/cdb-exercice2/cdb-exercice2.component';
import { CdbExercice3Component } from './exercices/concepts-de-base/cdb-exercice3/cdb-exercice3.component';
import { CdbExercice4Component } from './exercices/concepts-de-base/cdb-exercice4/cdb-exercice4.component';
import { CdbExercice5Component } from './exercices/concepts-de-base/cdb-exercice5/cdb-exercice5.component';
import { CdbExercice6Component } from './exercices/concepts-de-base/cdb-exercice6/cdb-exercice6.component';
import {FormsModule} from '@angular/forms';
import { ExercicesComponent } from './exercices/exercices.component';
import { CVComponent } from './cv/cv.component';
import { CvFooterComponent } from './cv/cv-footer/cv-footer.component';
import { CvIntroComponent } from './cv/cv-intro/cv-intro.component';
import { CvEtudesComponent } from './cv/cv-etudes/cv-etudes.component';
import { CvCompetencesComponent } from './cv/cv-competences/cv-competences.component';
import { CvRealisationsComponent } from './cv/cv-realisations/cv-realisations.component';
import { CvExperiencesComponent } from './cv/cv-experiences/cv-experiences.component';
import { CvContactComponent } from './cv/cv-contact/cv-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ConceptsDeBaseComponent,
    CdbExercice1Component,
    CdbExercice2Component,
    CdbExercice3Component,
    CdbExercice4Component,
    CdbExercice5Component,
    CdbExercice6Component,
    ExercicesComponent,
    CVComponent,
    CvFooterComponent,
    CvIntroComponent,
    CvEtudesComponent,
    CvCompetencesComponent,
    CvRealisationsComponent,
    CvExperiencesComponent,
    CvContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
