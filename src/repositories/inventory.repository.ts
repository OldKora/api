import {DefaultCrudRepository, HasManyRepositoryFactory, repository, BelongsToAccessor} from '@loopback/repository';
import {Inventory, InventoryRelations, Product} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { ProductRepository } from './product.repository';

export class InventoryRepository extends DefaultCrudRepository<
  Inventory,
  typeof Inventory.prototype.inventoryId,
  InventoryRelations
> {
  public readonly product: BelongsToAccessor<
    Product,
    typeof Inventory.prototype.inventoryId
  >
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('ProductRepository')
    protected productRepositoryGetter: Getter<ProductRepository>
  ) {
    super(Inventory, dataSource);
    this.product = this.createBelongsToAccessorFor(
      'product',
      productRepositoryGetter
    )
    this.registerInclusionResolver('product', this.product.inclusionResolver);
  }
}
