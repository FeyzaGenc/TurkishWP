import { Component} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ApiService } from '../../services/api';
import { IMesaj } from 'src/app/models/mesaj';

 
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage
{
  status: string;
  errorMessage: any;
  gelenData:any=[];
  yazdirilanData=[];
  mesaj:string="";
  
  currentUser="feyza.genc@akgun.com.tr";


  constructor(private http:HttpClient,private apiService:ApiService) { }


  /**
   * Mesaj Listesini çeken Method
   */
  getMesajlar()
  {
    this.apiService.query("?pageSize=100&sortBy=%60created%60%20asc","mesaj").subscribe(data => {
      if(data!=null) 
      {
        this.gelenData=data;
    
      }
  }, (error) => console.error(JSON.stringify(error))); 
  }

/**
 * Mesaj Kaydeder
 */


  setMesaj()
  {

    let mesajData:IMesaj={
      gonderen:"feyza.genc@akgun.com.tr",
      alici:"merve.kanat@akgun.com.tr",
      mesaj:this.mesaj,
    }
     
    this.apiService.create(mesajData,"mesaj").subscribe(data => {
      if(data!=null) 
      {
        this.getMesajlar();
      }
    }, (error) => console.error(JSON.stringify(error))); 
  }

  updateMesaj(mesajData:any)
  {
      this.apiService.update(mesajData,"mesaj").subscribe(data => {
        this.deleteMesajlar(mesajData);
        if(data!=null)
        { 
          this.gelenData=data;
          this.setMesaj();
        }
       
    }); 
    } 


  deleteMesajlar(mesaj:IMesaj){
    this.apiService.delete( mesaj.objectId,"mesaj").subscribe(data => {
      this.getMesajlar();
  }, (error) => console.error(JSON.stringify(error))); 
   this.apiService.delete
  }

  ngOnInit() {
    this.getMesajlar();
  }

}
