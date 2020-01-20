import {Entity, model, property, hasMany} from '@loopback/repository';
import { Product } from './product.model';

@model({settings: {strict: false}})
export class Category extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  categoryId?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
    required: true,
    generated: true
  })
  createdAt: string;

  @property({
    type: 'date',
    required: true,
    generated: true
  })
  UpdatedAt: string;

  @hasMany(() => Product, {keyTo: 'categoryId'})
  products?: Product[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
