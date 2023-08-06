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
      MobileApp: 'test',
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
  return response.data.response.body.items.item;
}

export const getPlaceInfo = async (contentId: any) => {
  const response = await location.get(`KorWithService1/detailCommon1`, {
    params: {
      MobileOS: 'WEB',
      MobileApp: 'test',
      serviceKey: key,
      contentId: contentId,
      overviewYN: 'Y',
      addrinfoYN: 'Y',
      firstImageYN: 'Y',
      _type: 'json',
    }
  }) 
  return response.data;
}

export const getDisabilityService = async (contentId: any) => {
  const response = await location.get(`KorWithService1/detailWithTour1`, {
    params: {
      MobileOS: 'WEB',
      MobileApp: 'test',
      serviceKey: key,
      contentId: contentId,
      _type: 'json',
    }
  }) 
  return response.data;
}

export const getDetailCommon = async (contentId: any) => {
  const response = await location.get(`KorWithService1/detailIntro1`, {
    params: {
      MobileOS: 'WEB',
      MobileApp: 'test',
      serviceKey: key,
      contentId: contentId,
      contentTypeId: 12,
      _type: 'json',
    }
  })
  return response.data;
}
