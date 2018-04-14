import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveysListComponent } from './list/list.component';
import { SurveysCreateComponent } from './create/create.component';
import { SurveysEditComponent } from './edit/edit.component';
import { SurveysViewComponent } from './view/view.component';

export const routes: Routes = [
	{ path: 'list', component: SurveysListComponent },
	{ path: 'create', component: SurveysCreateComponent },
	{ path: 'edit/:id', component: SurveysEditComponent },
	{ path: 'view/:id', component: SurveysViewComponent },	
	{ path: '**', redirectTo:'list'}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule ]
})
export class SurveysRoutingModule {}