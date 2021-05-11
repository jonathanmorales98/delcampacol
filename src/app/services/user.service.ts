import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NGSP_UNICODE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid:string

  constructor(private http:HttpClient, private  fs:AngularFireStorage) {}

  setUid(_uid:string)
  {
    this.uid = _uid
    console.log("ususario: ")
    console.log(_uid)
  }

  getUid()
  {
    return this.uid
  }  

  getNews()
  {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=co&category=health&apiKey=c89e6b4e04d14b0ab60233d757a5d3eb")
    //return this.http.get("http://api.mediastack.com/v1/news?access_key=a84f80f4d0a65521b460ab20b2f6634a&countries=co") //muy desactualizado
    //return this.http.get("https://randomuser.me/api/?results=5
    
  }

  uploadImage(file: any, path: string, name: string): Promise<string>
  {
    return new Promise(resolve =>
    {
      const filePath = path + '/' + name;
      const ref = this.fs.ref(filePath);
      const task = ref.put(file);
      task.snapshotChanges().pipe(finalize(() => 
      {
        ref.getDownloadURL().subscribe(res=>
          {
            const downloadUrl = res;
            resolve(downloadUrl);
            return;
          })
      })).subscribe();
    })
  }

  removeImage(file: any, path: string, name: string): Promise<string>
  {
    return new Promise(resolve =>
    {
      const filePath = path + '/' + name;
      const ref = this.fs.ref(filePath);
      ref.delete();
      console.log('hasta llega :(');
      //const task = ref.put(file);
      

      
    })
  }
}
