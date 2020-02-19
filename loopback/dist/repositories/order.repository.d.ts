import { DefaultCrudRepository } from '@loopback/repository';
import { Order, OrderRelations } from '../models';
import { MongoDataSource } from '../datasources';
export declare class OrderRepository extends DefaultCrudRepository<Order, typeof Order.prototype.orderId, OrderRelations> {
    constructor(dataSource: MongoDataSource);
}
