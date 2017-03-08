import { Component, OnInit } from '@angular/core';
import {DialogService} from "ng2-bootstrap-modal";
import {AlertComponent} from "./alert.component";

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialogService: DialogService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  showAlert() {
    this.dialogService.addDialog(AlertComponent);
  }
}
