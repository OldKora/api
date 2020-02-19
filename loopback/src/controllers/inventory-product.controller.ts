import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Inventory,
  Product,
} from '../models';
import {InventoryRepository} from '../repositories';

export class InventoryProductController {
  constructor(
    @repository(InventoryRepository)
    public inventoryRepository: InventoryRepository,
  ) { }

  @get('/inventories/{id}/product', {
    responses: {
      '200': {
        description: 'Product belonging to Inventory',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async getProduct(
    @param.path.string('id') id: typeof Inventory.prototype.inventoryId,
  ): Promise<Product> {
    return this.inventoryRepository.product(id);
  }
}
