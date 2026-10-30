import { Component } from '@angular/core';
import { Register } from '../register/register';
import { Navbar } from '../navbar/navbar';

@Component({
  imports: [Register,Navbar],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}
