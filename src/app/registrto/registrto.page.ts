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

  registerForm: FormGroup;

  constructor(private auth:AngularFireAuth, private fb:FormBuilder, private alertController:AlertController, private db:AngularFireDatabase) { }


  ngOnInit() 
  {
    console.log("1111111111111");
    this.registerForm = this.fb.group(
      {
        name:['', Validators.required],
        lastname:['', Validators.required],
        number:['', Validators.required],
        email:['', Validators.required],
        pass:['', Validators.required],
        conPass:['', Validators.required],
        type:['', Validators.required]
      }
    )
    console.log("2222222222222");
  }

  register()
  {

    console.log(this.registerForm)
    let user = 
    {
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['pass'].value
    }
    console.log(user)
    console.log(this.registerForm.value);
    const vavava = this.registerForm.value;
    if(user.password == this.registerForm.controls['conPass'].value)
    {
      this.auth.createUserWithEmailAndPassword(user.email, user.password).then(userData=>
        {
          this.registerAlert('Correcto', "El usuario ha sido creado correctamente")
          console.log(this.registerForm.value);
          console.log(vavava);
          //this.db.database.ref('Users').push(this.regsiterForm.value)
          this.db.database.ref('Users/'+ userData.user.uid).set(vavava)
          console.log(userData)
        }).catch(e=>
          {
            this.registerAlert('Error', e.message)
            console.log(e)
          })
      this.registerForm.reset();
    }
    else
    {
      this.registerAlert('Error', "Las contraseñas no coinciden")
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
