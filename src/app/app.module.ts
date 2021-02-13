import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { newComponent } from "./demo.component";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, newComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
