import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { HomeDashBoardComponent } from './dashboard.component';
import { HomeFormListModule } from './form-list/form-list.module';
import { HomeDashBoardRoutingModule } from './dashboard.routing.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		HomeDashBoardRoutingModule,
		HomeFormListModule
	],
	exports: [
		HomeDashBoardComponent
	],
	declarations: [
		HomeDashBoardComponent
	]
})
export class HomeDashboardModule { }


