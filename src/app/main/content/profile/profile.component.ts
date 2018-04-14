import { Component, OnInit } from '@angular/core';
import { CustomToastrService } from '../../../shared/services/custom-toastr.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../models/profile.models';
import { UserProfileService } from '../services/userProfile.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	userId: number;
	UserProfile: UserProfile;
	constructor(
		private spinner				: NgxSpinnerService,
		private toastrService  		: CustomToastrService,
		private userProfileService 	: UserProfileService,
		public dialog				: MatDialog,
		private route				: ActivatedRoute
	) { 
		this.route.params.pipe().subscribe( params => {
			this.userId = params.id;
			this.getUserProfile( this.userId );
		} );
	}

	ngOnInit() {
	}

	getUserProfile(userId:number) {
		this.spinner.show();
        this.userProfileService.getUserProfile(userId)
            .subscribe(res => {
				this.spinner.hide();	
				this.UserProfile = res;
            }, err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
				this.UserProfile = null;				
            });		
	}
}
