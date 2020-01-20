import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Inventory extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  inventoryId?: string;

  @property({
    type: 'number',
    required: true,
  })
  qty: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inventory>) {
    super(data);
  }
}

export interface InventoryRelations {
  // describe navigational properties here
}

export type InventoryWithRelations = Inventory & InventoryRelations;
