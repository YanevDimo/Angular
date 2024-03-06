import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  isHiden: boolean = true;

  showLoader(){
    this.isHiden = false;
  }
  
  hideLoader(){
    this.isHiden = true;
  }
}
