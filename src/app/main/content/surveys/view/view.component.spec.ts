import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysViewComponent } from './view.component';

describe('SurveysViewComponent', () => {
	let component: SurveysViewComponent;
	let fixture: ComponentFixture<SurveysViewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [ SurveysViewComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SurveysViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
