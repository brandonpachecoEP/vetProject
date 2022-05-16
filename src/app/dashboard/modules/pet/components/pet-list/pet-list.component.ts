import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
// Interface
import { PetInterface } from "../../interfaces/pet.interface";
// Components
import { DeletePetComponent } from "../delete-pet/delete-pet.component";
import { DetailPetComponent } from "../detail-pet/detail-pet.component";
// Service
import { PetService } from "../../services/pet.service";


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  displayedColumns: string[] = ['no', 'name', 'age', 'breed', 'weight', 'ownerId', 'actions'];
  dataSource: MatTableDataSource<PetInterface> | any;
  apiResponse: PetInterface[] | any;

  constructor(private petService: PetService,
              private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getAllOwners();
  }

  buildDataSource() {
    this.dataSource = new MatTableDataSource<PetInterface>(this.apiResponse)
    this.dataSource.paginator = this.paginator;
  }

  getAllOwners() {
    this.petService.getAllPets().subscribe(response => {
      this.apiResponse = response;
      this.buildDataSource();
    })
  }

  openDialog(id: number, name: string) {
    const dialogRef =   this.dialog.open(DeletePetComponent, {
      width: '900px',
      height: '300px',
      data: {
        id,
        name
      }
    })
    dialogRef.afterClosed().subscribe(response => {
      this.getAllOwners();
    })
  }

  openDetailModal(id: number) {
    const dialgoRef = this.dialog.open(DetailPetComponent, {
      width: '600px',
      height: '600px',
      data: {
        id
      }
    })
    dialgoRef.afterClosed().subscribe(response => {

    })
  }

}
