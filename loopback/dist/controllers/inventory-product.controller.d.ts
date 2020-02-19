import { Inventory, Product } from '../models';
import { InventoryRepository } from '../repositories';
export declare class InventoryProductController {
    inventoryRepository: InventoryRepository;
    constructor(inventoryRepository: InventoryRepository);
    getProduct(id: typeof Inventory.prototype.inventoryId): Promise<Product>;
}
