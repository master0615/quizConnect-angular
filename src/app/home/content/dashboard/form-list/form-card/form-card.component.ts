import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { MatDialog } from '@angular/material';


@Component({
	selector: 'app-home-form-card',
	templateUrl: './form-card.component.html',
	styleUrls: ['./form-card.component.scss']
})

export class HomeFormCardComponent implements OnInit {

	@Input() template;
	@Output() onClickSign = new EventEmitter();
	@Output() onClickPreview = new EventEmitter();

	dialogRef: any;

	constructor(private router: Router,
				private dialog: MatDialog) {
	 }

	ngOnInit() {

	}

	clickSign(template: any) {
		this.router.navigate(['home/forms/signup',template.id]);
	}

	clickPreview(template: any) {
	}
}
