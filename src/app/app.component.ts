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

  itemRef:any;
  type: string='';
  uid:string;

  constructor(private auth:AngularFireAuth, private router:Router, private user:UserService, private active:ActivatedRoute, private db:AngularFireDatabase) 
  {
    // console.log(localStorage.getItem('uid'));

    // this.uid = localStorage.getItem('uid');
    // console.log(this.uid);

    // this.db.database.ref('Users/'+this.uid).once('value', (snapshot)=>{
    //   //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaxd");
    //   //console.log(snapshot.val());
    //   this.type = snapshot.val().type
    //   console.log("tipo de ususario", this.type);

    // })
    

    this.verifyCurrentUser()

  }

  // async valTypo()
  // {
  //   this.uid = localStorage.getItem('uid');
  //   console.log("esto es el uid del local storage", this.uid);
  //   this.db.database.ref('Users/'+ this.user.getUid()).once('value', (snapshot)=>
  //   {
  //     console.log("esto  entraal tipoooo");
  //     //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaxd");
  //     //console.log(snapshot.val());
  //     this.type = snapshot.val().type
  //     console.log("tipo de ususario", this.type);
  //   })
  // this.itemRef = this.db.object('Users/' + this.user.getUid());
  //         console.log("itemRef", this.itemRef);
  //         await this.itemRef.snapshotChanges().subscribe(action => 
  //           {
  //             console.log(action);
  //             console.log(action.type);
  //             console.log(action.key)
  //             console.log(action.payload);
  //             console.log(action.payload.val())
  //             console.log(action.payload.key);
  //             let data = action.payload.val()
  //             //this.myProducts = [];
  //             for(let i in data)
  //             {
  //               let user = data[i];
  //               console.log("user", user);
  //               console.log("i", i);
  //               if(i == "type")
  //               {
  //                 this.type = user;
  //               }
                
  //               // user.key = i; 
  //               // console.log(user, i);
  //               // this.type = user.type;
                
  //             }
  //           });

  //   console.log("gg xd f");

  // }
  

  verifyCurrentUser()
  {
    
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
          //localStorage.setItem("uid", e.uid)

          // this.valTypo();
          // console.log("sasdfasdfasdfasdf");
          // this.valTypo();
          //this.user.setType();
          // console.log("el tipo desde el servicio", this.user.getType());
          // this.type = this.user.getType();
          console.log("tipo", this.type);

          
        this.router.navigate(['/index-cosechador'], {replaceUrl:true}).then(nav =>
          {
            console.log("bien direccionado", nav);
          }, err =>
          {
            console.log("no funciono xd", err);
          });
          
          //this.router.navigate(['/tabs/noticias'], {replaceUrl:true}) //el replace es para que no se regrese con las flechas del celular
        }
        
      })
  }

  
}

