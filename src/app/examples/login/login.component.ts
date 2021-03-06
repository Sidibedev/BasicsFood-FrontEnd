import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    TypeForm: FormGroup;

    constructor(private formBuilder: FormBuilder , private dataService:DataServiceService , private router:Router) { }

    ngOnInit() {
        this.initForm();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    initForm() {
        this.TypeForm = this.formBuilder.group({
          username:  ['', Validators.required],
          password: ['', Validators.required],
         
        });
      }
    
    
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    onSubmitForm() {
        const formValue = this.TypeForm.value;
        console.log(formValue['password'])
        
       
       
      }

    

}
