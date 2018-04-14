import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { HomeFormListComponent } from './form-list.component';
import { HomeFormCardComponent } from './form-card/form-card.component';
import { HomeService } from '../../../home.service';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
	],
	exports: [
		HomeFormListComponent
	],
	declarations: [
		HomeFormListComponent,
		HomeFormCardComponent
	],
	providers: [HomeService]
})
export class HomeFormListModule { }