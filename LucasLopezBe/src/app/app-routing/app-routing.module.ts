import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptsDeBaseComponent } from '../exercices/concepts-de-base/concepts-de-base.component';
import { ExercicesComponent} from '../exercices/exercices.component';
import { CVComponent} from '../cv/cv.component';
import {TemplateDrivenComponent} from '../forms/template-driven/template-driven.component';
import {FormsComponent} from '../forms/forms.component';

const routes: Routes = [
  {
    path: 'exercices',
    component: ExercicesComponent,
  },
  {
    path: '',
    component: CVComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
