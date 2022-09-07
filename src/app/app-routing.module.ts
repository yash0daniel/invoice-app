import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { PreviewComponent } from './preview/preview.component';
import { PrintPDFComponent } from './print-pdf/print-pdf.component';

const routes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'print-pdf', component: PrintPDFComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
