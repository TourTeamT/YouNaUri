import { instance, localPopup, location } from "../../api/entity";

export const key = 'ZYow8W4H/DX9Brl4akTY7oRSr/pQptz2enUDK3/sO6VZVKa16n948PBd6K3ic6pQVmVL54WHi6GQY1lRdzjsig==';
const popupKey = 'U01TX0FVVEgyMDIzMDczMDAwNTEzMDExMzk3NDI=';

export const getAddress =  async (address: string) => {
  const response = await instance.get(`v2/local/search/address.json`, {
    params: {
      query: address
    }
  }) 
  return response.data;
}

export const getAddressPopup =  async (location: any) => {
  const response = await localPopup.get(`addrCoordUrl.do`, {
    params: {
      confirmKey: popupKey,
      returnUrl: location,
    }
  }) 
  return response.data;
}

export const getLocation = async () => {
  const response = await location.get(`KorWithService1/locationBasedList1`, {
    params: {
      numOfRows: 10,
      pageNo: 1,
      MobileOS: 'WEB',
      MobileApp: 'AppTest',
      serviceKey: key,
      mapX: 126.981611,
      mapY: 37.568477,
      radius: 1000,
      listYN: 'Y',
      arrange: 'A',
      contentTypeId: 12,
      _type: 'json',
    }
  }) 
  console.log(response.data);
  return response.data;
}