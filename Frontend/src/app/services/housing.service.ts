import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/IProperty.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  public getAllProperties(): Observable<Array<IProperty>> {
    return this.http.get('data/properties.json').pipe(map(
      data => {
        const properties: Array<IProperty> = [];
        for (const index in data) {
          if (Object.prototype.hasOwnProperty.call(data, index)) {
            properties.push((data as any)[index]);
          }
        }
        return properties;
      }
    ));
  }
}
