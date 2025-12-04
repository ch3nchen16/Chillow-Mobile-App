import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-location',
  templateUrl: './house-location.component.html',
  standalone: true,
  styleUrls: ['./house-location.component.scss'],
})
export class HouseLocationComponent  implements OnInit {
  //address received as input
  @Input('location') 
  data: any;

  constructor() { }

  ngOnInit() {}

}
