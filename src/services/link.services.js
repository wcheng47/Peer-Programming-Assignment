var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { LinkModel } from '../models/link.models';
import { HttpClient } from '@angular/common/http';
var LinkService = /** @class */ (function () {
    function LinkService(http) {
        this.http = http;
        this.configUrl = '';
        this.linkList = [];
    }
    // Long URL -> Short URL
    LinkService.prototype.createLink = function (linkURL) {
        var lm = new LinkModel(linkURL);
        this.linkList.push(lm);
        this.http.get(this.configUrl);
        return lm;
    };
    // Short URL -> Long URL
    LinkService.prototype.readLink = function (linkURL) {
        var lm = new LinkModel(linkURL);
        return lm;
    };
    // Returns a list of Link Objects
    LinkService.prototype.getLinks = function () {
        return this.linkList;
    };
    LinkService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], LinkService);
    return LinkService;
}());
export { LinkService };
//# sourceMappingURL=link.services.js.map