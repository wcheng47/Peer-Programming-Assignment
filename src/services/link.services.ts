import {Injectable} from '@angular/core';
import {LinkModel} from '../models/link.models';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class LinkService {
  public configUrl: string = 'http://link-api.pramodk.net';

  constructor(private http: HttpClient) {
  }

  // Long URL -> Short URL
  createLink(linkURL: String): Promise<LinkModel> {
    return this.http.post<LinkResponse>(this.configUrl + '/api/link/create/', {
      long_url: linkURL,
    })
      .map((response: LinkResponse) => {
        return new LinkModel(response.long_url, response.short_url_id)
      })
      .toPromise();
  }

  // Returns a list of Link Objects
  public getLinks(): Promise<LinkModel[]> {
    return this.http.get<LinkResponse[]>(this.configUrl + '/api/link/list/')
      .map((response: LinkResponse[]) => response.map((r: LinkResponse) => new LinkModel(r.long_url, r.short_url_id)))
      .toPromise();
  }

}

export interface LinkResponse {
  id: Number;
  long_url: String;
  short_url_id: String;
}
