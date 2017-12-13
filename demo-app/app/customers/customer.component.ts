import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit{
    customerForm: FormGroup;
    customer: Customer= new Customer();

    constructor(private fb: FormBuilder){

    };

    ngOnInit(): void{
        this.customerForm = this.fb.group({
            firstName: '',
            lastName: '',
            email: '',
            sendCatalog: true,
        });
        /*
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(true),
        });
        */
    }

    populateTestData(): void{
        // to supply all the values of the ReactiveForm
        /*
        this.customerForm.setValue({
            firstName: 'Jack',
            lastName: 'Jarkness',
            email: 'jack@torchwood.com',
            sendCatalog: false
        });
        */
        // To assign values.
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Jarkness',
            sendCatalog: false
        });
    }

    save() {
    }
 }
