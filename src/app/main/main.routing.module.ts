import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

export const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{ path: 'surveys',		loadChildren: './content/surveys/surveys.module#SurveysModule' },
			{ path: 'profile/:id',  loadChildren: './content/profile/profile.module#ProfileModule' },
			{ path: 'users',    	loadChildren: './content/users/users.module#UsersModule' },

		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule ]
})
export class MainRoutingModule {}