import { Count, Filter, Where } from '@loopback/repository';
import { Category } from '../models';
import { CategoryRepository } from '../repositories';
export declare class CategoryController {
    categoryRepository: CategoryRepository;
    constructor(categoryRepository: CategoryRepository);
    create(category: Omit<Category, 'categoryId'>): Promise<Category>;
    count(where?: Where<Category>): Promise<Count>;
    find(filter?: Filter<Category>): Promise<Category[]>;
    updateAll(category: Category, where?: Where<Category>): Promise<Count>;
    findById(id: string, filter?: Filter<Category>): Promise<Category>;
    updateById(id: string, category: Category): Promise<void>;
    replaceById(id: string, category: Category): Promise<void>;
    deleteById(id: string): Promise<void>;
}
