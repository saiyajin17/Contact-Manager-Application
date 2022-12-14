import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { MyContacts } from '../models/myContacts';
import { MyGroup } from '../models/myGroup';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {

  public contactId:string|null=null;
  public loading:boolean=false;
  public contact:MyContacts={} as MyContacts;
  public errorMessage:string|null= null;
  public group:MyGroup={} as MyGroup;
    
  constructor(private activatedRoute:ActivatedRoute,
      private contactService:ContactService
    ){}

  ngOnInit(): void{
      this.activatedRoute.paramMap.subscribe(()=>{
        this.contactId=location.pathname.split('/')[3];
      });
      if(this.contactId){
        this.loading=true;
        this.contactService.getSingleContact(this.contactId).subscribe((data:any)=>{
          this.contact=data;
          this.loading=false;
          this.contactService.getSingleGroup(data).subscribe((groupMember:any)=>{
            this.group=groupMember;
          })
        })
      }
  }

  public isNotEmpty(){
    return Object.keys(this.contact).length>0;
  }


}
