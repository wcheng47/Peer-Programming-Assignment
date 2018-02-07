import { Injectable } from '@angular/core';
import { LinkModel } from '../models/link.models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LinkService {
  configUrl:string = 'http://link-api.pramodk.net';
  linkList:LinkModel[] = [];
  constructor(private http: HttpClient) { }

  // Long URL -> Short URL
  createLink(linkURL:String): LinkModel {
    var lm:LinkModel = new LinkModel(linkURL);
    this.linkList.push(lm);
    // this.http.post(this.configUrl + '/api/link/create/');
    return lm;
  }

  // Short URL -> Long URL
  readLink(linkURL:String): LinkModel {
    var lm:LinkModel = new LinkModel(linkURL);
    console.log(this.configUrl);
    console.log('linkURL');
    this.http.get(this.configUrl + '/api/link/resolve/' + linkURL + '/').subscribe(data => {
    	console.log(data);
    });
    return lm
;  } 

  // Returns a list of Link Objects
  getLinks(): LinkModel[] {
  	this.http.get<Config>(this.configUrl + '/api/link/list/');
  	console.log()
    return this.linkList;
  }
}

export interface Config {
	id: Number;
	long_url: String;
	short_url_id: String;
}