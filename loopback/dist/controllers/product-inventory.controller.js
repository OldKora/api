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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductInventoryController = class ProductInventoryController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async find(id, filter) {
        return this.productRepository.inventories(id).find(filter);
    }
    async create(id, inventory) {
        return this.productRepository.inventories(id).create(inventory);
    }
    async patch(id, inventory, where) {
        return this.productRepository.inventories(id).patch(inventory, where);
    }
    async delete(id, where) {
        return this.productRepository.inventories(id).delete(where);
    }
};
__decorate([
    rest_1.get('/products/{id}/inventories', {
        responses: {
            '200': {
                description: 'Array of Product has many Inventory',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Inventory) },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductInventoryController.prototype, "find", null);
__decorate([
    rest_1.post('/products/{id}/inventories', {
        responses: {
            '200': {
                description: 'Product model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Inventory) } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Inventory, {
                    title: 'NewInventoryInProduct',
                    exclude: ['inventoryId'],
                    optional: ['productId']
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInventoryController.prototype, "create", null);
__decorate([
    rest_1.patch('/products/{id}/inventories', {
        responses: {
            '200': {
                description: 'Product.Inventory PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Inventory, { partial: true }),
            },
        },
    })),
    __param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Inventory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInventoryController.prototype, "patch", null);
__decorate([
    rest_1.del('/products/{id}/inventories', {
        responses: {
            '200': {
                description: 'Product.Inventory DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Inventory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductInventoryController.prototype, "delete", null);
ProductInventoryController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProductRepository)),
    __metadata("design:paramtypes", [repositories_1.ProductRepository])
], ProductInventoryController);
exports.ProductInventoryController = ProductInventoryController;
//# sourceMappingURL=product-inventory.controller.js.map