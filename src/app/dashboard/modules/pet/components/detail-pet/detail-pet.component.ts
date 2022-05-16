import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// Services
import { PetService } from "../../services/pet.service";
// Interfaces
import { PetInterface } from "../../interfaces/pet.interface";
import {OwnerInterface} from "../../../owner/interfaces/owner.interface";

@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.scss']
})
export class DetailPetComponent implements OnInit {

  pet: PetInterface | any;

  constructor(private petService: PetService,
              public dialogRef: MatDialogRef<DetailPetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.findOwner();
  }

  findOwner() {
    this.petService.findOneOwner(this.data.id).subscribe(response => {
      this.pet = response;
    })
  }

  closeModal() {
    this.dialogRef.close();
  }

}
