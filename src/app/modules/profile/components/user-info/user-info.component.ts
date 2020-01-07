import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnChanges {

  @Input() user ;
  imageLoaded = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.user)
  }
  picLoaded() {
    setTimeout(() => {
      this.imageLoaded =  true;
    }, 1000);
 }

}
