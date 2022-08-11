import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Sim } from '@ionic-native/sim/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  home() {
    throw new Error('Method not implemented.');
  }
  
  public screen:any='chat';
  userId: string = '';
  userList: any = [];
 
  constructor(private router:Router,private toastCtrl:ToastController,private sim:Sim) {}
  
  ngOnInit() {
    if(this.getPhoneNumber()!==null){
      this.showToast();
      
    } 
    //this.getPhoneNumber();

  }

  
  async showToast(){
    await this.toastCtrl.create({
      message:"Telefon numarası doğrulandı",
      duration:2000,
    }).then(res=>res.present());
  }

  getPhoneNumber()
{
  
    this.sim.getSimInfo().then(
    (info) => console.log('Sim info: ', info),
    (err) => console.log('Unable to get sim info: ', err)
  );
  
}

  homepage(){
    this.router.navigate(['messages']);

    }

    avatar(){
      this.router.navigate(['avatar']);
    
    }

    
  

}
