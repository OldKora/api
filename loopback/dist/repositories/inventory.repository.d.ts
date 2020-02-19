import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Inventory, InventoryRelations, Product } from '../models';
import { MongoDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { ProductRepository } from './product.repository';
export declare class InventoryRepository extends DefaultCrudRepository<Inventory, typeof Inventory.prototype.inventoryId, InventoryRelations> {
    protected productRepositoryGetter: Getter<ProductRepository>;
    readonly product: BelongsToAccessor<Product, typeof Inventory.prototype.inventoryId>;
    constructor(dataSource: MongoDataSource, productRepositoryGetter: Getter<ProductRepository>);
}
