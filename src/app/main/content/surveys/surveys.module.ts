import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { SurveysRoutingModule } from './surveys.routing.module';

import { SurveysComponent } from './surveys.component';
import { SurveyService } from '../services/survey.service';
import { SurveysListModule } from './list/list.module';
import { SurveysCreateModule } from './create/create.module';
import { SurveysEditModule } from './edit/edit.module';
import { SurveysViewModule } from './view/view.module';


@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		SurveysRoutingModule,
		SurveysListModule,
		SurveysCreateModule,
		SurveysEditModule,
		SurveysViewModule
	],
	exports: [
		SurveysComponent
	],
	declarations: [
		SurveysComponent
	],
	providers:[SurveyService]
})
export class SurveysModule { }	


