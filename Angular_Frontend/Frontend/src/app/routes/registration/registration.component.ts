import { UserDataInterface } from './../../models/user.model';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './../../services/registration/registration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser : UserDataInterface;

  constructor(private registrationService : RegistrationService,) { }

  ngOnInit(): void {
  }

  createUser(form : NgForm): void {
    this.newUser = form.form.value;
    console.log(form)
    console.log(this.newUser);
    this.newUser.enabled=1;

    this.registrationService.addUser(this.newUser,"admin","admin").subscribe( results => {
          console.log(results);
        },
        error=>{
          console.log(error);
        });
  };

}
