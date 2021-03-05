import { Learn } from "./Learn";

export interface IUser {
  id: number;
  name: string;
  age: number;
  eat: () => boolean;
  study: () => Learn;
};