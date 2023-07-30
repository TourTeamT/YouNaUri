import axios from "axios";

const url = "https://dapi.kakao.com/";

export const instance = axios.create({
  baseURL: 'https://dapi.kakao.com/',
})

instance.defaults.headers.common['Authorization'] = 'KakaoAK 76f2f817932b94bcfe339e8f5175c816';
instance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

export const localPopup = axios.create({
  baseURL: 'https://business.juso.go.kr/addrlink/'
})

localPopup.defaults.headers.common['Authorization'] = 'devU01TX0FVVEgyMDIzMDczMDAwMzE0MDExMzk3NDE='