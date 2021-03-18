import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constants } from "../../../config/constants";

@Injectable({
  providedIn: "root",
})

export class ContactService {
  url: string = Constants.SERVICES.contact;

  constructor(private http: HttpClient) { }

  post(data): Observable<any> {
    return this.http.get(this.url, data);
  }
}