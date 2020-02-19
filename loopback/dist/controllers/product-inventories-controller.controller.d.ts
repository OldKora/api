import { Inventory } from '../models';
import { ProductRepository } from '../repositories';
export declare class ProductInventoriesControllerController {
    productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    createInventory(id: string, inventoryData: Inventory): Promise<Inventory>;
}
