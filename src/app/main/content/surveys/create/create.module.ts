import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { SurveysCreateComponent } from './create.component';
import { PdfHandlerService } from '../../services/pdf-handler.service';



@NgModule({
    declarations   : [
        SurveysCreateComponent
    ],
    imports        : [
        CommonModule,
        SharedModule
    ],
    exports        : [
        SurveysCreateComponent
    ],
    entryComponents: [
    ],
    providers:[PdfHandlerService]
})

export class SurveysCreateModule{
}
