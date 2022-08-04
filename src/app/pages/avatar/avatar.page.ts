import { Component,OnInit} from '@angular/core';
import{HttpClient,} from '@angular/common/http';
import { ApiService } from '../../services/api';
import { IMesaj } from 'src/app/models/mesaj';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
   
  status: string;
  errorMessage: any;
  gelenData:any=[];
  yazdirilanData=[];
  mesaj:string="";
  currenUser="merve.kanat@akgun.com.tr";
  
  
 

  constructor(
    private http:HttpClient,
    private apiService:ApiService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public actionSheetCtrl:ActionSheetController,
  
    
    
    
    ) {
      
     
     }


  /**
   * Mesaj Listesini çeken Method
   */
  getMesajlar(){
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
  setMesaj(){

    let mesajData:IMesaj={
      gonderen:"merve.kanat@akgun.com.tr",
      alici:"feyza.genc@akgun.com.tr",
      
      mesaj:this.mesaj 
     
    }
     
    this.apiService.create(mesajData,"mesaj").subscribe(data => {
      if(data!=null) 
      {
        this.getMesajlar();
      }
  }, (error) => console.error(JSON.stringify(error))); 
  }
  

  deleteMesajlar(mesaj:IMesaj){
   
   
    this.apiService.delete( mesaj.objectId,"mesaj").subscribe(data => {
     this.getMesajlar();
      
  }, (error) => console.error(JSON.stringify(error))); 
   this.apiService.delete 
   
   
  }
  updateMesajlar(mesajData:any)
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
  
  // send(){
    
  //   var headers = new Headers();
  //   headers.append("Accept", 'application/json');
  //   headers.append('Content-Type', 'application/json' );
  //   const requestOptions = new RequestOptions({ headers: headers });

  //   let girilenData = {
  //       "alici": "merve",
  //       "gonderici": "feyza",
  //       "sonmesaj": "ssssss"
  //    }
  //   this.http.post('https://chummynoise.backendless.app/api/data/mesajlar',girilenData)
  //   .subscribe(data=>
  //   {
       
  //     console.log(data);

  //   });
  // }

  ngOnInit() {
    this.getMesajlar();
  }
  home(){
    this.router.navigate(['home']);
  
    }
    async presentActionSheet(){
      const actionSheet=await this.actionSheetCtrl.create({
        header: 'PROFİL FOTOĞRAFI',
        buttons: [
          { 
            role: 'destructive',
            icon: 'trash',
            handler: ()=> {
              console.log('deleteclicked');            }
          },{
            
            icon:'image',
            handler: ()=> {
              console.log('galleryclicked');            }
          },{
            
            icon:'camera',
            
            handler: ()=> { 
              console.log('cameraclicked()');            }
            
          },{
            icon:'arrow-down-outline',
            role:'cancel',
            handler: ()=> {
              console.log('the cancel button has been clicked');            }
          }
        ],
        cssClass:'custom-css',
        animated:true,
        backdropDismiss:true,
        keyboardClose:false,
        mode:'ios'
      });
      actionSheet.present();
      actionSheet.onWillDismiss().then(()=>{
        console.log('the action sheet is about to close');
      });
      actionSheet.onDidDismiss().then(()=>{
        console.log('the action sheet is about to closed');
      });



    }


}