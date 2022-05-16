import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// Services
import { PetService } from "../../services/pet.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.scss']
})
export class DeletePetComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletePetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private petService: PetService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {

  }

  cancel() {
    this.dialogRef.close();
  }

  deleteOwner() {
    this.petService.deletePet(this.data.id).subscribe(response => {
      this.toastrService.success('Mascota eliminada correctamente')
      this.dialogRef.close();
    }, error => {
      this.toastrService.error('Ocurrio un problema al momento de eliminar la mascota')
    })
  }

}
