import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  previewAvailable: any = false
  constructor() { }

  ngOnInit(): void {
  }

  onpreview() {
    console.log("Preview");
    this.previewAvailable = true
  }
}
