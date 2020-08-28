import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  genders = ['male', 'female'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null ),
        'email': new FormControl(null, )
      }),
      'gender': new FormControl('male')
    });
    this.signupForm.controls.gender.patchValue('female');
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.get('userData').get('username').value);
    } else {
      console.log('not valid');
    }
  }
}
