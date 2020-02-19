import { DefaultCrudRepository } from '@loopback/repository';
import { ShoppingCart, ShoppingCartRelations } from '../models';
import { MongoDataSource } from '../datasources';
export declare class ShoppingCartRepository extends DefaultCrudRepository<ShoppingCart, typeof ShoppingCart.prototype.id, ShoppingCartRelations> {
    constructor(dataSource: MongoDataSource);
}
