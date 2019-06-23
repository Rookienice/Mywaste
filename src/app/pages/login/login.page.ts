import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from '../../api/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Username;
  Password;

  constructor(public router:Router , public loginservice:LoginService) { }

  ngOnInit() {
  }

  onlogin(){

    const body ={
      username : this.Username,
      password : this.Password
    }
    this.loginservice.getLogin(body).then( rep => {
      console.log(rep);
      if(rep['status']===true){
        this.router.navigate(['/home'])
      } else{
        console.log('error')
      }
 })
   
  }



}
