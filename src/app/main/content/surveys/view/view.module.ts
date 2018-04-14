import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { SurveysViewComponent } from './view.component';

import { PdfGenerationService } from '../../services/pdf-generation.service';

@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [
		SurveysViewComponent
	],
	declarations: [
		SurveysViewComponent,
	],
	providers:[]
})
export class SurveysViewModule { }


