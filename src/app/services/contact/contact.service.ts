import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../../../config/constants";

@Injectable({
  providedIn: "root",
})

export class ContactService {
  url: string = Constants.SERVICES.url + Constants.SERVICES.contact;

  constructor(private http: HttpClient) { }

  post(data): Observable<any> {
    return this.http.post(this.url, data);
  }
}