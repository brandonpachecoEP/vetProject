import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// Services
import { OwnerService } from "../../services/owner.service";
import { PetService } from "../../../pet/services/pet.service";
// Interfaces
import { OwnerInterface } from "../../interfaces/owner.interface";

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit {

  owner: OwnerInterface | any;

  constructor(private ownerService: OwnerService,
              private petService: PetService,
              public dialogRef: MatDialogRef<OwnerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.findOwner();
    this.getPets();
  }

  findOwner() {
    this.ownerService.findOneOwner(this.data.id).subscribe(response => {
      this.owner = response;
      console.log(this.owner)
    })
  }

  closeModal() {
    this.dialogRef.close();
  }

  getPets() {
    this.petService.getPetsWithOwnerId(this.data.id).subscribe(response => {
      console.log(response)
    })
  }

}
