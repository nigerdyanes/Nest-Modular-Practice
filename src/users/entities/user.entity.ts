import { Profile } from '../../profile/entities/profile.entity';
export class User {
  id: number;
  firstName: string;
  lastName: string;
  dni: number;
  age: number;
  profile?: Profile;
}
