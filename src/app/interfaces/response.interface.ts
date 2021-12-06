import { ICampaign } from "./campaign.interface";
import { IProduct } from "./product.interface";
import { IUser } from "./user.interface";

export interface IResponse {
  issuccess: boolean;
  errorcode: string;
  errormessage: string;
  data?: IProduct[] | IUser | ICampaign[] | ICampaign
}
