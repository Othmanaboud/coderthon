import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorLogin } from 'src/app/classes/donor-login';
import { RegistrationService } from 'src/app/donorService/registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_donor:DonorLogin=new DonorLogin();  

  constructor(private services:RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }
   onSubmit(){
    this.services.loginDonor(this.login_donor).subscribe(data=>{
       console.log("response recieved");
       this.router.navigateByUrl("/main");
    },
    error=>console.log("exception occured")) 

   }
}
