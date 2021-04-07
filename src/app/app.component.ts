import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth:AngularFireAuth, private router:Router, private user:UserService) 
  {
    this.verifyCurrentUser()
  }

  verifyCurrentUser(){
    this.auth.authState.subscribe((e:any)=>
      {
        console.log(e)
        if(e == null)
        {
          this.router.navigate(['/'])
        }
        else
        {
          this.user.setUid(e.uid)
          localStorage.setItem("uid", e.uid)
          this.router.navigate(['/tabs/noticias'], {replaceUrl:true}) //el replace es para que no se regrese con las flechas del celular
        }
        
      })
  }
}

