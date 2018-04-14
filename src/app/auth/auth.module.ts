import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { AuthLoginModule } from './login/login.module';
import { AuthRegisterModule } from './register/register.module';
import { UserService } from './services/user.service';


@NgModule({
	imports: [
		AuthRoutingModule,
		AuthLoginModule,
		AuthRegisterModule,
	],
	declarations:[
		AuthComponent,
	],
	providers:[UserService],
	exports:[AuthComponent],
	entryComponents: []  
})

export class AuthModule{
}
