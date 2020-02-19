import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {Product, ProductRelations, Category, Inventory} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {InventoryRepository} from './inventory.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.productId,
  ProductRelations
> {

  public readonly inventories: HasManyRepositoryFactory<Inventory, typeof Product.prototype.productId>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('InventoryRepository') protected inventoryRepositoryGetter: Getter<InventoryRepository>,
    @repository(InventoryRepository)
    protected inventoryRepository: InventoryRepository,
    ) {
    super(Product, dataSource);
    this.inventories = this.createHasManyRepositoryFactoryFor('inventories', inventoryRepositoryGetter,);
    this.registerInclusionResolver('inventories', this.inventories.inclusionResolver);
  }
}
