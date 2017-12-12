import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent implements OnInit{
    customerForm: FormGroup;
    customer: Customer= new Customer();

    ngOnInit(): void{
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(true),
        });
    }

    populateTestData(): void{
        // to supply all the values of the ReactiveForm
        this.customerForm.setValue({
            firstName: 'Jack',
            lastName: 'Jarkness',
            email: 'jack@torchwood.com',
            sendCatalog: false
        });
    }

    save() {
    }
 }
