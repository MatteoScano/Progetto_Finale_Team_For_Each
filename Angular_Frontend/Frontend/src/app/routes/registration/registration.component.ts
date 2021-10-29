import { LoginService } from './../../services/login/login.service';
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
  users: UserDataInterface[]; //utti gli utenti
  username:string;

  usernameOk=true;
  usernameExist=true;
  usernameAlreadyExist=false;

  found:UserDataInterface[];
  userFound:UserDataInterface[];
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
   isChecked=false;
   getUserFlag=false;

  constructor(private registrationService : RegistrationService, private router:Router, private userService: LoginService) { }

  ngOnInit(): void {
    this.getUsersList();
    console.log("stampa Utenti:", this.users);
  }
    //Visualizza tutti gli utenti
    getUsersList(){
      this.userService.getUsers("admin","admin").subscribe(
        response => {
          this.users = response;
          console.log("stampa Utenti: ",this.users)
          this.getUserFlag=true;
        },
        error => console.log(error)
      )
    }
  //metodo di verifica click checkbox termini e condizioni
  click(ev){
    console.log(ev.target.defaultValue);
    if(ev.target.defaultValue == "b"){
      this.isChecked=true;
      console.log("Is Checked: ", this.isChecked)
    }
    else{
      console.log("non è entrato nell'IF")
    }
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

    //Controllo sullo username doppio
  checkUsername(form :NgForm):any{ //funziona
    if(this.getUserFlag){
    this.username = form.form.value.username;
      for(let i=0; i<this.users.length;i++){

        if(this.username===this.users[i].username){
          console.log("this.users[i].username ", this.users[i].username);
          this.usernameAlreadyExist=true;
        }
      }
      console.log("stampa Utenti: ",this.users)
      console.log("this.username ", this.username);
      console.log("this.username ", this.usernameAlreadyExist);
    }}

  //Crea un nuovo utente in base ai dati inseriti in input
  createUser(form : NgForm): void {
    this.usernameExist=true;
    let passMatched = this.checkPassword(form);
    let emailChecked = this.checkEmail(form);
    //this.username = form.form.value.username;
    this.checkUsername(form);
     console.log("stampa Utenti2: ",this.users)
     console.log("this.username ", this.username);
     console.log("this.users[i].username ", this.username);
     console.log("username usernameAlreadyExist: ", this.usernameAlreadyExist);
     console.log("username usernameExist: ", this.usernameExist);



  if(this.isChecked){ //se i termini e le condizioni sono spuntate(accettate)
    this.usernameExist=true;


   if(emailChecked){  //se l'email è controllata

    if(this.usernameAlreadyExist==false){
      this.usernameExist=true;

     if(this.username!= "admin" && this.username!= "Admin"){    //se lo username è controllato

        if(passMatched){  //se le password inserite corrispondono

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
        else{ //pass metched
          this.emailOk=true;
          this.passwordOk=false;
          this.usernameOk=true;
          this.termsOk=true;
          this.usernameExist=true;
          this.usernameAlreadyExist=false;

          console.log("password errata, Riprova");
        }


    }else{  //username admin
      this.emailOk=true;
      this.termsOk=true;
      this.usernameOk=false;
      this.usernameExist=true;

      console.log("lo username non puo contenere il termine 'admin'")
    }
  }
    else{
      this.termsOk=true;
     // window.alert("User non valido");
      this.usernameExist=false;
      this.emailOk=true;
      this.usernameAlreadyExist=false;
      console.log("  this.usernameExist=false",   this.usernameExist);

    }
   }
   else{
    this.termsOk=true;
    this.emailOk=false;
    this.usernameExist=true;

    console.log("Email Errata, Riprova!");
   }

}else{
    this.termsOk=false;

    console.log("Devi accettare i termini e le condizioni");
    }
}
}


