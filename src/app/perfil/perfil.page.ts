import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  uid:string;
  info:any[];

  name:string;
  lastname:string;
  email:string;
  number:string;
  type:string;

  constructor(private auth:AngularFireAuth, private user:UserService, private db:AngularFireDatabase) { 
    this.uid = user.getUid()
  }

  ngOnInit() {
    this.db.database.ref('Users/'+ this.user.getUid()).once('value', (snapshot)=>
    {
      console.log("esto  entraal tipoooo");
      //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaxd");
      //console.log(snapshot.val());
      this.name = snapshot.val().name;
      this.lastname = snapshot.val().lastname;
      this.email = snapshot.val().email;
      this.number = snapshot.val().number;
      this.type = snapshot.val().type;
      console.log("tipo de ususario", this.type);
    })

  }


  logout()
  {
    this.auth.signOut().then(userDatas=>
      {
        console.log(userDatas)
        console.log("salir")
      }).catch(e=>
        {
          console.log(e)
        })
  }
}
