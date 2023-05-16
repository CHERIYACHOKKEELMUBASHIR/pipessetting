import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent {
  element:any
  search:any
  searchs:any
  searchss:any

  constructor(private serv:ServiceService){}

  ngOnInit(){
    this.serv.product()
    .subscribe((result:any)=>{
      console.log("result",result);
      this.element=result
      console.log("element",this.element);
      
      
    })
  }

}
