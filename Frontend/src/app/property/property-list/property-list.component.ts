import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertBase } from 'src/app/model/property-base.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties: Array<IPropertBase> = [];
  public sellRent = 1;

  constructor(public housingService: HousingService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.url.toString());
    if(!!this.route.snapshot.url.toString()){
      this.sellRent = 2;
    }

    this.housingService.getAllProperties(this.sellRent).subscribe({
      next: (data: Array<IPropertBase>) => {
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
