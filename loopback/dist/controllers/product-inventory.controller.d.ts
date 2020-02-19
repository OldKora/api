import { Count, Filter, Where } from '@loopback/repository';
import { Product, Inventory } from '../models';
import { ProductRepository } from '../repositories';
export declare class ProductInventoryController {
    protected productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    find(id: string, filter?: Filter<Inventory>): Promise<Inventory[]>;
    create(id: typeof Product.prototype.productId, inventory: Omit<Inventory, 'inventoryId'>): Promise<Inventory>;
    patch(id: string, inventory: Partial<Inventory>, where?: Where<Inventory>): Promise<Count>;
    delete(id: string, where?: Where<Inventory>): Promise<Count>;
}
