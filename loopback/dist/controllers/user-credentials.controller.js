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
let UserCredentialsController = class UserCredentialsController {
    constructor(userCredentialsRepository) {
        this.userCredentialsRepository = userCredentialsRepository;
    }
    async create(userCredentials) {
        return this.userCredentialsRepository.create(userCredentials);
    }
    async count(where) {
        return this.userCredentialsRepository.count(where);
    }
    async find(filter) {
        return this.userCredentialsRepository.find(filter);
    }
    async updateAll(userCredentials, where) {
        return this.userCredentialsRepository.updateAll(userCredentials, where);
    }
    async findById(id, filter) {
        return this.userCredentialsRepository.findById(id, filter);
    }
    async updateById(id, userCredentials) {
        await this.userCredentialsRepository.updateById(id, userCredentials);
    }
    async replaceById(id, userCredentials) {
        await this.userCredentialsRepository.replaceById(id, userCredentials);
    }
    async deleteById(id) {
        await this.userCredentialsRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/user-credentials', {
        responses: {
            '200': {
                description: 'UserCredentials model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.UserCredentials) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.UserCredentials, {
                    title: 'NewUserCredentials',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCredentialsController.prototype, "create", null);
__decorate([
    rest_1.get('/user-credentials/count', {
        responses: {
            '200': {
                description: 'UserCredentials model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.UserCredentials))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCredentialsController.prototype, "count", null);
__decorate([
    rest_1.get('/user-credentials', {
        responses: {
            '200': {
                description: 'Array of UserCredentials model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.UserCredentials, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.UserCredentials))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCredentialsController.prototype, "find", null);
__decorate([
    rest_1.patch('/user-credentials', {
        responses: {
            '200': {
                description: 'UserCredentials PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.UserCredentials, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.UserCredentials))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.UserCredentials, Object]),
    __metadata("design:returntype", Promise)
], UserCredentialsController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/user-credentials/{id}', {
        responses: {
            '200': {
                description: 'UserCredentials model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.UserCredentials, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.UserCredentials))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserCredentialsController.prototype, "findById", null);
__decorate([
    rest_1.patch('/user-credentials/{id}', {
        responses: {
            '204': {
                description: 'UserCredentials PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.UserCredentials, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], UserCredentialsController.prototype, "updateById", null);
__decorate([
    rest_1.put('/user-credentials/{id}', {
        responses: {
            '204': {
                description: 'UserCredentials PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], UserCredentialsController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/user-credentials/{id}', {
        responses: {
            '204': {
                description: 'UserCredentials DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserCredentialsController.prototype, "deleteById", null);
UserCredentialsController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserCredentialsRepository)),
    __metadata("design:paramtypes", [repositories_1.UserCredentialsRepository])
], UserCredentialsController);
exports.UserCredentialsController = UserCredentialsController;
//# sourceMappingURL=user-credentials.controller.js.map