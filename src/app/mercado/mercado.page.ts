import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.page.html',
  styleUrls: ['./mercado.page.scss'],
})
export class MercadoPage implements OnInit {

  keyRef: any;
  itemRef: any;
  productos = [];

  name: any;
  lastName:any;
  email:any;
  number:any;

  textoBuscar: '';
  

  constructor(private db: AngularFireDatabase, private alert:AlertController) { }

  ngOnInit() {
    console.log(this.productos);
  }

  cosechas()
  {
    this.keyRef = this.db.object('Cultivo');
    console.log(this.keyRef);
    this.itemRef = this.keyRef;
    this.itemRef.snapshotChanges().subscribe(action => 
    {
      console.log(action.type);
      console.log(action.key)
      console.log(action.payload);
      console.log(action.payload.val())
      let data = action.payload.val()
      this.productos = [];
      for(let i in data)
      {
        let user = data[i];
        for(let j in user)
        {
          console.log(user[j]);
          let product = user[j]
          this.productos.push(product)
        }
        user.key = i
        console.log(user);
        console.log("user - " + user);
        console.log("suer.key - " + user.key);
        console.log("i - " + i);
        //this.productos.push(user.key)
      }
    });
  }

  ofertas()
  {
    this.keyRef = this.db.object('Oferta');
    console.log(this.keyRef);
    this.itemRef = this.keyRef;
    this.itemRef.snapshotChanges().subscribe(action => 
    {
      console.log(action.type);
      console.log(action.key)
      console.log(action.payload);
      console.log(action.payload.val())
      let data = action.payload.val()
      this.productos = [];
      for(let i in data)
      {
        let user = data[i];
        for(let j in user)
        {
          console.log(user[j]);
          let product = user[j]
          this.productos.push(product)
        }
        user.key = i
        console.log(user);
        console.log("user - " + user);
        console.log("suer.key - " + user.key);
        console.log("i - " + i);
        //this.productos.push(user.key)
      }
    });
  }

  pedidos()
  {
    this.keyRef = this.db.object('Pedido');
    console.log(this.keyRef);
    this.itemRef = this.keyRef;
    this.itemRef.snapshotChanges().subscribe(action => 
    {
      console.log(action.type);
      console.log(action.key)
      console.log(action.payload);
      console.log(action.payload.val())
      let data = action.payload.val()
      this.productos = [];
      for(let i in data)
      {
        let user = data[i];
        for(let j in user)
        {
          console.log(user[j]);
          let product = user[j]
          this.productos.push(product)
        }
        user.key = i
        console.log(user);
        console.log("user - " + user);
        console.log("suer.key - " + user.key);
        console.log("i - " + i);
        //this.productos.push(user.key)
      }
    });
  }

  info(itemUid:string)
  {
    this.db.database.ref('Users/'+ itemUid).once('value', (snapshot)=>{
      //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaxd");
      //console.log(snapshot.val());
      console.log('00000000000000000',snapshot.val());
      this.name = snapshot.val().name;
      this.lastName = snapshot.val().lastname;
      this.email = snapshot.val().email;
      this.number = snapshot.val().number;
      console.log(this.name, this.lastName, this.email, this.number);
      //return this.type
      this.presentAlert(this.name, this.lastName, this.email, this.number);
    })
    
  }

  async presentAlert(name, lastName, email, number) {
    console.log("3333333333333333333", name);
    console.log("222222222222222222", this.name);
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Información de contacto',
      subHeader: 'Nombre: ' + name + ' ' + lastName,
      message: 'Correo: ' + email + ' Numero: ' + number,
      buttons: ['OK']
    });

    await alert.present();


  }

    buscar(event)
    {
      console.log(event);
      this.textoBuscar = event.detail.value;
      console.log("eventototo", this.textoBuscar);
    }

}
