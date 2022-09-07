import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { PrintPDFComponent } from './print-pdf/print-pdf.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { AangularMaterial } from './deps/angular.material.module'

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    PrintPDFComponent,
    DetailComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AangularMaterial,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
