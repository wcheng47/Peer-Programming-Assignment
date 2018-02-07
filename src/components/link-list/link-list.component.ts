import {Component} from "@angular/core";

import {LinkModel} from "../../models/link.models";

import {LinkService} from "../../services/link.services";

@Component({
  selector: "link-list",
  templateUrl: './link-list.component.html',
  providers: [LinkService]
})

export class LinkListClass {

  public links: LinkModel[] = [];

  constructor(private linkService:LinkService) {

  }

  async reloadLinks() {
    this.links = await this.linkService.getLinks();
  }

}
