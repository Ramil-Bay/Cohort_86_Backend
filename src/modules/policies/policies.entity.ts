import { User } from '../users/users.entity.js';
import { INSURANCE_TYPE } from './enums/insurance.enum.js';
import { Car } from '../cars/cars.entity.js';

export class Policy {
  id: number;
  type: INSURANCE_TYPE;
  holder: User;
  cars: Car[];
  coverageInCent: number;
  issuedAt: Date;
  expiresAt: Date;
  active: boolean;
}
