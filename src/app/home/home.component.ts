import { Component, OnInit, Input } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { UpdateModule } from '../update/update.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myEmployeeList: any;
  @Input() currentTutorials: Tutorial = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: ''
  };

  // employees: any[] = [{firstname:"Fhatuwani", lastname:"Raphalalani", email:"fm.raphalalani29@gmail.com", address:"18th - 8, Vrededorp", phone:"0606909813"}];

  employeeDetail: UpdateModule =  new UpdateModule
  employees: any;
  // tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  id = '';

  constructor(private tutorialService: TutorialService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.tutorialService.getAll().subscribe({
        next: (data) => {
          this.employees = data;
           console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteEmployee(emplyId: Employee): void {
    this.tutorialService.delete(emplyId)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
          // this.router.navigate(['/home']);
        },
        error: (e) => console.error(e)
      });
  }

  // searchId(): void {
  //   this.currentTutorial = {};
  //   this.currentIndex = -1;
  //   this.tutorialService.findById(this.id)
  //     .subscribe({
  //       next: (data) => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  editEmployee(employeeDetail: UpdateModule){
    this.employeeDetail = {...employeeDetail}
    // this.tutorialService.update(emplyId).subscribe({
    // })
    // console.log( this.myEmployeeList[numEmployee]);
    // localStorage.setItem('id', `${this.myEmployeeList[numEmployee].id}`);
    // localStorage.setItem('firstname', `${this.myEmployeeList[numEmployee].firstname}`);
    // localStorage.setItem('lastname', `${this.myEmployeeList[numEmployee].lastname}`);
    // localStorage.setItem('email', `${this.myEmployeeList[numEmployee].email}`);
    // localStorage.setItem('address', `${this.myEmployeeList[numEmployee].address}`);
    // localStorage.setItem('phone', `${this.myEmployeeList[numEmployee].phone}`);
    this.router.navigate(['/edit']);
  }
}
