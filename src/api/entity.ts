import axios from "axios";

const url = "https://dapi.kakao.com/";

export const instance = axios.create({
  baseURL: 'https://dapi.kakao.com/',
})

instance.defaults.headers.common['Authorization'] = process.env.REACT_APP_KAKAO_LOCAL_KEY;
instance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

export const localPopup = axios.create({
  baseURL: 'https://business.juso.go.kr/addrlink/'
})

export const location = axios.create({
  baseURL: 'http://apis.data.go.kr/B551011'
})

location.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

export const key = 'ZYow8W4H%2FDX9Brl4akTY7oRSr%2FpQptz2enUDK3%2FsO6VZVKa16n948PBd6K3ic6pQVmVL54WHi6GQY1lRdzjsig%3D%3D';
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjkxMzI1ODY2LCJleHAiOjE2OTEzNjkwNjZ9.hSZyzUgiURXqWwHyr_YGaffLfmLV935NQGXnkFM4Pqc&refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjkxMzI1ODY2LCJleHAiOjE2OTE5MzA2NjZ9.jKWvO1UtT-uL0ft7s6RNKEHMCW5TztWv83ja22MEJYg';

export const server = axios.create({
  baseURL: 'http://3.37.87.24:3000/'
})

server.defaults.headers.common['Authorization'] = accessToken;