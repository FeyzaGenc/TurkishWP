import { Component, HostListener, ViewChild} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ApiService } from '../../services/api';
import { IMesaj } from 'src/app/models/mesaj';
import { IonContent } from '@ionic/angular';

 
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
  @ViewChild('scrollArea') content: IonContent;
  
  typing:string="yazıyor..";
  counter:number=0;
  notTyping:string="";
  
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
    this.mesaj="";
    this.counter=0;
    this.scrollToBottom();
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
    this.scrollToBottom();
    } 


  deleteMesajlar(mesaj:IMesaj){
    
    this.apiService.delete( mesaj.objectId,"mesaj").subscribe(data => {
      this.getMesajlar();
  }, (error) => console.error(JSON.stringify(error))); 
   this.apiService.delete;
   this.scrollToBottom();
  }

  scrollToBottom() {

    setTimeout(()=>{
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 1000);

  }

  @HostListener('window:keydown',['$event']) keyDownEvent(event:any){
   
    if(event.keyCode !==null){
      this.counter=0;
      return this.typing;
      
    }
    
  }

  @HostListener('window:keyup',['$event']) keyUpEvent(event:any){
   
    if(event.keyCode !==null){
      this.counter++;
      return this.notTyping;
      
    }
    
  }
  
 
  ngOnInit() {
    this.scrollToBottom();
    this.getMesajlar();
    
  }

}