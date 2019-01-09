import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup , FormControl , Validators} from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FormGroup;
 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(6)])
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}
