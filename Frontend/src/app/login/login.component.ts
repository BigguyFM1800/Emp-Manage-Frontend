import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loggedIn  = false;

  form: FormGroup = new FormGroup({
    username: new FormControl('fhatuwani'),
    password: new FormControl('admin123')
  });
  
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      }
    );
  }        
       
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }     
         
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.authService.login(this.form.value).subscribe
    (
      {
        next: (res:any)=>{
          console.log(res);
          this.router.navigate(['/home']);
          window.localStorage.setItem('User', JSON.stringify(this.form.value))
          alert("User Logged-In Successfully");
          location.reload()
        },error: (err: any)=>{
          console.log(err);
        }
      }
    )
  }

  // onReset(): void {
  //   this.submitted = false;
  //   this.form.reset();
  // }

}
