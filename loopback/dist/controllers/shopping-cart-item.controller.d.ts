import { Count, Filter, Where } from '@loopback/repository';
import { ShoppingCartItem } from '../models';
import { ShoppingCartItemRepository } from '../repositories';
export declare class ShoppingCartItemController {
    shoppingCartItemRepository: ShoppingCartItemRepository;
    constructor(shoppingCartItemRepository: ShoppingCartItemRepository);
    create(shoppingCartItem: Omit<ShoppingCartItem, 'id'>): Promise<ShoppingCartItem>;
    count(where?: Where<ShoppingCartItem>): Promise<Count>;
    find(filter?: Filter<ShoppingCartItem>): Promise<ShoppingCartItem[]>;
    updateAll(shoppingCartItem: ShoppingCartItem, where?: Where<ShoppingCartItem>): Promise<Count>;
    findById(id: string, filter?: Filter<ShoppingCartItem>): Promise<ShoppingCartItem>;
    updateById(id: string, shoppingCartItem: ShoppingCartItem): Promise<void>;
    replaceById(id: string, shoppingCartItem: ShoppingCartItem): Promise<void>;
    deleteById(id: string): Promise<void>;
}
