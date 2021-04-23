import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup

  constructor(private auth:AngularFireAuth, private fb:FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.fb.group(
      {
        email:["",Validators.required],
        pass:["",Validators.required]
      }
    )
  }

  login()
  {
    this.auth.signInWithEmailAndPassword(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['pass'].value).then(userData=>
      {
        console.log("Inicio sesion")
        console.log(userData);
      })
    console.log("formulario")
    console.log(this.loginForm.value)
  }

}
