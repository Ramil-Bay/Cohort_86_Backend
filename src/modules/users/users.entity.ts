import { ROLE } from './enums/role.enum.js';

class User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: ROLE;
  active: boolean;
}

export { User };
