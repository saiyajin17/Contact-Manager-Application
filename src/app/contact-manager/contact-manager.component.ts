import { Component } from '@angular/core';
import { MyContacts } from '../models/myContacts';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent {

  public loading:boolean=false;
  public contacts:MyContacts[]=[];
  public errorMessage:string | null=null;
  public searchContact='';
  
  constructor(private contactService:ContactService){}

  ngOnInit():void{
    this.getAllContacts();
  }

  getAllContacts(){
    this.loading=true;
      this.contactService.getAllContacts().subscribe((data:any)=>{
      this.contacts=data;
      this.loading=false;
    },(error)=>{
      this.errorMessage=error;
      this.loading=false;
    });
  }

  deletingContact(contactId:string):void{
    this.contactService.deleteContact(contactId).subscribe((data:any)=>{
      this.getAllContacts();
    },(error)=>{
      this.errorMessage=error;
      this.loading=false;
    });
  }

  searchContacts(contactName:string){
    let arrContacts=this.contacts;
    for(let contact of arrContacts){
      if(contact.name==contactName){
        this.contacts=[contact];
      }
    }
    
  }
}
