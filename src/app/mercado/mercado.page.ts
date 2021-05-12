import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.page.html',
  styleUrls: ['./mercado.page.scss'],
})
export class MercadoPage implements OnInit {

  keyRef: any;
  itemRef: any;
  productos = [];
  

  constructor(private db: AngularFireDatabase) { }

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
    this.keyRef = this.db.object('Pedidos');
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

}
