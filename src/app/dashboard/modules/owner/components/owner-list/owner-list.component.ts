import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
// Interfaces
import { OwnerInterface } from "../../interfaces/owner.interface";
// Services
import { OwnerService } from "../../services/owner.service";
// Components
import { OwnerDeleteComponent } from "../owner-delete/owner-delete.component";
import { OwnerDetailComponent } from "../owner-detail/owner-detail.component";

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  displayedColumns: string[] = ['no', 'name', 'lastName', 'email', 'phone', 'direction', 'actions'];
  dataSource: MatTableDataSource<OwnerInterface> | any;
  apiResponse: OwnerInterface[] | any;

  constructor(private ownerService: OwnerService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
   this.getAllOwners();
  }

  buildDataSource() {
    this.dataSource = new MatTableDataSource<OwnerInterface>(this.apiResponse)
    this.dataSource.paginator = this.paginator;
  }

  getAllOwners() {
    this.ownerService.getAllOwners().subscribe(response => {
      this.apiResponse = response;
      this.buildDataSource();
    })
  }

  openDialog(id: number, email: string) {
    const dialogRef =   this.dialog.open(OwnerDeleteComponent, {
      width: '900px',
      height: '300px',
      data: {
        id,
        email
      }
    })
    dialogRef.afterClosed().subscribe(response => {
      this.getAllOwners();
    })
  }

  openDetailModal(id: number) {
    const dialgoRef = this.dialog.open(OwnerDetailComponent, {
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
