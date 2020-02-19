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
let ShoppingCartItemController = class ShoppingCartItemController {
    constructor(shoppingCartItemRepository) {
        this.shoppingCartItemRepository = shoppingCartItemRepository;
    }
    async create(shoppingCartItem) {
        return this.shoppingCartItemRepository.create(shoppingCartItem);
    }
    async count(where) {
        return this.shoppingCartItemRepository.count(where);
    }
    async find(filter) {
        return this.shoppingCartItemRepository.find(filter);
    }
    async updateAll(shoppingCartItem, where) {
        return this.shoppingCartItemRepository.updateAll(shoppingCartItem, where);
    }
    async findById(id, filter) {
        return this.shoppingCartItemRepository.findById(id, filter);
    }
    async updateById(id, shoppingCartItem) {
        await this.shoppingCartItemRepository.updateById(id, shoppingCartItem);
    }
    async replaceById(id, shoppingCartItem) {
        await this.shoppingCartItemRepository.replaceById(id, shoppingCartItem);
    }
    async deleteById(id) {
        await this.shoppingCartItemRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/shopping-cart-items', {
        responses: {
            '200': {
                description: 'ShoppingCartItem model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ShoppingCartItem) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ShoppingCartItem, {
                    title: 'NewShoppingCartItem',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartItemController.prototype, "create", null);
__decorate([
    rest_1.get('/shopping-cart-items/count', {
        responses: {
            '200': {
                description: 'ShoppingCartItem model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ShoppingCartItem))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartItemController.prototype, "count", null);
__decorate([
    rest_1.get('/shopping-cart-items', {
        responses: {
            '200': {
                description: 'Array of ShoppingCartItem model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ShoppingCartItem, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.ShoppingCartItem))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartItemController.prototype, "find", null);
__decorate([
    rest_1.patch('/shopping-cart-items', {
        responses: {
            '200': {
                description: 'ShoppingCartItem PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ShoppingCartItem, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ShoppingCartItem))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.ShoppingCartItem, Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartItemController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/shopping-cart-items/{id}', {
        responses: {
            '200': {
                description: 'ShoppingCartItem model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ShoppingCartItem, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.ShoppingCartItem))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartItemController.prototype, "findById", null);
__decorate([
    rest_1.patch('/shopping-cart-items/{id}', {
        responses: {
            '204': {
                description: 'ShoppingCartItem PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ShoppingCartItem, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.ShoppingCartItem]),
    __metadata("design:returntype", Promise)
], ShoppingCartItemController.prototype, "updateById", null);
__decorate([
    rest_1.put('/shopping-cart-items/{id}', {
        responses: {
            '204': {
                description: 'ShoppingCartItem PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.ShoppingCartItem]),
    __metadata("design:returntype", Promise)
], ShoppingCartItemController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/shopping-cart-items/{id}', {
        responses: {
            '204': {
                description: 'ShoppingCartItem DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShoppingCartItemController.prototype, "deleteById", null);
ShoppingCartItemController = __decorate([
    __param(0, repository_1.repository(repositories_1.ShoppingCartItemRepository)),
    __metadata("design:paramtypes", [repositories_1.ShoppingCartItemRepository])
], ShoppingCartItemController);
exports.ShoppingCartItemController = ShoppingCartItemController;
//# sourceMappingURL=shopping-cart-item.controller.js.map