import { Count, Filter, Where } from '@loopback/repository';
import { ShoppingCart } from '../models';
import { ShoppingCartRepository } from '../repositories';
export declare class ShoppingCartController {
    shoppingCartRepository: ShoppingCartRepository;
    constructor(shoppingCartRepository: ShoppingCartRepository);
    create(shoppingCart: Omit<ShoppingCart, 'id'>): Promise<ShoppingCart>;
    count(where?: Where<ShoppingCart>): Promise<Count>;
    find(filter?: Filter<ShoppingCart>): Promise<ShoppingCart[]>;
    updateAll(shoppingCart: ShoppingCart, where?: Where<ShoppingCart>): Promise<Count>;
    findById(id: string, filter?: Filter<ShoppingCart>): Promise<ShoppingCart>;
    updateById(id: string, shoppingCart: ShoppingCart): Promise<void>;
    replaceById(id: string, shoppingCart: ShoppingCart): Promise<void>;
    deleteById(id: string): Promise<void>;
}
