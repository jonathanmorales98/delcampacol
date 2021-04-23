import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  type: string='';
  uid:string;

  constructor(private auth:AngularFireAuth, private router:Router, private user:UserService, private active:ActivatedRoute, private db:AngularFireDatabase) 
  {
    this.uid = localStorage.getItem('uid')

    this.db.database.ref('Users/'+this.uid).once('value', (snapshot)=>{
      //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaxd");
      //console.log(snapshot.val());
      this.type = snapshot.val().type
      console.log("tipo de ususario", this.type);

    })

    this.verifyCurrentUser()

  }
  

  verifyCurrentUser(){
    this.auth.authState.subscribe((e:any)=>        // es para validar si hay un usuario logeado en el dispositivo
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
          if(this.type == "Cosechador")
          {
            this.router.navigate(['/index-cosechador'], {replaceUrl:true})
          }
          //this.router.navigate(['/tabs/noticias'], {replaceUrl:true}) //el replace es para que no se regrese con las flechas del celular
        }
        
      })
  }
}

