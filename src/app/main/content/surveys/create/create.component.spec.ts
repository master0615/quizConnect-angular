import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysCreateComponent } from './create.component';

describe('SurveysCreateComponent', () => {
	let component: SurveysCreateComponent;
	let fixture: ComponentFixture<SurveysCreateComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [ SurveysCreateComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SurveysCreateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
