import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() data: string;

  findLink(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].tagName === 'link') {
        return arr[i].textContent
      }
    }
  }
}
