import { Routes } from '@angular/router';
import { ListContactComponent } from './ManageContacts/list-contact/list-contact.component';
import { AddContactComponent } from './ManageContacts/add-contact/add-contact.component';
import { UpdateContactComponent } from './ManageContacts/update-contact/update-contact.component';
import { ViewContactComponent } from './ManageContacts/view-contact/view-contact.component';

export const routes: Routes = [
  { path: '', component: ListContactComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'update/:phoneNumber', component: UpdateContactComponent },
  { path: 'view/:phoneNumber', component: ViewContactComponent },
];