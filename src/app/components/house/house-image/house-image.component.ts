import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-image',
  templateUrl: './house-image.component.html',
  standalone: true,
  styleUrls: ['./house-image.component.scss'],
})
export class HouseImageComponent  implements OnInit {
//when parent passes into [image], it is stored in data property]
  @Input('image') 
  data: any;
  

  constructor() { }

  ngOnInit() {}

}
