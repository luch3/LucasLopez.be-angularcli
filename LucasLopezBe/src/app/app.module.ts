import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { AnimateOnScrollModule} from 'ng2-animate-on-scroll';


import { AppComponent } from './app.component';
import { ConceptsDeBaseComponent } from './exercices/concepts-de-base/concepts-de-base.component';
import { CdbExercice1Component } from './exercices/concepts-de-base/cdb-exercice1/cdb-exercice1.component';
import { CdbExercice2Component } from './exercices/concepts-de-base/cdb-exercice2/cdb-exercice2.component';
import { CdbExercice3Component } from './exercices/concepts-de-base/cdb-exercice3/cdb-exercice3.component';
import { CdbExercice4Component } from './exercices/concepts-de-base/cdb-exercice4/cdb-exercice4.component';
import { CdbExercice5Component } from './exercices/concepts-de-base/cdb-exercice5/cdb-exercice5.component';
import { CdbExercice6Component } from './exercices/concepts-de-base/cdb-exercice6/cdb-exercice6.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExercicesComponent } from './exercices/exercices.component';
import { CVComponent } from './cv/cv.component';
import { CvFooterComponent } from './cv/cv-footer/cv-footer.component';
import { CvIntroComponent } from './cv/cv-intro/cv-intro.component';
import { CvEtudesComponent } from './cv/cv-etudes/cv-etudes.component';
import { CvCompetencesComponent } from './cv/cv-competences/cv-competences.component';
import { CvRealisationsComponent } from './cv/cv-realisations/cv-realisations.component';
import { CvExperiencesComponent } from './cv/cv-experiences/cv-experiences.component';
import { CvContactComponent } from './cv/cv-contact/cv-contact.component';
import { CvPresentationComponent } from './cv/cv-presentation/cv-presentation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CvNavbarComponent } from './cv/cv-navbar/cv-navbar.component';
import {CvWipComponent} from './cv/cv-wip/cv-wip.component';
import { CdbExercice7Component } from './exercices/concepts-de-base/cdb-exercice7/cdb-exercice7.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertModule} from 'ngx-bootstrap/alert';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { FormsExercice1Component } from './exercices/forms/forms-exercice1/forms-exercice1.component';
import { FormsExercice2Component } from './exercices/forms/forms-exercice2/forms-exercice2.component';
import { FormsExercice3Component } from './exercices/forms/forms-exercice3/forms-exercice3.component';
import {FormsComponent} from './exercices/forms/forms.component';
import { DisplayServiceComponent } from './display-service/display-service.component';
import { ServicesComponent } from './exercices/services/services.component';
import { ServExercice1Component } from './exercices/services/serv-exercice1/serv-exercice1.component';
import { ServExercice2Component } from './exercices/services/serv-exercice2/serv-exercice2.component';
import { LoginComponent } from './exercices/services/serv-exercice2/login/login.component';
import { HeaderComponent } from './exercices/services/serv-exercice2/header/header.component';
import { CExercice1Component } from './exercices/communication/c-exercice1/c-exercice1.component';
import { CExercice2Component } from './exercices/communication/c-exercice2/c-exercice2.component';
import { CExercice3Component } from './exercices/communication/c-exercice3/c-exercice3.component';
import { CExercice4Component } from './exercices/communication/c-exercice4/c-exercice4.component';
import { EnfantExercice1Component } from './exercices/communication/c-exercice1/enfant-exercice1/enfant-exercice1.component';
import { EnfantExercice3Component } from './exercices/communication/c-exercice3/enfant-exercice3/enfant-exercice3.component';
import {EnfantExercice2Component} from './exercices/communication/c-exercice2/enfant-exercice2/enfant-exercice2.component';
import {CommunicationComponent} from './exercices/communication/communication.component';
import {CustomerContainerComponent} from './exercices/communication/c-exercice4/customer-container/customer-container.component';
import {CustomersListComponent} from './exercices/communication/c-exercice4/customers-list/customers-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { GenerateArrayPipe } from './pipes/generate-array.pipe';

library.add(fas);

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
    CvContactComponent,
    CvPresentationComponent,
    CvNavbarComponent,
    CvWipComponent,
    CdbExercice7Component,
    FormsComponent,
    FormsExercice1Component,
    FormsExercice2Component,
    FormsExercice3Component,
    DisplayServiceComponent,
    ServicesComponent,
    ServExercice1Component,
    ServExercice2Component,
    LoginComponent,
    HeaderComponent,
    CommunicationComponent,
    CExercice1Component,
    CExercice2Component,
    CExercice3Component,
    CExercice4Component,
    EnfantExercice1Component,
    EnfantExercice3Component,
    EnfantExercice2Component,
    CustomerContainerComponent,
    CustomersListComponent,
    PipesComponent,
    GenerateArrayPipe,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        FontAwesomeModule,
        AnimateOnScrollModule.forRoot(),
        AlertModule.forRoot(),
        NgbModule,
        BrowserAnimationsModule,
        CollapseModule,
        CarouselModule.forRoot(),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
