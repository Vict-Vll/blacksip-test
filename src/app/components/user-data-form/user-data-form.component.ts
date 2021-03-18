import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { PostalCodesService } from "../../services/postalCodes/postal-codes.service";
import { ContactService } from "../../services/contact/contact.service";
@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss']
})
export class UserDataFormComponent implements OnInit {
  userData: FormGroup;
  colonies: Array<Object> = [{}];
  dataSuccess: boolean = false;
  constructor(
    private fb: FormBuilder,
    private _c: ContactService,
    private _cp: PostalCodesService) { }

  ngOnInit(): void {
    this.userData = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      zip: ["", Validators.required],
      colonie: ["", Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      town: [null, Validators.required],
      street: [null, Validators.required],
      useAddress: [false, Validators.required]
    });
  }

  getZip(zip: string) {
    this._cp.get(zip).subscribe(data => {
      this.userData.controls['city'].setValue(data.city);
      this.userData.controls['state'].setValue(data.state);
      this.userData.controls['town'].setValue(data.town);
      this.colonies = data.colonies;
      (data.colonies.length === 1) ? this.userData.controls['colonie'].setValue(data.colonies[0]) : this.userData.controls['colonie'].setValue("");
    })
  }

  saveData(userData: Object) {
    this._c.post(userData).subscribe(data => {
      this.dataSuccess = true;
    })
  }

  closeModal() {
    this.cleanForm();
    this.dataSuccess = false;
  }

  cleanForm() {
    this.userData.controls['firstName'].setValue("");
    this.userData.controls['lastName'].setValue("");
    this.userData.controls['email'].setValue("");
    this.userData.controls['phone'].setValue("");
    this.userData.controls['zip'].setValue("");
    this.userData.controls['colonie'].setValue("");
    this.userData.controls['city'].setValue("");
    this.userData.controls['state'].setValue("");
    this.userData.controls['town'].setValue("");
    this.userData.controls['street'].setValue("");
    this.userData.controls['useAddress'].setValue("");
  }
}
