import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties: Array<IProperty> = [];

  constructor(public housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe({
      next: (data: Array<IProperty>) => {
        this.properties = data;
      },
      error: (error) => {
        console.log('httperror');
        console.log(error);
      }
    }
    )
  }


  
}
