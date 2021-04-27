import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nueva-publicacion',
  templateUrl: './nueva-publicacion.page.html',
  styleUrls: ['./nueva-publicacion.page.scss'],
})
export class NuevaPublicacionPage implements OnInit {

  image = '';

  res: string;
  file:string;

  productForm: FormGroup;

  products: [];
  productos =
  {
    name:'',
    type:'',
    descript:'',
    count:'',
    date:'',
    photo:'',
    uid:''
  };

  constructor(private user:UserService, private fb:FormBuilder, private db:AngularFireDatabase, private alertController:AlertController) { }

  ngOnInit() 
  {
    this.productForm = this.fb.group(
      {
        name:['', Validators.required],
        type:['', Validators.required],
        descript:['', Validators.required],
        count:['', Validators.required],
        date:['', Validators.required],
        image:[this.res, Validators.required]
      }
    )
  }

  captureImage(event:any)
  {
    
    console.log(event);
    console.log(event.target);
    console.log(event.target.files);
    console.log(event.target.files[0]);
    this.file = event.target.files[0];

    //para pre visualizar la imagen
    if(event.target.files && event.target.files[0])
    {
      const reader = new FileReader();
      reader.onload = ((images)=>
      {
        this.image = images.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }

  }

  async registerProduct()
  {
    const path = this.productos.type;
    const name = this.productos.name;
    //const file = event.target.files[0];
    this.res = await this.user.uploadImage(this.file, path, name);
    console.log("este es el URL de la imagen xd", this.res);

    this.productos.photo = this.res
    this.productos.uid = this.user.getUid()

    this.db.database.ref(path + '/'+ this.productos.uid + '/' + name).set(this.productos).catch(e=>
    {
      this.registerAlert('Error', e.message)
    })
    
    console.log(this.products);
    console.log(this.productos);
  }

  async registerAlert(status, sms) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: status,
      subHeader: sms,
      buttons: ['OK']
    });

    await alert.present();
  }
}
