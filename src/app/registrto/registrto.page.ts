import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrto',
  templateUrl: './registrto.page.html',
  styleUrls: ['./registrto.page.scss'],
})
export class RegistrtoPage implements OnInit {

  constructor(private auth:AngularFireAuth, private fb:FormBuilder, private alertController:AlertController, private db:AngularFireDatabase) { }

  regsiterForm: FormGroup;

  ngOnInit() {
    this.regsiterForm = this.fb.group(
      {
        name:['', Validators.required],
        lastname:['', Validators.required],
        number:['', Validators.required],
        email:['', Validators.required],
        pass:['', Validators.required],
        conPass:['', Validators.required],
        type:['', Validators.required],
      }
    )
  }

  register()
  {
    let user = 
    {
      email: this.regsiterForm.controls['email'].value,
      password: this.regsiterForm.controls['password'].value
    }
    if(user.password == this.regsiterForm.controls['conPass'].value)
    {
      this.auth.createUserWithEmailAndPassword(user.email, user.password).then(userData=>
        {
          this.registerAlert('Correcto', "El usuario ha sido creado correctamente")
          //this.db.database.ref('Users').push(this.regsiterForm.value)
          this.db.database.ref('Users/'+ userData.user.uid).set(this.regsiterForm.value)
          console.log(userData)
        }).catch(e=>
          {
            this.registerAlert('Error', e.message)
            console.log(e)
          })
    }
    
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
