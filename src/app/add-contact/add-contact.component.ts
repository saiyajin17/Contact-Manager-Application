import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyContacts } from '../models/myContacts';
import { MyGroup } from '../models/myGroup';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  public loading:boolean=false;
  public contact:MyContacts={} as MyContacts;
  public errorMessage:string|null = null;
  public groups:MyGroup[] = [] as MyGroup[]; 

  constructor(private contactService: ContactService,private router:Router){}

  ngOnInit():void{
    this.contactService.getAllGroups().subscribe((data:any)=>{
      this.groups=data;
    },(error)=>{
      this.errorMessage=error;
    });
      
  }

  public addSubmit(){
    this.contactService.createContact(this.contact).subscribe((data:any)=>{
      this.router.navigate(['/']).then();
    },(error)=>{
      this.errorMessage=error;
      this.router.navigate(['contacts/add']).then();
    });
  }

}
