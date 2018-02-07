var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { LinkModel } from "../models/link.models";
import { LinkService } from "../services/link.services";
var LinkFormClass = /** @class */ (function () {
    function LinkFormClass(linkService) {
        this.linkService = linkService;
        this.linkURL = "";
        this.shortenedLink = "";
    }
    LinkFormClass.prototype.onSubmit = function (linkForm) {
        this.link = new LinkModel(this.linkURL);
        this.linkService.createLink(this.link.linkURL);
        linkForm.reset();
    };
    LinkFormClass = __decorate([
        Component({
            selector: "link-form",
            templateUrl: './linkform.component.html',
            providers: [LinkService]
        }),
        __metadata("design:paramtypes", [LinkService])
    ], LinkFormClass);
    return LinkFormClass;
}());
export { LinkFormClass };
//# sourceMappingURL=linkForm.component.js.map