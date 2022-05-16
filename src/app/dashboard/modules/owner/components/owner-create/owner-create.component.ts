import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goBack() {
    this.router.navigate(['dashboard/owners'])
  }

}
