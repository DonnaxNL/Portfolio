import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule, MatSnackBar, MatSnackBarContainer } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter, MatOptionModule, MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatListModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatChipsModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatRadioModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule,
        MatTableModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatRippleModule,
        MatIconModule,
        MatSidenavModule,
        MatStepperModule,
        MatSliderModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatExpansionModule
    ],
    exports: [
        MatListModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCheckboxModule,
        MatChipsModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatRadioModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule,
        MatTableModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatRippleModule,
        MatIconModule,
        MatSidenavModule,
        MatStepperModule,
        MatSliderModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatExpansionModule
    ],
    providers: [
        MatSnackBar,
        MatDatepickerModule,
        { provide: MAT_DATE_LOCALE, useValue: 'nl-NL' }
    ],
    entryComponents: [
        MatProgressSpinner,
        MatSnackBarContainer]
})

export class MaterialModule {
}