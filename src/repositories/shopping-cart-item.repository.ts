import {DefaultCrudRepository} from '@loopback/repository';
import {ShoppingCartItem, ShoppingCartItemRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShoppingCartItemRepository extends DefaultCrudRepository<
  ShoppingCartItem,
  typeof ShoppingCartItem.prototype.id,
  ShoppingCartItemRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ShoppingCartItem, dataSource);
  }
}
