import {Entity, model, property} from '@loopback/repository';

@model()
export class ShoppingCart extends Entity {

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  constructor(data?: Partial<ShoppingCart>) {
    super(data);
  }
}

export interface ShoppingCartRelations {
  // describe navigational properties here
}

export type ShoppingCartWithRelations = ShoppingCart & ShoppingCartRelations;
