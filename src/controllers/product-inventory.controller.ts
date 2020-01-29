import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Product,
  Inventory,
} from '../models';
import {ProductRepository} from '../repositories';

export class ProductInventoryController {
  constructor(
    @repository(ProductRepository) protected productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/inventories', {
    responses: {
      '200': {
        description: 'Array of Product has many Inventory',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inventory)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Inventory>,
  ): Promise<Inventory[]> {
    return this.productRepository.inventories(id).find(filter);
  }

  @post('/products/{id}/inventories', {
    responses: {
      '200': {
        description: 'Product model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inventory)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Product.prototype.productId,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventory, {
            title: 'NewInventoryInProduct',
            exclude: ['inventoryId'],
            optional: ['productId']
          }),
        },
      },
    }) inventory: Omit<Inventory, 'inventoryId'>,
  ): Promise<Inventory> {
    return this.productRepository.inventories(id).create(inventory);
  }

  @patch('/products/{id}/inventories', {
    responses: {
      '200': {
        description: 'Product.Inventory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventory, {partial: true}),
        },
      },
    })
    inventory: Partial<Inventory>,
    @param.query.object('where', getWhereSchemaFor(Inventory)) where?: Where<Inventory>,
  ): Promise<Count> {
    return this.productRepository.inventories(id).patch(inventory, where);
  }

  @del('/products/{id}/inventories', {
    responses: {
      '200': {
        description: 'Product.Inventory DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Inventory)) where?: Where<Inventory>,
  ): Promise<Count> {
    return this.productRepository.inventories(id).delete(where);
  }
}
