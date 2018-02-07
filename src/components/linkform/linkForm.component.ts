import {Component} from "@angular/core";

import {Injectable} from "@angular/core";

import {NgForm} from "@angular/forms";

import {LinkModel} from "../../models/link.models";

import {LinkService} from "../../services/link.services";

@Component({
  selector: "link-form",
  templateUrl: './linkform.component.html',
  providers: [LinkService]
})

export class LinkFormClass {
  linkURL = "";
  shortenedLink = "";

  constructor(private linkService:LinkService) {

  }

  async onSubmit(linkForm:NgForm) {
    let lm: LinkModel = await this.linkService.createLink(this.linkURL);
    this.shortenedLink = lm.shortURL.toString();
    console.log(this.shortenedLink)
  }

}
