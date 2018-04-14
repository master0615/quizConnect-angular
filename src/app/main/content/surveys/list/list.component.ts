import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ConfirmDialogComponent } from '../../../../shared/dialog/confirm/confirm-dialog.component';

import { CustomToastrService } from '../../../../shared/services/custom-toastr.service';
import { TokenStorage } from '../../../../shared/authentication/token-storage.service';
import { UserProfile } from '../../models/profile.models';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil';

import { AppSurveyModel } from '../../models/survey.models';
import { NgxSpinnerService } from 'ngx-spinner';
import { SurveyService } from '../../services/survey.service';

const DEFAULT_PAGE_SIZE = 5;

@Component({
	selector: 'app-surveys-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SurveysListComponent implements OnInit, OnDestroy {

	surveys:AppSurveyModel[]=[];
	selectedSurveys: AppSurveyModel[]=[];
    pageNumber: number;
    pageSize = DEFAULT_PAGE_SIZE;
    total: number;
	pageLengths = [5, 10, 20, 50, 100];
	filter:string;
	sort:string;
	dir: string;

    loadingIndicator = true;
	reorderable = true;
	
	currentUser:UserProfile;

	@ViewChild(DatatableComponent) table: DatatableComponent;

	searchControl = new FormControl();
	componentDestroyed = new Subject(); // Component Destroy

    dialogRef: any;
	confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;


	constructor(
		private spinner 		: NgxSpinnerService,		
		private toastrService  	: CustomToastrService,		
		private surveyService   : SurveyService,
		private tokenStorage 	: TokenStorage,
        public dialog			: MatDialog,
		private router			: Router
	) { 
		this.currentUser = this.tokenStorage.getUserInfo();
	}

	ngOnInit() {
		this.getAvailableSurveys();

		this.searchControl.valueChanges
			.debounceTime(300) 
			.distinctUntilChanged()  
			.takeUntil(this.componentDestroyed)
			.subscribe( filter => { 
				this.filter = filter ? filter : '';
				this.getAvailableSurveys();
			});
	}

	ngOnDestroy() {
		this.componentDestroyed.next();
		this.componentDestroyed.unsubscribe();
	}

    private getAvailableSurveys(data=null) {
		const query = {
			page_size: this.pageSize,
			filter: this.filter ? this.filter : '',
			order: this.sort ? this.sort : 'created_at',
			dir: this.dir ? this.dir : 'desc',
			...data
		}

		this.loadingIndicator = true;

        this.surveyService.getAvailableSurveys(this.currentUser.id, query)
            .subscribe(res => {
				this.loadingIndicator = false;

				this.surveys = res.data;
                this.pageSize = res.page_size;
                this.pageNumber = res.page_number;
				this.total = res.total_counts;
				
            }, err => {
				this.loadingIndicator = false;

				this.toastrService.showError(err.error.message);
            });
	}
	
    private surveyRemove(template) {
		this.spinner.show();

        this.surveyService.deleteSurvey(template.id).subscribe(
            res => {
				this.spinner.hide();				
				this.toastrService.showSuccess("The template is deleted successfully!");
				
                this.getAvailableSurveys();
            },
            err => {
				this.spinner.hide();
				this.toastrService.showError(err.error.message);
            });     
	}
	

	private createSurvey(data:any){
		this.spinner.show();

        this.surveyService.createSurvey(data).subscribe(
            res => {
				this.spinner.hide();					
				//this.toastrService.showSucess(res.message);
				const savedTemplate = res;					
				this.router.navigate(['main/surveys/edit',savedTemplate.id]);
            },
            err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
            });		
	}
	


	newSurvey(){
		this.router.navigate(['main/surveys/create']);			
	}

	viewSurvey(survey:AppSurveyModel){
		this.router.navigate(['main/surveys/view',survey.id]);
	}

	editSurvey(survey:AppSurveyModel){
		this.router.navigate(['main/surveys/edit',survey.id]);
	}

	removeSurvey(survey:AppSurveyModel) {
        this.confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
            disableClose: false
		});
		this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.surveyRemove(survey);
            }
        });		
	}

	onSelect({ selected }) {
        this.selectedSurveys.splice(0, this.selectedSurveys.length);
        this.selectedSurveys.push(...selected);
	}

	onActivate(evt) {
		
	}
	
	onSort(event) {
		this.sort = event.sorts[0].prop;
		this.dir = event.sorts[0].dir;
		this.getAvailableSurveys();
	}
	
    setPage(pageInfo) {
		this.pageNumber = pageInfo.page - 1;
        this.getAvailableSurveys({
            page_number: this.pageNumber
        });
	}

    onPageLengthChange(value) {
        this.getAvailableSurveys({page_size: value});
	}

    updateFilter(term: string) {
		this.getAvailableSurveys();
	}

	min(x, y) {
        return Math.min(x, y);
    }
}
