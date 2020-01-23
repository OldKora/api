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
import {Product, Inventory} from '../models';
import {ProductRepository} from '../repositories';

export class ProductInventoriesControllerController {
  constructor(
    @repository(ProductRepository)
    public productRepository : ProductRepository,
  ) {}

  @post('/products/{id}/inventory')
  async createInventory(
    @param.path.string('id') id: string,
    @requestBody() inventoryData: Inventory
  ): Promise<Inventory> {
    return this.productRepository.inventories(id).create(inventoryData);
  }
}
