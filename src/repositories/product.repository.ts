import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {Product, ProductRelations, Category, Inventory} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { CategoryRepository } from './category.repository';
import { InventoryRepository } from './inventory.repository';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.productId,
  ProductRelations
> {
  public readonly category: BelongsToAccessor<
    Category,
    typeof Product.prototype.productId
  >
  public readonly inventories: HasManyRepositoryFactory<
    Inventory,
    typeof Product.prototype.productId
  >
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('CategoryRepository')
    categoryRepositoryGetter: Getter<CategoryRepository>,
    @repository.getter('InventoryRepository')
    getInventoryRepository: Getter<InventoryRepository>
  ) {
    super(Product, dataSource);

    this.category = this.createBelongsToAccessorFor(
      'category',
      categoryRepositoryGetter
    );

    this.inventories = this.createHasManyRepositoryFactoryFor(
      'inventories',
      getInventoryRepository
    );

    this.registerInclusionResolver('category', this.category.inclusionResolver);
    this.registerInclusionResolver('inventories', this.inventories.inclusionResolver);
  }
}
