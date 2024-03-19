import {contribuyente} from "../contribuyente/interface/contribuyente";


export interface ResponseContribuyentes {
  isSuccess: string,
  data:[contribuyente],
  message:string,
  errors:string
}
