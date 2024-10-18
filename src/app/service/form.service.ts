import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../interface/data';
import { Addon } from '../interface/addon';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private jsonUrl = '/assets/data.json';
  private addOns = '/assets/addOns.json';
  planType = signal('monthly');
  planOption = signal({});
  selectedAddOn = signal<Addon[]>([]);
  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.jsonUrl);
  }
  getAddOns(): Observable<Addon[]> {
    return this.http.get<Addon[]>(this.addOns);
  }
}
