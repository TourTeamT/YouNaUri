import React from "react";
import KakaoMap from "components/kakaoMap";
import useUserSelect from "utils/userSelectStore";
import useSelectedPlace from "utils/selectPlace";
import * as api from 'api';
import styles from './SelectMap.module.scss';


const staticData ={
  "result": {
    "1": [
      {
        "latitude": "37.647",
        "longitude": "127.0818",
        "address": "집 주소",
        "title": "출발점",
        "category_name": "관광코스"
      },
      {
        "latitude": "37.6608",
        "longitude": "127.0736",
        "address": "상계역",
        "hour": 0,
        "min": 30,
        "contentId": 127111,
        "title": "상계역",
        "category_name": "관광코스",
        "filter": [
          "휠체어대여"
        ]
      },
      {
        "latitude": "37.6723",
        "longitude": "127.0564",
        "address": "맥날 상계DT",
        "hour": 0,
        "min": 20,
        "contentId": 127111,
        "title": "맥날",
        "img": "sd.img",
        "category_name": "관광코스",
        "filter": [
          "휠체어대여"
        ]
      },
      {
        "latitude": "37.7096",
        "longitude": "127.0455",
        "address": "신한대",
        "hour": 0,
        "min": 10,
        "contentId": 127111,
        "title": "신한대",
        "img": "111.img",
        "category_name": "관광코스",
        "filter": [
          "휠체어대여"
        ]
      }
    ],
    "2": [
      {
        "latitude": "37.7521",
        "longitude": "127.0707",
        "address": "홈플러스 의정부",
        "hour": 0,
        "min": 15,
        "contentId": 127111,
        "title": "홈플러스",
        "img": "dfsf.img",
        "category_name": "관광코스",
        "filter": [
          "휠체어대여",
          "점자블록"
        ]
      },
      {
        "latitude": "37.7511",
        "longitude": "127.1188",
        "address": "코스트코 민락",
        "hour": 0,
        "min": 35,
        "contentId": 127111,
        "title": "코스트코",
        "img": "14.img",
        "category_name": "관광코스",
        "filter": [
          "휠체어대여"
        ]
      },
      {
        "latitude": "37.7326",
        "longitude": "127.1147",
        "address": "의정부 휴게소",
        "hour": 0,
        "min": 30,
        "contentId": 127111,
        "title": "휴게소",
        "img": "sfd.img",
        "category_name": "관광코스",
        "filter": [
          "휠체어대여"
        ]
      },
      {
        "latitude": "37.6588",
        "longitude": "127.1274",
        "address": "별내 카페거리",
        "hour": 0,
        "min": 10,
        "contentId": 127111,
        "title": "카페거리",
        "img": "dsf.img",
        "category_name": "관광코스",
        "filter": [
          "휠체어대여"
        ]
      },
      {
        "latitude": "37.647",
        "longitude": "127.0818",
        "address": "집 주소",
        "title": "도착점",
        "category_name": "관광코스"
      }
    ]
  },
  "durations": [
    {
      "hour": 0,
      "min": 12
    },
    {
      "hour": 0,
      "min": 8
    },
    {
      "hour": 0,
      "min": 15
    },
    {
      "hour": 0,
      "min": 21
    },
    {
      "hour": 0,
      "min": 15
    },
    {
      "hour": 0,
      "min": 8
    },
    {
      "hour": 0,
      "min": 15
    },
    {
      "hour": 0,
      "min": 20
    }
  ]
}


const test = [
  {
    "times": [
      {
        "hour": 0,
        "min": 125
      },
      {
        "hour": 0,
        "min": 200
      }
    ],
    "startPoint": {
      "latitude": "37.647",
      "longitude": "127.0818",
      "address": "집 주소",
      "category_name": "관광코스",
      "title": "출발점"
    },
    "destination": {
      "latitude": "37.647",
      "longitude": "127.0818",
      "address": "집 주소",
      "category_name": "관광코스",
      "title": "도착점"
    },
    "courses": [
      {
        "latitude": "37.7521",
        "longitude": "127.0707",
        "contentId": 127111,
        "address": "홈플러스 의정부",
        "hour": 0,
        "min": 15,
        "img": "dfsf.img",
        "category_name": "관광코스",
        "title": "홈플러스",
        "filter": ["휠체어대여", "점자블록"]
      },
      {
        "latitude": "37.6588",
        "longitude": "127.1274",
         "contentId": 127111,
        "address": "별내 카페거리",
        "hour": 0,
        "min": 10,
        "img": "dsf.img",
        "category_name": "관광코스",
        "title": "카페거리",
        "filter": ["휠체어대여"]
      },
      {
        "latitude": "37.7326",
        "longitude": "127.1147",
         "contentId": 127111,
        "address": "의정부 휴게소",
        "hour": 0,
        "min": 30,
        "img": "sfd.img",
        "category_name": "관광코스",
        "title": "휴게소",
        "filter": ["휠체어대여"]
      },
      {
        "latitude": "37.6723",
        "longitude": "127.0564",
         "contentId": 127111,
        "address": "맥날 상계DT",
        "hour": 0,
        "min": 20,
        "img": "sd.img",
        "category_name": "관광코스",
        "title": "맥날",
        "filter": ["휠체어대여"]
      },
      {
        "latitude": "37.7096",
        "longitude": "127.0455",
        "address": "신한대",
         "contentId": 127111,
        "hour": 0,
        "min": 10,
        "img": "111.img",
        "category_name": "관광코스",
        "title": "신한대",
        "filter": ["휠체어대여"]
      },
      {
        "latitude": "37.7511",
        "longitude": "127.1188",
         "contentId": 127111,
        "address": "코스트코 민락",
        "hour": 0,
        "min": 35,
        "img": "14.img",
        "category_name": "관광코스",
        "title": "코스트코",
        "filter": ["휠체어대여"]
      },
      {
        "latitude": "37.6608",
        "longitude": "127.0736",
         "contentId": 127111,
        "address": "상계역",
        "hour": 0,
        "min": 30,
        "category_name": "관광코스",
        "title": "상계역",
        "filter": ["휠체어대여"]
      }
    ]
  }
]
interface ResultData {
  latitude: string;
  longitude: string;
  address: string;
  hour?: number;
  min?: number;
  contentId?: number;
  title: string;
  category_name: string;
  filter?: string[];
  img?: string;
}

interface Duration {
  hour: number;
  min: number;
}

interface RouteData {
  result: { [key: string]: ResultData[] };
  durations: Duration[];
}


export default function SelectMap() {
  const [route, setRoute] = React.useState<any>();
  const { time, startPlace, endPlace } = useUserSelect();
  const { selectedPlace } = useSelectedPlace();
  
  const renderRouteList = (routeArray: ResultData[], duration: Duration) => {
    return routeArray.map((route, index) => (
      <div className={styles.card} key={index}>
        <img className={styles.card__image} src={route.img} alt="장소 이미지"/>
        <div className={styles.card__content}>
          <div className={styles.card__info}>
            <div className={styles.card__title}>제목: {route.title}</div>
            <div className={styles.card__address}>주소: {route.address}</div>
          </div>
          <div className={styles.card__duration}>
            소요시간: {duration.hour} 시간 {duration.min} 분
          </div>
        </div>
      </div>
    ));
  };
  React.useEffect(() => {
    const getServerData = async () => {
      const data = await api.plan.getServerRoute(test);
      console.log(data);
      setRoute(data);
      console.log(route);
    }
    getServerData();
  },[])
  return (
    <div className={styles.template}>
    <div className={styles.template__tab}>
      <div className={styles.tab__info}>
        <div className={styles.info}>
          <div className={styles.info__title}>제주 여행</div>
          <div className={styles.info__date}>8월 11일 금 - 8월 13일 일</div>
        </div>          
        <button className={styles.tab__change}>
          변경
        </button>
      </div>
      <div className={styles.tab__list}> 
        {  route?.result && (
            Object.keys(route?.result).map((key, index) => {
              const routeArray = staticData.result[key as keyof typeof staticData.result];
              const duration = staticData.durations[index];
            return renderRouteList(routeArray, duration);
          }))
        }
      </div>
      <div className={styles.tab__footer}>
        <div className={styles.footer}>
          <button className={styles.footer__place}>장소 확정하기</button>
          <button className={styles.footer__back}>뒤로가기</button>
        </div>
      </div>
    </div>
  </div>
  )
}