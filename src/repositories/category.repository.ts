import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {Category, CategoryRelations, Product} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.categoryId,
  CategoryRelations
> {

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Category, dataSource);
  }
}
