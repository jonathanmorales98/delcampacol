import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private auth:AngularFireAuth) { }

  ngOnInit() {
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
