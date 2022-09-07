import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button'; 
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    imports: [
        MatCardModule,
        MatIconModule, 
        MatProgressBarModule,
        MatButtonModule,
        MatRadioModule,
    ],
    exports: [
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        MatButtonModule,
        MatRadioModule,
    ]
})

export class AangularMaterial { }
