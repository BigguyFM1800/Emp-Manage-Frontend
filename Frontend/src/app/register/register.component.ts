import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from '../utils/validation';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

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
      ],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
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
  this.authService.register(this.form.value).subscribe
  (
    {
      next: (res:any)=>{
        console.log(res);
        this.router.navigate(['/login']);
        alert("User Registered Successfully");
      },error: (err: any)=>{
        console.log(err);
      }
    }
  )
}

}