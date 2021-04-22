import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  news
  array = []

  constructor(private user:UserService, private iab:InAppBrowser) { }

  ngOnInit() {
    
    this.user.getNews().subscribe(News=>
    {
      this.news = News;  //guarda el Object traido en un Object local
      console.log(News)
      console.log(this.news)
      this.array = Object.values(this.news.articles); //el object local se convierteen Array  y se guarda en uno
      //this.array = Object.values(this.news.data); //muy desactualizado
      console.log("aaaaaaaa"+this.array)
    })

    
  }

  openURL(url)
  {
    console.log(url)
    this.iab.create(url)
  }

}
