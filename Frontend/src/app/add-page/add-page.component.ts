import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Tutorial } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  addForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
  })

  submitted = false;

  constructor(private tutorialService: TutorialService, private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this.submitted = true;

    let data = {
      firstname: this.addForm.value.firstname,
      lastname: this.addForm.value.lastname,
      email: this.addForm.value.email,
      address: this.addForm.value.address,
      phone: this.addForm.value.phone
    };
    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        error: (e) => console.error(e)
      });
  }

  // newEmployee(): void {
  //   this.submitted = false;
  //   this.tutorial = {
  //     firstname: '',
  //     lastname: '',
  //     email: '',
  //     address: '',
  //     phone: ''
  //   };
  // }

}
