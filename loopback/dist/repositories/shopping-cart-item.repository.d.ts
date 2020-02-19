import { DefaultCrudRepository } from '@loopback/repository';
import { ShoppingCartItem, ShoppingCartItemRelations } from '../models';
import { MongoDataSource } from '../datasources';
export declare class ShoppingCartItemRepository extends DefaultCrudRepository<ShoppingCartItem, typeof ShoppingCartItem.prototype.id, ShoppingCartItemRelations> {
    constructor(dataSource: MongoDataSource);
}
