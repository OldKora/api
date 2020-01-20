import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {Category, CategoryRelations, Product} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { ProductRepository } from './product.repository';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.categoryId,
  CategoryRelations
> {
  public readonly products: HasManyRepositoryFactory<
    Product,
    typeof Category.prototype.categoryId,
  >
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
    @repository.getter('ProductRepository')
    getProductRepository: Getter<ProductRepository>
  ) {
    super(Category, dataSource);
    this.products = this.createHasManyRepositoryFactoryFor(
      'products',
      getProductRepository
    );

    this.registerInclusionResolver('products', this.products.inclusionResolver);
  }
}
