import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertBase } from 'src/app/model/property-base.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  public addPropertyForm!: FormGroup;


  //will come from masters
  public propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  public furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  public directions: Array<string> = ['North', 'South', 'East', 'West'];


  public propertyView: IPropertBase = {
    Id: 0,
    SellRent: 0,
    Name: '',
    PType: '',
    FType: '',
    Price: undefined,
    BHK: 0,
    BuiltArea: 0,
    City: '',
    RTM: 0
  }

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  public CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      SellRent: [null, Validators.required],
      PType: [null, Validators.required],
      Name: [null, Validators.required],
      City: [null, Validators.required],
      Price: [null, Validators.required],
      BuiltArea: [null, Validators.required]
    });
  }
  
  onSubmit(){
    console.log('Congrats, Form Submitted');
    console.log('SellRent='+this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
