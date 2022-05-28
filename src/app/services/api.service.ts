import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'http://157.230.55.217/api/escolas';

  constructor(private http: HttpClient) {}

  lerDados(){
    return this.http.get(this.api);
  }


}
