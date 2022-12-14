import { Component } from '@angular/core';
import { MyContacts } from '../models/myContacts';
import { ContactService } from '../services/contact.service';
import { MyGroup } from '../models/myGroup';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {

  public loading:boolean=false;
  public contact:MyContacts={} as MyContacts;
  public contactId='';
  public errorMessage:string|null=null;
  public groups:MyGroup[]=[] as MyGroup[];

  constructor(private contactService:ContactService,private router:Router){}

  ngOnInit():void{

    this.contactId=location.pathname.split('/')[3];
    if(this.contactId){
      
      this.contactService.getSingleContact(this.contactId).subscribe((data:any)=>{
        this.contact=data;
        this.loading=false;
      },(error)=>{
        this.errorMessage=error;
        this.loading=false;
      });

      this.contactService.getAllGroups().subscribe((data:any)=>{
        this.groups=data;
      });
    }
  }

  updateContact():void{
    this.contactService.updateContact(this.contact,this.contactId).subscribe((data:any)=>{
      this.contact=data;
      this.router.navigate(['/']);
    },(error)=>{
      this.errorMessage=error;
      this.router.navigate([`/contacts/edit/${this.contactId}`]).then();
    });
  }

}
