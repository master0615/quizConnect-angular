import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { MatDialogRef } from '@angular/material';

import * as _ from 'lodash';
import { PdfHandlerService } from '../../services/pdf-handler.service';
import { CustomToastrService } from '../../../../shared/services/custom-toastr.service';
import { Router } from '@angular/router';
import { TokenStorage } from '../../../../shared/authentication/token-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { SurveyService } from '../../services/survey.service';
import { AppSurveyModel } from '../../models/survey.models';


@Component({
    selector   : 'app-surveys-create',
    templateUrl: './create.component.html',
    styleUrls  : ['./create.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SurveysCreateComponent implements OnInit
{

    currentUser:any;
    form: FormGroup;

    constructor(
        private spinner             : NgxSpinnerService,
        private _location           : Location,
        private formBuilder         : FormBuilder,
        private pdfHandlerService   : PdfHandlerService,
        private surveyService       : SurveyService,
		private toastrService  	    : CustomToastrService,
        private tokenStorage 	    : TokenStorage,
        private router			    : Router
    )
    {
    }

	ngOnInit() {
        this.form = this.formBuilder.group({
            title       : ['', [Validators.required]],
            description : ['', []]
        });
	}
    private createSurvey(survey: AppSurveyModel){
		this.spinner.show();

        this.surveyService.createSurvey(survey).subscribe(
            res => {
				this.spinner.hide();					
				//this.toastrService.showSucess(res.message);
				const savedSurvey = res;					
				this.router.navigate(['main/surveys/edit',savedSurvey.id]);
            },
            err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
            });		
    }

    create() {
        if(this.currentUser == null) {
            this.currentUser = this.tokenStorage.getUserInfo();
        }
        const title = this.form.getRawValue().title;
        const description = this.form.getRawValue().description;
        
        let newSurvey: AppSurveyModel = new AppSurveyModel();
        newSurvey.title = title;
        newSurvey.description = description;
        newSurvey.user_id = this.currentUser.id;
        newSurvey.share_all = false;

        this.createSurvey(newSurvey);
    }

    back() {
        this._location.back();
    }
}
