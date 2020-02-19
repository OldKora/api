"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let Inventory = class Inventory extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    __metadata("design:type", String)
], Inventory.prototype, "inventoryId", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "qty", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        generated: true
    }),
    __metadata("design:type", String)
], Inventory.prototype, "createdAt", void 0);
__decorate([
    repository_1.property({
        type: 'date',
        required: true,
        generated: true
    }),
    __metadata("design:type", String)
], Inventory.prototype, "UpdatedAt", void 0);
__decorate([
    repository_1.belongsTo(() => models_1.Product),
    __metadata("design:type", String)
], Inventory.prototype, "productId", void 0);
Inventory = __decorate([
    repository_1.model({ settings: { strict: false } }),
    __metadata("design:paramtypes", [Object])
], Inventory);
exports.Inventory = Inventory;
//# sourceMappingURL=inventory.model.js.map