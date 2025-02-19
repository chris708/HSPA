import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPropertBase } from '../model/property-base.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  public getAllProperties(SellRent: number): Observable<Array<IPropertBase>> {
    return this.http.get('data/properties.json').pipe(map(
      data => {
        const properties: Array<IPropertBase> = [];
        for (const index in data) {
          if (Object.prototype.hasOwnProperty.call(data, index) && (data as any)[index].SellRent === SellRent) {
            properties.push((data as any)[index]);
          }
        }
        return properties;
      }
    ));
  }
}
