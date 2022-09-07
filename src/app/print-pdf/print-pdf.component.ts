import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'print-pdf',
  templateUrl: './print-pdf.component.html',
  styleUrls: ['./print-pdf.component.scss']
})
export class PrintPDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onPrint() {
    console.log("working !!")
    window.print();
  }
}
