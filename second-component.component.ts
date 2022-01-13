import { Component, Input, OnInit, Output} from '@angular/core';
import { NewServiceService } from '../new-service.service';


@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'], 


})

export class SecondComponentComponent implements OnInit {

  // @Input() secondInputNumber: number = 10; 

  // NewServiceService: any;
  
  // currentItem = 'secondInputNumber'; 


  // @Input() secondInpitnumber : number = 10; 

// ten : number = 10; 


  // constructor( public NewserviceService:NewServiceService ) {
  //   this.NewserviceService.secondInputNumber;
  
  //  }
// constructor( svc: NewServiceService ) { 
//   svc.secondInputNumber;  
// }



// function  () { 
//   this.NewServiceService.someProps
// } 




  ngOnInit(): void {

  }
}
