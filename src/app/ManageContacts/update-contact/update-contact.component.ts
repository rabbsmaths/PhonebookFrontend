import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/assets/interfaces/contact';
import { ContactService } from 'src/assets/services/contact.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent {

  contact!: Contact;

  constructor(private route: ActivatedRoute, private api: ContactService) { }

  ngOnInit() {
    const phone = this.route.snapshot.paramMap.get('phoneNumber');
    if (phone) {
      this.api.getAll().subscribe(contacts => {
        const found = contacts.find(c => c.phoneNumber === phone);
        if (found) {
          this.contact = found;
        } else {
          alert('Contact not found');
        }
      });
    }
  }

  submit() {
    this.api.update(this.contact).subscribe();
  }

}
