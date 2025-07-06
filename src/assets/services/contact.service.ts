import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://localhost:7116/api/contact';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  search(query: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/search?q=${query}`);
  }

  add(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  update(contact: Contact): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${contact.phoneNumber}`, contact);
  }

  delete(phoneNumber: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${phoneNumber}`, {
    responseType: 'text' as 'json'
  });
  }

}
