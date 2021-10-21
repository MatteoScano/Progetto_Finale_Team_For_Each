import { Router } from '@angular/router';
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
  //variabili per il controllo password "uguale"
  password:string;
  confirmPassword:string;
  invalidPassword=false;

  constructor(private registrationService : RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  //verifica se le password inserite dall'utente sono uguali
  checkPassword(form : NgForm):boolean{
    this.password=form.form.value.password;
    this.confirmPassword=form.form.value.confirmPassword;
    if(this.password !== this.confirmPassword){
      return false
      }
    else{
      return true
    }
  }

  //Crea un nuovo utente in base ai dati inseriti in input
  createUser(form : NgForm): void {
    let metched = this.checkPassword(form);

    if(!metched){
      this.invalidPassword=true;
      return console.log("Password errata, Riprova");
      }
    else{
      this.newUser = form.form.value;
      this.newUser.enabled=1;
      this.registrationService.addUser(this.newUser,"admin","admin").subscribe( results => {
        console.log(results);
        },
        error=>{
          console.log(error);
        });
        this.router.navigate(['/login']);
  };
}


}
