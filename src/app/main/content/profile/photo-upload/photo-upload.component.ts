import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CustomToastrService } from '../../../../shared/services/custom-toastr.service';
import { UserProfileService } from '../../services/userProfile.service';
import { UserProfilePhoto, DefaultProfilePhoto } from '../../models/profile.models';
import { TokenStorage } from '../../../../shared/authentication/token-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-profile-photo-upload',
	templateUrl: './photo-upload.component.html',
	styleUrls: ['./photo-upload.component.scss']
})
export class ProfilePhotoUploadComponent implements OnInit, OnChanges {
	@Input() userId;
	userProfilePhoto: UserProfilePhoto;
	defaultProfilePhoto = DefaultProfilePhoto;
	constructor(
		private spinner	 			: NgxSpinnerService,
		private tokenStorage		: TokenStorage,
		private toastrService  		: CustomToastrService,
		private userProfileService 	: UserProfileService
	) { }

	ngOnInit() {
		//this.getProfilePhoto(this.userId);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['userId']) {
			this.userId = changes['userId'].currentValue;
			this.getProfilePhoto(this.userId);
		}
	}

	getProfilePhoto(userId: number) {
		this.spinner.show();
        this.userProfileService.getProfilePhoto(userId)
            .subscribe(res => {
				this.spinner.hide();	
				this.userProfilePhoto = res;
            }, err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
				this.userProfilePhoto = null;			
            });	
	}

	uploadProfilePhoto(userId: number, data: any) {
		this.spinner.show();
        this.userProfileService.uploadProfilePhoto(userId, data)
            .subscribe(res => {
				this.spinner.hide();	
				this.userProfilePhoto = res;
				this.toggleCurrentUserPhoto(this.userProfilePhoto);
            }, err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
				//this.userProfilePhoto = null;			
            });	
	}

	roateProfilePhoto(userId:number, degree: number) {
		this.spinner.show();
        this.userProfileService.rotateProfilePhoto(userId, degree)
            .subscribe(res => {
				this.spinner.hide();	
				this.userProfilePhoto = res;
				this.toggleCurrentUserPhoto(this.userProfilePhoto);
            }, err => {
				this.spinner.hide();	
				this.toastrService.showError(err.error.message);
				//this.userProfilePhoto = null;			
            });		
	}

	onUploadPhoto(event) {
		const files = event.target.files;
		
		let formData = new FormData();

		formData.append('photo', files[0], files[0].name);
		formData.append('name', files[0].name);

		this.uploadProfilePhoto(this.userId, formData);
	}

	rotateLeft() {
		this.roateProfilePhoto(this.userId, 90);
	}

	rotateRight() {
		this.roateProfilePhoto(this.userId, 270);
	}

	isExistProfilePhoto() {
		return this.userProfilePhoto && this.userProfilePhoto.path;
	}

	toggleCurrentUserPhoto(userProfilePhoto : UserProfilePhoto) {
		let currentUser = this.tokenStorage.getUserInfo();
		if (currentUser.id == userProfilePhoto.user_id) {
			this.userProfileService.toggleCurrentUserProfilePhoto(userProfilePhoto);
		}
	}
}
