import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { SurveysEditComponent } from './edit.component';
import { PdfHandlerService } from '../../services/pdf-handler.service';


@NgModule({
	imports: [
		CommonModule,
		SharedModule,

	],
	exports: [
		SurveysEditComponent
	],
	declarations: [
		SurveysEditComponent,
	],
	providers:[PdfHandlerService],
})
export class SurveysEditModule { }


