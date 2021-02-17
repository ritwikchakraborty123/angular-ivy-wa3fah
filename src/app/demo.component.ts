import { Component } from "@angular/core";
import { own } from './own.validator';
import { cityvalid } from './cityvalid.validator';
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
    // own: new FormControl('', [own]),

    firstname: new FormControl("", [
      Validators.required,
      Validators.maxLength(10)
    ]),
    lastname: new FormControl(),
    email: new FormControl('',[Validators.required,Validators.pattern('\\S+\@[a-z]+\.(com|in|org|co)')]),
    website: new FormControl('',[Validators.required,Validators.pattern('^((https\:\/\/www\.)|(http\:\/\/www\.)|(www\.))?[a-zA-Z0-9\-]+\.(com|in|org)(\\S)*$')]),
    phone: new FormControl('',[own,Validators.required]),
    address: new FormGroup({
      city: new FormControl('',[cityvalid,Validators.required]),
      zip: new FormControl(),
      state: new FormControl()
    }),
    dob: new FormControl()
  });
  // get city() {
  //   return this.contactForm.get('city');
  // }
  onSubmit() {
    console.log(this.contactForm.controls);
  }
}
