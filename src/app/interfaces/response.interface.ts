import { IProduct } from "./product.interface";

export interface IResponse {
  issuccess: boolean;
  errorcode: string;
  errormessage: string;
  data: IProduct[]
}
