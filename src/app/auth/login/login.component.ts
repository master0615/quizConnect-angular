import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/authentication';
import { Router } from '@angular/router';
import { CustomToastrService } from '../../shared/services/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
    selector   : 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss']
})
export class AuthLoginComponent implements OnInit
{
    loginForm: FormGroup;
    loginFormErrors: any;
    isSuccess = true;
	isSubmitted = false;
		
    constructor(
                private spinner         : NgxSpinnerService,
				private formBuilder     : FormBuilder,
				private authService     : AuthenticationService,
				private toastrService   : CustomToastrService,
				private router          : Router
    )
    {
        this.loginFormErrors = {
            email   : {},
            password: {}
        };
    }

    ngOnInit()
    {
        // reset login status
		//this.authService.logout();	
						
        this.loginForm = this.formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(7)]]
        });

        this.loginForm.valueChanges.subscribe(() => {
						this.onLoginFormValuesChanged();
						this.isSuccess = true;
        });
    }

    onLoginFormValuesChanged()
    {
        for ( const field in this.loginFormErrors )
        {
            if ( !this.loginFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.loginFormErrors[field] = control.errors;
            }
        }
		}
		
    async login() {
			this.spinner.show();
			this.isSubmitted = true;
			const email = this.loginForm.getRawValue().email;

			const password = this.loginForm.getRawValue().password;
			try {
					await this.authService.login(email, password).toPromise();
					this.spinner.hide();				
					this.router.navigate(['/main']);

			} catch (err) {
					this.spinner.hide();				
					this.toastrService.showError(err.error.message);
					this.isSuccess = false;
					this.isSubmitted = false;
			}
	}

	public loginStaffConnect() {
      this.authService.loginStaffConnect();
    }
}
