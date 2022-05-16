import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PetService } from "../../services/pet.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { PetInterface } from "../../interfaces/pet.interface";
import { OwnerInterface } from "../../../owner/interfaces/owner.interface";
import { OwnerService } from "../../../owner/services/owner.service";

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {

  form: FormGroup | any;
  haveId: boolean = false;
  id: string | any;
  petInfo: PetInterface | any;
  allOwners: OwnerInterface | any;

  constructor(private formBuilder: FormBuilder,
              private petService: PetService,
              private router: Router,
              private toastrService: ToastrService,
              private route: ActivatedRoute,
              private ownerService: OwnerService){ }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    if(params.get('id')) {
      this.haveId = true;
      this.id = params.get('id')
      this.getAllOwners();
      this.getPetInfo(parseInt(this.id));
    }
    this.getAllOwners();
    this.buildForm()
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [this.petInfo?.name?? '', [Validators.required, Validators.maxLength(20)]],
      age: [this.petInfo?.age?? '', [Validators.required]],
      breed: [this.petInfo?.breed?? '', [Validators.required]],
      weight: [this.petInfo?.weight?? '', [Validators.required]],
      ownerId: [this.petInfo?.ownerId?? '', [Validators.required]]
    })
  }

  createPet() {
    const values = this.form.value;
    const body = {
      name: values.name,
      age: values.age,
      breed: values.breed,
      weight: values.weight,
      ownerId: values.ownerId,
    }
    this.petService.createPet(body).subscribe(response => {
      this.toastrService.success('Mascota creada con éxito!')
      this.router.navigate(['dashboard/pets'])
    }, (error) => {
      this.toastrService.error('Ha ocurrido un error!')
    })
  }

  updatePet() {
    const values = this.form.value;
    const body = {
      name: values.name,
      age: values.age,
      breed: values.breed,
      weight: values.weight,
      ownerId: values.ownerId,
    }
    this.petService.updatePet(this.id, body).subscribe(response => {
      this.toastrService.success('Dueño actualizado correctamente');
      this.router.navigate(['dashboard/pets'])
    }, error => {
      this.toastrService.error('Ha ocurrido un error al actualizar')
    })
  }

  getPetInfo(id: number) {
    this.petService.findOneOwner(id).subscribe(response => {
      this.petInfo = response;
      this.buildForm();
    })
  }

  getAllOwners() {
    this.ownerService.getAllOwners().subscribe(response => {
      this.allOwners = response;
    })
  }

}
