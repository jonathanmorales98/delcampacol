import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {
  itemRef: any;
  itemRef1: any;
  itemRef2: any;
  myProducts = [];
  uid: string;

  file:string;

  proCul = [];
  proOfer = [];
  proPed = [];


  constructor(private db: AngularFireDatabase, private user:UserService, private alert:AlertController) { 
    this.uid = user.getUid();
  }

  ngOnInit() {
    this.myProducts = [];
    this.itemRef = this.db.object('Cultivo/' + this.uid);
      this.itemRef.snapshotChanges().subscribe(action => 
      {
        console.log(action.type);
        console.log(action.key)
        console.log(action.payload.val())
        let data = action.payload.val()
        
        for(let i in data)
        {
          let user = data[i];
          user.key = i
          console.log(user, i);
          this.myProducts.push(user)
        }
      });


      this.itemRef1 = this.db.object('Oferta/' + this.uid);
      this.itemRef1.snapshotChanges().subscribe(action => 
      {
        console.log(action.type);
        console.log(action.key)
        console.log(action.payload.val())
        let data = action.payload.val()
        for(let i in data)
        {
          let user = data[i];
          user.key = i
          console.log(user, i);
          this.myProducts.push(user)
        }
      });


      this.itemRef2 = this.db.object('Pedido/' + this.uid);
      this.itemRef2.snapshotChanges().subscribe(action => 
      {
        console.log(action.type);
        console.log(action.key)
        console.log(action.payload.val())
        let data = action.payload.val()
        for(let i in data)
        {
          let user = data[i];
          user.key = i
          console.log(user, i);
          this.myProducts.push(user)
        }
      });

  }

  //----------------------------------------------esta funcion era una alerta al oprimir la card
  // async options(type, name) {
  //   const alert = await this.alert.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Confirm!',
  //     message: 'Message <strong>text</strong>!!!',
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       },
  //       {
  //         text: 'Editar',
  //         //role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           //console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Eliminar',
  //         cssClass: 'danger',
  //         handler: () => {
  //           this.delete(type, name)
  //           //console.log('Confirm Okay');
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  async delete(type, name)
  {
    console.log("Eliminado...");
    console.log(type, name);
    
    const alert = await this.alert.create({
      header: 'Espera!',
      message: 'Este producto se eliminara de tu lista. ¿Quieres continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log('Confirm Okay');
            console.log(type);
            this.db.database.ref(type + '/' + this.uid + '/' + name).remove();
            this.user.removeImage(this.file, type, name);
          }
        }
      ]
    });

    await alert.present();
  }
  

  edit()
  {
    console.log("Editando...");
  }

}

// 04/05/2021
// hice el llado de la base de datos y lo guarde en un array para poder  recorrerlo