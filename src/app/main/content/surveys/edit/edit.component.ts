import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MatDialog, MatDialogRef } from '@angular/material';

import { CustomToastrService } from '../../../../shared/services/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';


import * as SurveyKo from "survey-knockout";
import * as SurveyEditor from "surveyjs-editor";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { SurveyService } from '../../services/survey.service';
import { AppSurveyModel } from '../../models/survey.models';
import { TokenStorage } from '../../../../shared/authentication/token-storage.service';

export const PROVIDER_STAFFCONNECT = 'staffconnect';

widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.imagepicker(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
// widgets.bootstrapslider(SurveyKo);

var CkEditor_ModalEditor = {
    afterRender: function(modalEditor, htmlElement) {
        var editor = window["CKEDITOR"].replace(htmlElement);
        editor.on("change", function() {
            modalEditor.editingValue = editor.getData();
        });
        editor.setData(modalEditor.editingValue);
    },
    destroy: function(modalEditor, htmlElement) {
        var instance = window["CKEDITOR"].instances[htmlElement.id];
        if (instance) {
            instance.removeAllListeners();
            window["CKEDITOR"].remove(instance);
        }
    }
};
SurveyEditor.SurveyPropertyModalEditor.registerCustomWidget(
    "html",
    CkEditor_ModalEditor
);


@Component({
	selector: 'app-surveys-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SurveysEditComponent implements OnInit {

	editor: SurveyEditor.SurveyEditor;
	@Input() json: any;
	@Output() surveySaved: EventEmitter<Object> = new EventEmitter();
	
	survey: AppSurveyModel;
	surveyId: number;
	currentUser: any;

	constructor(
		private spinner 		: NgxSpinnerService,
		private toastrService  	: CustomToastrService,
		private surveyService	: SurveyService,
		private tokenStorage	: TokenStorage,
		private route			: ActivatedRoute,		
		private router			: Router ) {
			this.route.params.pipe().subscribe( params => {
				this.surveyId = params.id;
			} );

			this.currentUser =this.tokenStorage.getUserInfo();
	}

	ngOnInit() {
		this.getSurvey(this.surveyId);
	}

	initializeSurvey() {
        SurveyKo.JsonObject.metaData.addProperty(
			"questionbase",
			"popupdescription:text"
		);
			SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");
		
		let editorOptions = { generateValidJSON: true };
		this.editor = new SurveyEditor.SurveyEditor(
			"surveyEditorContainer",
			editorOptions
		);
		  
		this.editor.toolbox.addItem({
			name: "countries",
			isCopied: true,
			iconName: "icon-default",
			title: "All countries",
			category: "Custom",
			json: {
				"type": "dropdown",
				optionsCaption: "Select a country...",
				choicesByUrl: {
					url: "https://restcountries.eu/rest/v1/all"
				}
			}
		});
			
		this.editor.toolbox.changeCategories([
			{
				name: "panel",
				category: "Panels"
			}, {
				name: "paneldynamic",
				category: "Panels"
			}, {
				name: "matrix",
				category: "Matrix"
			}, {
				name: "matrixdropdown",
				category: "Matrix"
			}, {
				name: "matrixdynamic",
				category: "Matrix"
			}, {
				name: "barrating",
				category: "Custom"
			}, {
				name: "datepicker",
				category: "Custom"
			}, {
				name: "nouislider",
				category: "Custom"
			}, {
				name: "tagbox",
				category: "Custom"
			}, {
				name: "signaturepad",
				category: "Custom"
			}, {
				name: "sortablelist",
				category: "Custom"
			}, {
				name: "editor",
				category: "Custom"
			}
		]);
		
		this.editor.text = JSON.stringify(this.survey);
		// console.log(this.survey);
		// console.log(JSON.stringify(this.survey));
        this.editor.saveSurveyFunc = this.saveMySurvey;		
	}


	getSurvey(surveyId:number) {
		this.spinner.show();
        this.surveyService.getSurvey(surveyId).subscribe(
			res => {
				this.spinner.hide();	
				this.survey = res;
				this.initializeSurvey();
            }, err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
				this.survey = null;
				this.initializeSurvey();				
            });		
	}

	updateSurvey( survey: AppSurveyModel, isClose: boolean = false, isNew: boolean = false ){
		if ( !survey ) {
			return;
		}

		window.parent.postMessage({
			'func': 'parentFunc',
			'message': 'success'
		}, "*");

		this.spinner.show();

        this.surveyService.updateSurvey(survey)
            .subscribe(res => {
				this.spinner.hide();	
				
				survey = res;
				this.toastrService.showSuccess("This form is saved successfully!");

				if (this.currentUser.provider_name == PROVIDER_STAFFCONNECT && this.currentUser.provider_id) {
					//this.OpenThanksSaveDialog();
					return;
				}

				if (isClose) {
					this.router.navigate(['main/templates/list']);
				} 
				if (isNew) {
					//this.newTemplate();
				}
            }, err => {
				this.spinner.hide();
				this.toastrService.showError(err.error.message);
            });			
	}


	saveMySurvey = () => {
		//console.log(this.editor.text);
		let updatedSurvey: AppSurveyModel = JSON.parse(this.editor.text);
		console.log(updatedSurvey);
		updatedSurvey.share_all = this.survey.share_all;
		updatedSurvey.description = this.survey.description;
		updatedSurvey.user_id = this.survey.user_id;
		updatedSurvey.id = this.survey.id;

		this.updateSurvey(updatedSurvey);
		//this.surveySaved.emit(JSON.parse(this.editor.text));
	};

}
