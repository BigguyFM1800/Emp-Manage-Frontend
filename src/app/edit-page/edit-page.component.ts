import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormControl, FormGroup, FormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Employee } from '../employee';
import { UpdateModule } from '../update/update.module';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  message = '';
  userUpdate: any;
  userInfo:any  
  constructor(private tutorialService: TutorialService, private authService: AuthService, private router: Router, private actived:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id:number = this.actived.snapshot.params['id'];
    console.log(id)
    this.getById(id)
  }

  getById(userId:number){
    return this.tutorialService.get(userId).subscribe({
      next:data =>{
       this.userUpdate = data
       this.userInfo = this.userUpdate[0]
      }
    })
  }

  updateEmployee(){
    let id =  this.userInfo.id
    
    var user = {
      firstname:  this.userInfo.firstname,
      lastname:  this.userInfo.lastname ,
      email:  this.userInfo.email ,
      address:  this.userInfo.address ,
      phone:  this.userInfo.phone ,
    }
    this.tutorialService.update(user, id).subscribe({
     next:data =>{
      this.router.navigate(['/home'])
     }
    })
  }
















  // updateEmployee() {
  //   if(this.employeeDetail.id)
  //   {
  //     let data = {
  //       firstname: this.employeeDetail.firstname,
  //       lastname: this.employeeDetail.lastname,
  //       email: this.employeeDetail.email,
  //       address: this.employeeDetail.address,
  //       phone: this.employeeDetail.phone
  //     }
  //     console.log(this.employeeDetail)
  //     this.message = '';
  //     this.tutorialService.update(data,this.employeeDetail.id)
  //       .subscribe({
  //         next: (res) => {
  //           console.log(res);
  //           this.router.navigate(['/home']);
  //           this.message = res.message ? res.message : 'The employee data was updated successfully!';
  //         },
  //         error: (e) => console.error(e)
  //       });

  //   }
    
  // }

  // // deleteEmployee(){
  // //   this.authService.delete(this.currentTutorial.id).subscribe({
  // //     next: (res) => {
  // //       console.log(res);
  // //     },
  // //     error: (e) => console.log(e)
  // //   });
  // // }



}
