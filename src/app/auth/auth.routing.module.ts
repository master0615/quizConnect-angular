import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
				{ path: '', redirectTo:'login' },
				{ path: 'login',              loadChildren: './login/login.module#AuthLoginModule' },
				{ path: 'register',           loadChildren: './register/register.module#AuthRegisterModule' },
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ]
})
export class AuthRoutingModule {}