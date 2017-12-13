"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var customer_1 = require('./customer');
var CustomerComponent = (function () {
    function CustomerComponent(fb) {
        this.fb = fb;
        this.customer = new customer_1.Customer();
    }
    ;
    CustomerComponent.prototype.ngOnInit = function () {
        this.customerForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            phone: '',
            notification: 'email',
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
    };
    CustomerComponent.prototype.populateTestData = function () {
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
    };
    CustomerComponent.prototype.save = function () {
    };
    CustomerComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(forms_1.Validators.required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'my-signup',
            templateUrl: './app/customers/customer.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map