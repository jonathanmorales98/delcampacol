import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.page.html',
  styleUrls: ['./mercado.page.scss'],
})
export class MercadoPage implements OnInit {

  itemRef: any;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.itemRef = this.db.object('Oferta');
    this.itemRef.snapshotChanges().subscribe(action => {
      console.log(action.type);
      console.log(action.key)
      console.log(action.payload.val())
    });
  }

}
