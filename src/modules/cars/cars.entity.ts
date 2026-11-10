import { User } from '../users/users.entity.js';

export class Car {
  id: number;
  year: number;
  model: string;
  brand: string;
  vin: string;
  color: string;
  owner: User;
  active: string;
}
