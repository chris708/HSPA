import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public registrationForm!: FormGroup;
  public user: any = {};

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.minLength(10)]]
    }, {validators: this.passwordMatchingValidator});
  }

  private passwordMatchingValidator(form: AbstractControl): Validators | null {
    if(form.get('password')?.value === form.get('confirmPassword')?.value)
      return null;
    else
      return { notMatched: true };
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get mobile() {
    return this.registrationForm.get('mobile');
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.userService.addUser(this.user);
    this.registrationForm.reset();
  }
}
