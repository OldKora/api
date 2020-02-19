import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Product, ProductRelations, Inventory } from '../models';
import { MongoDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { InventoryRepository } from './inventory.repository';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.productId, ProductRelations> {
    protected inventoryRepositoryGetter: Getter<InventoryRepository>;
    protected inventoryRepository: InventoryRepository;
    readonly inventories: HasManyRepositoryFactory<Inventory, typeof Product.prototype.productId>;
    constructor(dataSource: MongoDataSource, inventoryRepositoryGetter: Getter<InventoryRepository>, inventoryRepository: InventoryRepository);
}
