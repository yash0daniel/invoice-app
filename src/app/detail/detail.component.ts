import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  typeOfDoc: any

  ngOnInit(): void {
    this.docType()
  }

  docType() {
    if (false)
      this.typeOfDoc = "an Invoice"
    else
      this.typeOfDoc = "a Quotation"
  }
}
