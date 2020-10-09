import { Component, OnInit } from '@angular/core';
import {contacts} from '../contact';
import {userContact} from '../userContact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: userContact[];
  newContact: any = {};

  constructor() { }
  
  newContactName='';
  newContactEmail='';
  newContactPhoneNumber='';
  newContactImage='';

  ngOnInit(): void {
    this.contacts=contacts;
  }

  addContact(newContact): any {
    console.log('Add contact has been called');
    newContact= {
     name: this.newContactName,
     email: this.newContactEmail,
     phoneNumber: this.newContactPhoneNumber,
     image: this.newContactImage
    };
    this.contacts.unshift(newContact);

  }
}
