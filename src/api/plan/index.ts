import axios from "axios";
import { instance, localPopup } from "api/entity";

export const getAddress =  async (address: string) => {
  const response = await instance.get(`v2/local/search/address.json`, {
    params: {
      query: address
    }
  }) 
  return response.data;
}

export const getAddressPopup =  async (address: string) => {
  const response = await localPopup.get(`v2/local/search/address.json`, {
    params: {
      query: address
    }
  }) 
  return response.data;
}
