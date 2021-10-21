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
  passwordOk=true;

   //controllo email valida
   email:string;
   emailOk=true;

   //ccontrollo spunta termini e condizioni
   terms:string;
   termsOk=true;

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
  //verifica se l'email inserita è in un formato valido
  checkEmail(form : NgForm):boolean{
    this.email=form.form.value.email;
    const at = "@";
    const dotNet = ".";
    if(this.email.includes(at) && this.email.includes(dotNet)){
      console.log("Email valida! Contains: '@' and '.'");
      return true;
    }
      else{
        console.log("Email non valida");
        return false;
    } // true
  }
  //controllo spunta termini e condizioni
  checkTerms(form : NgForm):boolean{
    this.terms=form.form.value.terms;
    console.log("terms dentro il check", this.terms)
    if(this.terms){
      this.termsOk=true;
      return true;
    }
    else{
      this.termsOk=false;
      return false;
    }
  }

  //Crea un nuovo utente in base ai dati inseriti in input
  createUser(form : NgForm): void {
    let metched = this.checkPassword(form);
    let emailChecked = this.checkEmail(form);

   if(emailChecked){

     if(metched){

        this.newUser = form.form.value;
        this.newUser.enabled=1;
        this.registrationService.addUser(this.newUser,"admin","admin").subscribe( results => {
          console.log("Password valida",results);
          console.log("terms",this.terms);              //test
          console.log("terms boolean ok",this.termsOk); //test
          },
          error=>{
            console.log(error);
          });
          this.router.navigate(['/login']);
     }
     else{
      this.emailOk=true;
      this.passwordOk=false;
      console.log("password errata, Riprova");
     }
   }
   else{
    this.emailOk=false;
    console.log("Email Errata, Riprova!");
   }
}


}
