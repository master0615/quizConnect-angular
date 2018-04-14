import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ConfirmDialogComponent } from './dialog/confirm/confirm-dialog.component';

import { WINDOW_PROVIDERS } from './services/window-service';
import { MatchHeightDirective } from './matchHeight/match-height.directive';
import { ShowErrorsComponent } from './validators/show-errors/show-errors.component';

@NgModule({
    declarations   : [
        ConfirmDialogComponent,
        ShowErrorsComponent,
        MatchHeightDirective
    ],

    imports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDatatableModule,
    ],

    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDatatableModule,
        TranslateModule,
        MatchHeightDirective,
        ShowErrorsComponent
    ],

    entryComponents: [
        ConfirmDialogComponent
    ],
    
    providers      : [
        WINDOW_PROVIDERS,
    ]
})

export class SharedModule{
}
