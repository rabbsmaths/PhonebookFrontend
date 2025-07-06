import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/assets/interfaces/contact';
import { ContactService } from 'src/assets/services/contact.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {

  contacts: Contact[] = [];
  searchTerm = '';

  @Output() onEdit = new EventEmitter<Contact>();
  @Output() onView = new EventEmitter<Contact>();

  constructor(private api: ContactService, private router: Router) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getAll().subscribe((res) => (this.contacts = res));
  }

  search() {
    if (!this.searchTerm) return this.load();
    this.api.search(this.searchTerm).subscribe((res) => (this.contacts = res));
  }

delete(phone: string) {
  this.api.delete(phone).subscribe({
    next: (response:any) => {
      alert(response.message); 
      this.load(); 
    },
    error: (error) => {
      alert(error.error); 
    }
  });
}

  goToUpdate(phoneNumber: string) {
    this.router.navigate(['/update', phoneNumber]);
  }

  goToView(phoneNumber: string) {
    this.router.navigate(['/view', phoneNumber]);
  }

}
