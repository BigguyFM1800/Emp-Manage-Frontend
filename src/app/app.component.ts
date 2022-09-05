import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
 
 
 user:any;

 constructor(private router: Router){}

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('User')!);

    
    
    if(this.user){
      console.log(this.user)
    }else{
      console.log('No user logged in')
    }
  }

  logout(){
    this.router.navigate(['/login'])
    window.localStorage.clear()

    setTimeout(()=>{
      location.reload()
    }, 1000)
  
  }

}
