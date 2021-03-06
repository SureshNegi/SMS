import { NgModule } from '@angular/core';

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule   
} from '@angular/material';
@NgModule({
    imports: [
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule
    ], exports: [MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule, MatIconModule, 
        MatProgressBarModule]
})
export class AngularMatModule { }
