import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/assets/interfaces/contact';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/assets/services/contact.service';

@Component({
  selector: 'app-view-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
 contact!: Contact;

  constructor(private route: ActivatedRoute, private api: ContactService) {}

  ngOnInit() {
    const phone = this.route.snapshot.paramMap.get('phoneNumber');
    if (phone) {
      this.api.getAll().subscribe(contacts => {
        const found = contacts.find(c => c.phoneNumber === phone);
        if (found) {
          this.contact = found;
        }else{
          alert('Contact not found');
        }
      });
    }
  }
}
