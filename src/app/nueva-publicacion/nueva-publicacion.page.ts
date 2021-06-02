import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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
    dated:'',
    photo:'',
    uid:'',
    price:'',
    datep:'',
    donation:false
  };

  name:string='';
  type:string='';
  descript:string='';
  count:string='';
  dated:string='';
  photo:string='';
  uid:string='';
  price:string='';
  datep:string='';
  donation:boolean=false;

  val: boolean = false;

  time = new Date();

  constructor(private user:UserService, private fb:FormBuilder, private db:AngularFireDatabase, private alertController:AlertController, private active:ActivatedRoute, private route:Router) 
  {
    active.params.subscribe(key=>
    {
      console.log(key);
      if(key.type!=null){
        db.database.ref(key.type + '/' + user.getUid() + "/" + key.name).once('value', (snap)=>{
          this.val = true;
          console.log(snap.val());
          this.productos.name = this.name = snap.val().name
          this.productos.type = this.type = snap.val().type
          this.productos.descript = this.descript = snap.val().descript
          this.productos.count = this.count = snap.val().count
          this.productos.dated = this.dated = snap.val().dated
          this.productos.photo = this.photo = snap.val().photo
          this.productos.uid = this.uid = snap.val().uid
          this.productos.price = this.price = snap.val().price
          this.productos.datep = this.datep = snap.val().datep
          this.productos.donation = this.donation = snap.val().donation
          console.log(this.name);
          console.log(this.val);
          console.log(this.photo);
        })
      }
    })
  }

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

    console.log(this.time);
    console.log(this.time.getFullYear() + "-" + (this.time.getMonth()+1) + "-" + this.time.getDate());

    this.productos.datep = this.time.getFullYear() + "-" + (this.time.getMonth()+1) + "-" + this.time.getDate();

    this.productos.price = "$ " + this.productos.price + " cop";

    this.db.database.ref(path + '/'+ this.productos.uid + '/' + name).set(this.productos).then(f=>
    {
      this.registerAlert('Completado', 'Se ha completado la publicación')
    }).catch(e=>
    {
      this.registerAlert('Error', e.message)
    })
    
    console.log(this.products);
    console.log(this.productos);

    this.productForm.reset();

    //this.route.navigate(['/publicaciones']);
    
  }

  async updateProduct()
  {
    const path = this.productos.type;
    const name = this.productos.name;
    //const file = event.target.files[0];
    if(this.image != '')
    {
      this.user.removeImage('', this.type, this.name);
      
      console.log("si vamos bien xd");
      this.res = await this.user.uploadImage(this.file, path, name);
      console.log("este es el URL de la nueva imagen xd", this.res);
      this.productos.photo = this.res
    }
    else
    {
      this.productos.photo = this.photo
    }
    
    
    this.productos.uid = this.user.getUid()
    console.log(name);
    console.log(this.productos);

    this.db.database.ref(path + '/'+ this.productos.uid + '/' + name).set(this.productos).then(f=>
    {
      this.registerAlert('Completado', 'Se ha completado la actualización')
    }).catch(e=>
    {
      this.registerAlert('Error', e.message)
    })
    
    console.log(this.products);
    console.log(this.productos);

    this.productForm.reset();

    //this.route.navigate(['/publicaciones']);

  }

  async registerAlert(status, sms) {
    // const alert = await this.alertController.create({
    //   cssClass: 'my-custom-class',
    //   header: status,
    //   subHeader: sms,
    //   buttons: ['OK']
    // });
    const alert = await this.alertController.create({
      header: status,
      message: sms,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('redireccionado xd');
            //this.route.navigate(['<ion-back-button defaultHref="/publicaciones"></ion-back-button>']);

          }
        }
      ]
    });

    await alert.present();
  }
}

// 04/05/2021
// agregue una alerta que avise que se registro bien
