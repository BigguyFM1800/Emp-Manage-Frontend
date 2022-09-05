import { Injectable } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  data: any;

  constructor(private home: HomeComponent) { }

  transferData(){
    this.data = this.home.editEmployee(1);
  }

}
