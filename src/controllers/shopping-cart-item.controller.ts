import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ShoppingCartItem} from '../models';
import {ShoppingCartItemRepository} from '../repositories';

export class ShoppingCartItemController {
  constructor(
    @repository(ShoppingCartItemRepository)
    public shoppingCartItemRepository : ShoppingCartItemRepository,
  ) {}

  @post('/shopping-cart-items', {
    responses: {
      '200': {
        description: 'ShoppingCartItem model instance',
        content: {'application/json': {schema: getModelSchemaRef(ShoppingCartItem)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShoppingCartItem, {
            title: 'NewShoppingCartItem',
            exclude: ['id'],
          }),
        },
      },
    })
    shoppingCartItem: Omit<ShoppingCartItem, 'id'>,
  ): Promise<ShoppingCartItem> {
    return this.shoppingCartItemRepository.create(shoppingCartItem);
  }

  @get('/shopping-cart-items/count', {
    responses: {
      '200': {
        description: 'ShoppingCartItem model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ShoppingCartItem)) where?: Where<ShoppingCartItem>,
  ): Promise<Count> {
    return this.shoppingCartItemRepository.count(where);
  }

  @get('/shopping-cart-items', {
    responses: {
      '200': {
        description: 'Array of ShoppingCartItem model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ShoppingCartItem, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ShoppingCartItem)) filter?: Filter<ShoppingCartItem>,
  ): Promise<ShoppingCartItem[]> {
    return this.shoppingCartItemRepository.find(filter);
  }

  @patch('/shopping-cart-items', {
    responses: {
      '200': {
        description: 'ShoppingCartItem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShoppingCartItem, {partial: true}),
        },
      },
    })
    shoppingCartItem: ShoppingCartItem,
    @param.query.object('where', getWhereSchemaFor(ShoppingCartItem)) where?: Where<ShoppingCartItem>,
  ): Promise<Count> {
    return this.shoppingCartItemRepository.updateAll(shoppingCartItem, where);
  }

  @get('/shopping-cart-items/{id}', {
    responses: {
      '200': {
        description: 'ShoppingCartItem model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ShoppingCartItem, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(ShoppingCartItem)) filter?: Filter<ShoppingCartItem>
  ): Promise<ShoppingCartItem> {
    return this.shoppingCartItemRepository.findById(id, filter);
  }

  @patch('/shopping-cart-items/{id}', {
    responses: {
      '204': {
        description: 'ShoppingCartItem PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ShoppingCartItem, {partial: true}),
        },
      },
    })
    shoppingCartItem: ShoppingCartItem,
  ): Promise<void> {
    await this.shoppingCartItemRepository.updateById(id, shoppingCartItem);
  }

  @put('/shopping-cart-items/{id}', {
    responses: {
      '204': {
        description: 'ShoppingCartItem PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() shoppingCartItem: ShoppingCartItem,
  ): Promise<void> {
    await this.shoppingCartItemRepository.replaceById(id, shoppingCartItem);
  }

  @del('/shopping-cart-items/{id}', {
    responses: {
      '204': {
        description: 'ShoppingCartItem DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.shoppingCartItemRepository.deleteById(id);
  }
}
