import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { AppSurveyModel } from '../models/survey.models';


const BASE_URL = `${environment.apiUrl}`;
const USERS_URL = `${BASE_URL}/users`;
const SURVEYS_URL = `${BASE_URL}/surveys`;

@Injectable()
export class SurveyService {
    private httpOptions = {
        headers: new HttpHeaders({'Content-Type' : 'application/json'}),
      };
      
    constructor(private http: HttpClient) { }
    
    getAllSurveys(): Observable<any> {
        const url =`${SURVEYS_URL}`
        return this.http.get(url)
            .catch(this.handleError);
    }

    getSharedSurveys(): Observable<any> {
        const url =`${SURVEYS_URL}/shared`
        return this.http.get(url)
            .catch(this.handleError);
    }

    getAvailableSurveys(userId:number, data=null): Observable<any> {
        const url =`${USERS_URL}/${userId}/surveys`
        return this.http.get(url, {params: data})
            .catch(this.handleError);
    }


    createSurvey(survey: AppSurveyModel): Observable<any>{
        const url =`${SURVEYS_URL}`
        return this.http.post(url, survey)
        .catch(this.handleError);       
    }

    getSurvey(surveyId: number): Observable<any>{
        const url =`${SURVEYS_URL}/${surveyId}`
        return this.http.get(url)
                .catch(this.handleError);          
    }

    updateSurvey(survey: AppSurveyModel): Observable<any>{
        const url =`${SURVEYS_URL}/${survey.id}`
        return this.http.put(url, survey)
                .catch(this.handleError);          
    }

    deleteSurvey(surveyId: number): Observable<any> {
		const url = `${SURVEYS_URL}/${surveyId}`;	
		return this.http.delete(url)
			.catch(this.handleError);
    }    

    

    private handleError(error: Response | any) {
        return Observable.throw(error);
    }
}
