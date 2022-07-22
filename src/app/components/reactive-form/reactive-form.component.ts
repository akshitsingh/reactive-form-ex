import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/custom.validator';
 
/** Reactive form with all validation */
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  GradeArray: any = [
    '8th Grade',
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade',
  ];

  constructor(public fb: FormBuilder) {}
   
  ngOnInit(): void {
    this.reactiveForm();
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
      email: ['', [Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(8),CustomValidators.passwordStrengthValidator]],
      confirmPassword : ['',[Validators.required]],
      gender: ['Male'],
      address : ['',[Validators.required]],
      dob: ['', [Validators.required]],
      grade: [''],
      roles : this.fb.array([])
    },
   {
   validator : CustomValidators.mustMatch('password', 'confirmPassword') // password must match with confirmpassword;
   }
  )}



  /**Get roles fields as form array */
  get rolesFieldAsFormArray(): FormArray {
    return this.myForm.get('roles') as FormArray;
  }

  /**Make a form group of roles input field */
  role(): any {
    return this.fb.group({
      role: [''],
    });
  }

  /**Add role new control in our roles formcontrol */
  addRoleControl():void{
     this.rolesFieldAsFormArray.push(this.role())
  }

  
  /**
   * Dynamically removing controls from a FormArray
   * @param i Index of the roles form control array in the form
   */
   removeRoleControl(i:number):void{
    this.rolesFieldAsFormArray.removeAt(i);
   }

   /* Date */
   /**
    * 
    * @param e date picker event
    */
   date(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get('dob').setValue(convertDate, {
      onlyself: true,
    });
  }

  // submit the reactive form 
  submitForm(){
   console.log(this.myForm.value)
  }

  /**Validation message */
  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name must be at least 5 characters long' },
      { type: 'maxlength', message: 'Name cannot be more than 25 characters long' },
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      {type : 'minlength',message : 'Password must be atleast 8 character'},
       { type: 'passwordStrength', message: 'Password must contain at least two of the following: numbers, lowercase letters, uppercase letters, or special characters.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'mustMatch', message: 'Password mismatch' }
    ],
    'address': [
      { type: 'required', message: 'Address is required' }
    ],

    
    }
}
