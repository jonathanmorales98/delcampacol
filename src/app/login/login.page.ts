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

  itemRef: any;

  loginForm: FormGroup

  constructor(private db: AngularFireDatabase, private auth:AngularFireAuth, private fb:FormBuilder) { }

  ngOnInit() {
    this.itemRef = this.db.object('item');
    this.itemRef.snapshotChanges().subscribe(action => {
      console.log(action.type);
      console.log(action.key)
      console.log(action.payload.val())
    });

    this.loginForm = this.fb.group(
      {
        email:["",Validators.required],
        pass:["",Validators.required]
      }
    )
  }

  login()
  {
    
  }

}
