import { Component } from "@angular/core";


@Component({
    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
})
export class PropertyCard {
    Property: any = {
        "Id":1,
        "Name":"Christy",
        "Type":"House",
        "Price":12000
    }
}