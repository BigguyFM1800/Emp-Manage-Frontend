import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  userUpdate: any;
  userInfo:any 

  employeeDetail = {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: ''
  };

  constructor(private actived:ActivatedRoute, private tutorialService: TutorialService) { }

  ngOnInit(): void {
    let id:number = this.actived.snapshot.params['id'];
    console.log(id)
    this.getById(id)
    this.viewEmployee()
  }

  getById(userId:number){
    return this.tutorialService.get(userId).subscribe({
      next:data =>{
       this.userUpdate = data
       this.userInfo = this.userUpdate[0]
       console.log(this.userInfo)
      //  1
      }
    })
  }

  viewEmployee(): void{
    // var user = {
    //   firstname:  this.userInfo.firstname,
    //   lastname:  this.userInfo.lastname ,
    //   email:  this.userInfo.email ,
    //   address:  this.userInfo.address ,
    //   phone:  this.userInfo.phone ,
    // }
    // this.employeeDetail = {
    //   firstname:  this.userInfo.firstname,
    //   lastname:  this.userInfo.lastname ,
    //   email:  this.userInfo.email ,
    //   address:  this.userInfo.address ,
    //   phone:  this.userInfo.phone ,
    // }
    // console.log(this.employeeDetail);
    // this.employeeDetail = {
    //   firstname: user.firstname,
    //   lastname: user.lastname,
    //   email: user.email,
    //   address: user.address,
    //   phone: user.phone
    // }
  }

}
