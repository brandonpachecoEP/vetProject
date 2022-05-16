import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OwnerService } from "../../services/owner.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { OwnerInterface } from "../../interfaces/owner.interface";


@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss']
})
export class OwnerFormComponent implements OnInit {

  form: FormGroup | any;
  haveId: boolean = false;
  id: string | any;
  ownerInfo: OwnerInterface | any;

  constructor(private formBuilder: FormBuilder,
              private ownerService: OwnerService,
              private router: Router,
              private toastrService: ToastrService,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.haveId = true;
      this.getOwnerInfo(parseInt(this.id))
    }
    this.buildForm()
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      direction: ['', [Validators.required]]
    })
  }

  createOwner() {
    const values = this.form.value;
    const body = {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      direction: values.direction,
    }
    this.ownerService.createOwner(body).subscribe(response => {
      this.toastrService.success('Dueño creado con éxito!')
      this.router.navigate(['dashboard/owners'])
    }, (error) => {
      this.toastrService.error('Ha ocurrido un error!')
    })
  }

  updateOwner() {
    const values = this.form.value;
    const body = {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      direction: values.direction,
    }
    this.ownerService.updateOwner(this.id, body).subscribe(response => {
      this.toastrService.success('Dueño actualizado correctamente');
      this.router.navigate(['dashboard/owners'])
    }, error => {
      this.toastrService.error('Ha ocurrido un error al actualizar')
    })
  }

  getOwnerInfo(id: number) {
    this.ownerService.findOneOwner(id).subscribe( response => {
      this.ownerInfo = response;
    })
  }

}
