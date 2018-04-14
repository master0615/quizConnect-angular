import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { CustomToastrService } from './shared/services/custom-toastr.service';
import { AuthGuardService } from './shared/authentication/guard.service';
import { SharedModule } from './shared/shared.module';
import { AuthenticationModule } from './shared/authentication';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
	// for development
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({

	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		SharedModule,
		AuthenticationModule,
		NgxSpinnerModule,
		
		ToastrModule.forRoot(),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		}),
	],
	declarations: [
		AppComponent,
	],
	exports: [],
	providers: [AppComponent, CustomToastrService, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
