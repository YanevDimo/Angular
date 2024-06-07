import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { AuthServiceService } from '../../services/authentication/auth-service.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  isRegister = true;

  constructor(public authService:AuthServiceService) {
  
}

  registerForm = new FormGroup({
    fullName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  });
  
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  handlRegister() {
    
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('jwt', response.jwt)
        this.authService.getUserProfile().subscribe();
        console.log("register success",response);
        
      }
    })
    console.log("register", this.registerForm.value);

  }

  handlLogin() {
    console.log("login",this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('jwt', response.jwt)
        this.authService.getUserProfile().subscribe();
        console.log("login success",response);
        
      }
    })
  }
  togglePanel() {
    
    this.isRegister = !this.isRegister
  }
}
