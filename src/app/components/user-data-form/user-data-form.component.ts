import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss']
})
export class UserDataFormComponent implements OnInit {
  userData: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userData = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      zip: [null, Validators.required],
      suburb: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      municipality: [null, Validators.required],
      street: [null, Validators.required],
      useAddress: [null, Validators.required]
    });
  }

}
