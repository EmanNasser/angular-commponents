import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userobject={
    name: "Ola",
    id: 12014,
    position: "developer"

  }
  constructor() { }

  ngOnInit() {
  }

}
