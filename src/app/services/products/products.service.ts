import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../../../config/constants";

@Injectable({
  providedIn: "root",
})

export class ProductsService {
  url: string = Constants.SERVICES.url + Constants.SERVICES.products;

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.url);
  }
}