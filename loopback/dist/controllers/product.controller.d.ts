import { Count, Filter, Where } from '@loopback/repository';
import { Product, Inventory } from '../models';
import { ProductRepository, InventoryRepository } from '../repositories';
export declare class ProductController {
    productRepository: ProductRepository;
    inventoryRepository: InventoryRepository;
    constructor(productRepository: ProductRepository, inventoryRepository: InventoryRepository);
    create(product: Omit<Product, 'productId'>): Promise<Product>;
    count(where?: Where<Product>): Promise<Count>;
    find(filter?: Filter<Product>): Promise<Product[]>;
    updateAll(product: Product, where?: Where<Product>): Promise<Count>;
    findById(id: string, filter?: Filter<Product>): Promise<Product>;
    updateById(id: string, product: Product): Promise<void>;
    replaceById(id: string, product: Product): Promise<void>;
    deleteById(id: string): Promise<void>;
    findAll(): Promise<{
        inventories: (Inventory & import("../models").InventoryRelations)[];
        productId?: string | undefined;
        name: string;
        price: number;
        image: string;
        description?: string | undefined;
        details?: string | undefined;
        createdAt: string;
        UpdatedAt: string;
    }[]>;
}
