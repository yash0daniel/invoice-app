import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  typeOfDoc: any
  labelPosition: boolean = true
  imageSrc: any;

  printingFlag: boolean = false
  
  constructor() { }

  ngOnInit(): void {
    this.docType(true)
    localStorage.removeItem('image')
    localStorage.clear()
  }

  public docType(type: any) {
    console.log("This is a doc type");
    this.labelPosition = type
    if (type)
      this.typeOfDoc = "an Invoice"
    else
      this.typeOfDoc = "a Quotation"
  }

  onSelectFile(event: any) {
    this.imageSrc = ''
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.imageSrc = event.target.result;
        this.saveIMG()
      }
    }
  }

  saveIMG() {
    localStorage.removeItem('image')
    localStorage.clear()
    localStorage.setItem('image', this.imageSrc)
  }

  // onclear() {
  //   this.imageSrc = null
  // }
}
