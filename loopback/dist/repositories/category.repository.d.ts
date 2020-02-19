import { DefaultCrudRepository } from '@loopback/repository';
import { Category, CategoryRelations } from '../models';
import { MongoDataSource } from '../datasources';
export declare class CategoryRepository extends DefaultCrudRepository<Category, typeof Category.prototype.categoryId, CategoryRelations> {
    constructor(dataSource: MongoDataSource);
}
