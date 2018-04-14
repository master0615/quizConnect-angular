import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../home.service';
import { CustomToastrService } from '../../../../shared/services/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';


const DEFAULT_PAGE_SIZE = 8;

@Component({
	selector: 'app-home-form-list',
	templateUrl: './form-list.component.html',
	styleUrls: ['./form-list.component.scss']
})
export class HomeFormListComponent implements OnInit, AfterViewInit {


	pageNumber: number = 0;
	pageSize = DEFAULT_PAGE_SIZE;
	total: number;
	templateForms:any[] = [];

	constructor(		
		private spinner			: NgxSpinnerService,
		private homeService	   	: HomeService,
		private toastrService  	: CustomToastrService,
		private router			: Router) { 

	 }

	ngOnInit() {
		this.getSharedForms();
	}

	ngAfterViewInit() {
	}

    private getSharedForms(data=null) {
		const query = {
			page_size: this.pageSize,
			page_number: this.pageNumber,
			...data
		}
		this.spinner.show();
        this.homeService.getSharedForms(query)
            .subscribe(res => {
				this.spinner.hide();	
				res.data.forEach( template => {
					this.templateForms.push(template);
				});

                this.pageSize = res.page_size;
                this.pageNumber = res.page_number;
				this.total = res.total_counts;

            }, err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
            });
	}

	showMore() {
		this.pageNumber++;
		this.getSharedForms();
	}
	
	canShowMore() {
		return this.total > this.pageSize * (this.pageNumber + 1);
	}
	
	search(filter: string) {
		this.templateForms = [];
		this.pageNumber = 0;
		this.getSharedForms( {filter : filter});
	}
}
