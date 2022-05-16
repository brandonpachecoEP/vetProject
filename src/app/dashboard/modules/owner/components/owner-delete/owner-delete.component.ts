import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// Services
import { OwnerService } from "../../services/owner.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-owner-delete',
  templateUrl: './owner-delete.component.html',
  styleUrls: ['./owner-delete.component.scss']
})
export class OwnerDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OwnerDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ownerService: OwnerService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {

  }

  cancel() {
    this.dialogRef.close();
  }

  deleteOwner() {
    this.ownerService.deleteOwner(this.data.id).subscribe(response => {
      this.toastrService.success('Dueño eliminado correctamente')
      this.dialogRef.close();
    }, error => {
      this.toastrService.error('Ocurrio un problema al momento de eliminar el dueño')
    })
  }

}
