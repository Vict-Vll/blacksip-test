import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../../../config/constants";

@Injectable({
  providedIn: "root",
})

export class PostalCodesService {
  url: string = Constants.SERVICES.url + Constants.SERVICES.postalCodes;

  constructor(private http: HttpClient) { }

  get(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}