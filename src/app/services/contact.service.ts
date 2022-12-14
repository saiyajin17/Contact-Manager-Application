import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MyContacts } from '../models/myContacts';
import { catchError, throwError, Observable } from 'rxjs';
import { MyGroup } from '../models/myGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl: String = 'http://localhost:4000';


  constructor(private http: HttpClient) { }

  public getAllContacts() {
    let dataUrl = `${this.baseUrl}/contacts`;
    return this.http.get<MyContacts>(dataUrl).pipe(catchError(this.handleError));
  }

  public getSingleContact(contactId: string) {
    let dataUrl = `${this.baseUrl}/contacts/${contactId}`;
    return this.http.get<MyContacts>(dataUrl).pipe(catchError(this.handleError));
  }

  public createContact(contact: MyContacts) {
    let dataUrl = `${this.baseUrl}/contacts`;
    return this.http.post<MyContacts>(dataUrl, contact).pipe(catchError(this.handleError));
  }

  public updateContact(contact: MyContacts, contactId: string) {
    let dataUrl = `${this.baseUrl}/contacts/${contactId}`;
    return this.http.put<MyContacts>(dataUrl, contact).pipe(catchError(this.handleError));
  }

  public deleteContact(contactId: string) {
    let dataUrl = `${this.baseUrl}/contacts/${contactId}`;
    return this.http.delete<MyContacts>(dataUrl).pipe(catchError(this.handleError));
  }
  //groups
  public getAllGroups() {
    let dataUrl = `${this.baseUrl}/groups`;
    return this.http.get<MyGroup>(dataUrl).pipe(catchError(this.handleError));
  }

  public getSingleGroup(contact: MyContacts) {
    let dataUrl = `${this.baseUrl}/groups/${contact.groupId}`;
    return this.http.get<MyGroup>(dataUrl).pipe(catchError(this.handleError));
  }


  //solving error
  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //client side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      //server side error
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return errorMessage;
  }
}
