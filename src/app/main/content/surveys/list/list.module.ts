import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { SurveysListComponent } from './list.component';
import { SurveyService } from '../../services/survey.service';


@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [
		SurveysListComponent
	],
	declarations: [
		SurveysListComponent
	],
	entryComponents: [
    ],
	providers:[SurveyService]
})
export class SurveysListModule { }


