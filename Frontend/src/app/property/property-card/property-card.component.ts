import { Component, Input, OnInit } from "@angular/core";
import { IPropertBase } from "src/app/model/property-base.interface";


@Component({
    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
})
export class PropertyCard implements OnInit {
    @Input() property!: IPropertBase;
    @Input() hideIcons: boolean = false;

    constructor(){}

    ngOnInit(): void {
        this.property.Image = this.property.Image ?? 'house_default.png';
    }
}