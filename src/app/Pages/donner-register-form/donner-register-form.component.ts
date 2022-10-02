import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorLogin } from 'src/app/classes/donor-login';
import { RegistrationService } from 'src/app/donorService/registration-service.service';

@Component({
  selector: 'app-donner-register-form',
  templateUrl: './donner-register-form.component.html',
  styleUrls: ['./donner-register-form.component.css']
})
export class DonnerRegisterFormComponent implements OnInit {
  login_donor:DonorLogin=new DonorLogin();

  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    // alert(JSON.stringify(this.login_donor))
    this.service.registerDonor(this.login_donor).subscribe(data=>{
      console.log("response recieved");
      alert("account created")
      this.router.navigateByUrl('/donner')
    },
    error=>console.log("exception occured"))
  }
}
