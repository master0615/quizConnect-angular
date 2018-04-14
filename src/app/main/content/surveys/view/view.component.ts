import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CustomToastrService } from '../../../../shared/services/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';

import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { SurveyService } from '../../services/survey.service';
import { AppSurveyModel } from '../../models/survey.models';
import { TokenStorage } from '../../../../shared/authentication/token-storage.service';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.imagepicker(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

@Component({
	selector: 'app-surveys-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SurveysViewComponent implements OnInit {

	survey: AppSurveyModel;
	surveyId: number;
	currentUser: any;


	constructor(
		private spinner			: NgxSpinnerService,
		private toastrService  	: CustomToastrService,
		private surveyService	: SurveyService,
		private tokenStorage	: TokenStorage,
		private route			: ActivatedRoute,		
		private router			: Router ) {

			this.route.params.pipe().subscribe( params => {
				this.surveyId = params.id;
			} );

			this.currentUser =this.tokenStorage.getUserInfo();

			Survey
			.StylesManager
			.applyTheme("darkrose");
	}

	ngOnInit() {
		this.getSurvey(this.surveyId);
	}




	initializeSurvey(value: any) {

	// let json = {
	// 	title: "Product Feedback Survey Example",
	// 	showProgressBar: "top",
	// 	pages: [
	// 	{
	// 		elements: [
	// 		{
	// 			type: "text",
	// 			inputMask: "phone"
	// 		},
	// 		{
	// 			type: "barrating",
	// 			name: "barrating",
	// 			ratingTheme: "css-stars",
	// 			choices: [1, 2, 3, 4, 5]
	// 		},
	// 		{
	// 			type: "bootstrapslider",
	// 			name: "bootstrapslider"
	// 		},
	// 		{
	// 			type: "radiogroup",
	// 			name: "prettycheckbox",
	// 			renderAs: "prettycheckbox",
	// 			choices: ["One", "Two", "Three"]
	// 		},
	// 		{
	// 			type: "dropdown",
	// 			renderAs: "select2",
	// 			choicesByUrl: {
	// 			url: "https://restcountries.eu/rest/v1/all"
	// 			},
	// 			name: "countries",
	// 			title: "Please select the country you have arrived from:"
	// 		},
	// 		{
	// 			type: "signaturepad",
	// 			name: "sign",
	// 			title: "Please enter your signature"
	// 		},
	// 		{
	// 			type: "sortablelist",
	// 			name: "lifepriopity",
	// 			title: "Life Priorities ",
	// 			isRequired: true,
	// 			colCount: 0,
	// 			choices: ["family", "work", "pets", "travels", "games"]
	// 		},
	// 		{
	// 			name: "date",
	// 			type: "datepicker",
	// 			inputType: "date",
	// 			title: "Your favorite date:",
	// 			dateFormat: "mm/dd/yy",
	// 			isRequired: true
	// 		}
	// 		]
	// 	},
	// 	{
	// 		questions: [
	// 		{
	// 			type: "matrix",
	// 			name: "Quality",
	// 			title:
	// 			"Please indicate if you agree or disagree with the following statements",
	// 			columns: [
	// 			{
	// 				value: 1,
	// 				text: "Strongly Disagree"
	// 			},
	// 			{
	// 				value: 2,
	// 				text: "Disagree"
	// 			},
	// 			{
	// 				value: 3,
	// 				text: "Neutral"
	// 			},
	// 			{
	// 				value: 4,
	// 				text: "Agree"
	// 			},
	// 			{
	// 				value: 5,
	// 				text: "Strongly Agree"
	// 			}
	// 			],
	// 			rows: [
	// 			{
	// 				value: "affordable",
	// 				text: "Product is affordable"
	// 			},
	// 			{
	// 				value: "does what it claims",
	// 				text: "Product does what it claims"
	// 			},
	// 			{
	// 				value: "better then others",
	// 				text: "Product is better than other products on the market"
	// 			},
	// 			{
	// 				value: "easy to use",
	// 				text: "Product is easy to use"
	// 			}
	// 			]
	// 		},
	// 		{
	// 			type: "rating",
	// 			name: "satisfaction",
	// 			title: "How satisfied are you with the Product?",
	// 			mininumRateDescription: "Not Satisfied",
	// 			maximumRateDescription: "Completely satisfied"
	// 		},
	// 		{
	// 			type: "rating",
	// 			name: "recommend friends",
	// 			visibleIf: "{satisfaction} > 3",
	// 			title:
	// 			"How likely are you to recommend the Product to a friend or co-worker?",
	// 			mininumRateDescription: "Will not recommend",
	// 			maximumRateDescription: "I will recommend"
	// 		},
	// 		{
	// 			type: "comment",
	// 			name: "suggestions",
	// 			title: "What would make you more satisfied with the Product?"
	// 		}
	// 		]
	// 	},
	// 	{
	// 		questions: [
	// 		{
	// 			type: "radiogroup",
	// 			name: "price to competitors",
	// 			title: "Compared to our competitors, do you feel the Product is",
	// 			choices: [
	// 			"Less expensive",
	// 			"Priced about the same",
	// 			"More expensive",
	// 			"Not sure"
	// 			]
	// 		},
	// 		{
	// 			type: "radiogroup",
	// 			name: "price",
	// 			title: "Do you feel our current price is merited by our product?",
	// 			choices: [
	// 			"correct|Yes, the price is about right",
	// 			"low|No, the price is too low for your product",
	// 			"high|No, the price is too high for your product"
	// 			]
	// 		},
	// 		{
	// 			type: "multipletext",
	// 			name: "pricelimit",
	// 			title: "What is the... ",
	// 			items: [
	// 			{
	// 				name: "mostamount",
	// 				title: "Most amount you would every pay for a product like ours"
	// 			},
	// 			{
	// 				name: "leastamount",
	// 				title: "The least amount you would feel comfortable paying"
	// 			}
	// 			]
	// 		}
	// 		]
	// 	},
	// 	{
	// 		questions: [
	// 		{
	// 			type: "text",
	// 			name: "email",
	// 			title:
	// 			'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
	// 		}
	// 		]
	// 	}
	// 	]
	// };
		const surveyModel = new Survey.Model(value);
		Survey.SurveyNG.render("surveyElement", { model: surveyModel });
	}
	getSurvey(surveyId:number) {
		this.spinner.show();
        this.surveyService.getSurvey(surveyId).subscribe(
			res => {
				this.spinner.hide();	
				this.survey = res;
				console.log(this.survey);
				this.initializeSurvey(this.survey);
            }, err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
				this.survey = null;
				this.initializeSurvey(null);				
            });		
	}
}
