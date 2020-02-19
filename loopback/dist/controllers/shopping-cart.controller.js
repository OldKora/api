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
let ShoppingCartController = class ShoppingCartController {
    constructor(shoppingCartRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
    }
    async create(shoppingCart) {
        return this.shoppingCartRepository.create(shoppingCart);
    }
    async count(where) {
        return this.shoppingCartRepository.count(where);
    }
    async find(filter) {
        return this.shoppingCartRepository.find(filter);
    }
    async updateAll(shoppingCart, where) {
        return this.shoppingCartRepository.updateAll(shoppingCart, where);
    }
    async findById(id, filter) {
        return this.shoppingCartRepository.findById(id, filter);
    }
    async updateById(id, shoppingCart) {
        await this.shoppingCartRepository.updateById(id, shoppingCart);
    }
    async replaceById(id, shoppingCart) {
        await this.shoppingCartRepository.replaceById(id, shoppingCart);
    }
    async deleteById(id) {
        await this.shoppingCartRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/shopping-carts', {
        responses: {
            '200': {
                description: 'ShoppingCart model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ShoppingCart) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ShoppingCart, {
                    title: 'NewShoppingCart',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "create", null);
__decorate([
    rest_1.get('/shopping-carts/count', {
        responses: {
            '200': {
                description: 'ShoppingCart model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ShoppingCart))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "count", null);
__decorate([
    rest_1.get('/shopping-carts', {
        responses: {
            '200': {
                description: 'Array of ShoppingCart model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.ShoppingCart, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.ShoppingCart))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "find", null);
__decorate([
    rest_1.patch('/shopping-carts', {
        responses: {
            '200': {
                description: 'ShoppingCart PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ShoppingCart, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.ShoppingCart))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.ShoppingCart, Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/shopping-carts/{id}', {
        responses: {
            '200': {
                description: 'ShoppingCart model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.ShoppingCart, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.ShoppingCart))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "findById", null);
__decorate([
    rest_1.patch('/shopping-carts/{id}', {
        responses: {
            '204': {
                description: 'ShoppingCart PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ShoppingCart, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.ShoppingCart]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "updateById", null);
__decorate([
    rest_1.put('/shopping-carts/{id}', {
        responses: {
            '204': {
                description: 'ShoppingCart PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.ShoppingCart]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/shopping-carts/{id}', {
        responses: {
            '204': {
                description: 'ShoppingCart DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "deleteById", null);
ShoppingCartController = __decorate([
    __param(0, repository_1.repository(repositories_1.ShoppingCartRepository)),
    __metadata("design:paramtypes", [repositories_1.ShoppingCartRepository])
], ShoppingCartController);
exports.ShoppingCartController = ShoppingCartController;
//# sourceMappingURL=shopping-cart.controller.js.map