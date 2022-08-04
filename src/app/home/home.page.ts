import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) {}
  
  ngOnInit() {
    
  }

  homepage(){
    this.router.navigate(['messages']);

    }

    avatar(){
      this.router.navigate(['avatar']);
    
      }
  

}
