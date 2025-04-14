import { Role } from "./types";

export { };

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        role: Role;
        email: string;
      };
    }
  }
}

export interface OrderItemInput {
  itemId: number;
  quantity: number;
}