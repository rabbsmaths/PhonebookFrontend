import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from 'src/assets/services/contact.service';
import { Contact } from 'src/assets/interfaces/contact';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  contact: Contact = { name: '', phoneNumber: '', email: '' };
  @Output() contactAdded = new EventEmitter<void>();

  constructor(private api: ContactService, private router: Router) { }

  submit() {
  this.api.add(this.contact).subscribe({
    next: (response:any) => {
      alert(response.message);
      this.contact = { name: '', phoneNumber: '', email: '' };
      this.contactAdded.emit();
    },
    error: (error) => {
      alert(error.error);
    }
  });
  }
  
  goBack() {
    this.router.navigate(['/']);
  }

}
