import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptsDeBaseComponent } from '../exercices/concepts-de-base/concepts-de-base.component';
import { ExercicesComponent} from '../exercices/exercices.component';
import { CVComponent} from '../cv/cv.component';

const routes: Routes = [
  {
    path: 'exercices',
    component: ExercicesComponent,
  },
  {
    path: '',
    component: CVComponent,
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
