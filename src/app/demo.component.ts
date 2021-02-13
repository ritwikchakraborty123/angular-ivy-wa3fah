import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class newComponent {
  year = [];
  curr = new Date().getFullYear();

  constructor() {
    for (let i = 0; i < 21; i++) {
      this.year.push(this.curr - i);
    }
  }

  title = "new app";
  contactForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.maxLength(10)
    ]),
    lastname: new FormControl(),
    email: new FormControl('',[Validators.required,Validators.pattern('^[a-z]+@{1}[a-z]+.{1}[a-z]+$')]),
    website: new FormControl(),
    phone: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      zip: new FormControl(),
      state: new FormControl()
    }),
    dob: new FormControl()
  });

  onSubmit() {
    console.log(this.contactForm.controls);
  }
}
