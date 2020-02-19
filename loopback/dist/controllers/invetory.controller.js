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
let InvetoryController = class InvetoryController {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async create(inventory) {
        return this.inventoryRepository.create(inventory);
    }
    async count(where) {
        return this.inventoryRepository.count(where);
    }
    async find(filter) {
        return this.inventoryRepository.find(filter);
    }
    async updateAll(inventory, where) {
        return this.inventoryRepository.updateAll(inventory, where);
    }
    async findById(id, filter) {
        return this.inventoryRepository.findById(id, filter);
    }
    async updateById(id, inventory) {
        await this.inventoryRepository.updateById(id, inventory);
    }
    async replaceById(id, inventory) {
        await this.inventoryRepository.replaceById(id, inventory);
    }
    async deleteById(id) {
        await this.inventoryRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/inventories', {
        responses: {
            '200': {
                description: 'Inventory model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Inventory) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Inventory, {
                    title: 'NewInventory',
                    exclude: ['inventoryId'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InvetoryController.prototype, "create", null);
__decorate([
    rest_1.get('/inventories/count', {
        responses: {
            '200': {
                description: 'Inventory model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Inventory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InvetoryController.prototype, "count", null);
__decorate([
    rest_1.get('/inventories', {
        responses: {
            '200': {
                description: 'Array of Inventory model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Inventory, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Inventory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InvetoryController.prototype, "find", null);
__decorate([
    rest_1.patch('/inventories', {
        responses: {
            '200': {
                description: 'Inventory PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Inventory, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Inventory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Inventory, Object]),
    __metadata("design:returntype", Promise)
], InvetoryController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/inventories/{id}', {
        responses: {
            '200': {
                description: 'Inventory model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Inventory, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Inventory))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvetoryController.prototype, "findById", null);
__decorate([
    rest_1.patch('/inventories/{id}', {
        responses: {
            '204': {
                description: 'Inventory PATCH success',
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
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Inventory]),
    __metadata("design:returntype", Promise)
], InvetoryController.prototype, "updateById", null);
__decorate([
    rest_1.put('/inventories/{id}', {
        responses: {
            '204': {
                description: 'Inventory PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Inventory]),
    __metadata("design:returntype", Promise)
], InvetoryController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/inventories/{id}', {
        responses: {
            '204': {
                description: 'Inventory DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvetoryController.prototype, "deleteById", null);
InvetoryController = __decorate([
    __param(0, repository_1.repository(repositories_1.InventoryRepository)),
    __metadata("design:paramtypes", [repositories_1.InventoryRepository])
], InvetoryController);
exports.InvetoryController = InvetoryController;
//# sourceMappingURL=invetory.controller.js.map