import React from "react";
import KakaoMap from "components/kakaoMap";
import styles from './SelectMap.module.scss';


const staticData = [
  [{      
    latitude: 37.647,        
    longitude: 127.0818,        
    address: "집 주소",        
    title: "출발점",        
    category_name: "관광코스"      
  },      
  {        
    latitude: 37.61453,        
    longitude: 127.013106,        
    address: "서울광역시 남구",        
    hour: 0,        
    min: 15,        
    img: "course1_img",        
    title: "SK하이닉스",        
    category_name: "관광코스",       
    filter: [        
        "휠체어대여 "       
      ]      
    },      
    { 
      latitude: 37.5370636368,        
      longitude: 127.0013586618,        
      address: "서울특별시 용산구 이태원로42길 60",        
      hour: 1,        
      min: 0,        
      phone: "02-794-0526",        
      title: "효뜨",        
      place_url: "http://place.map.kakao.com/283930207",        
      category_detail: "음식점 > 아시아음식 > 동남아음식 > 베트남음식",        
      category_name: "음식점"      
    },      
    {        
      latitude: 37.58896,        
      longitude: 126.934203,        
      address: "서울광역시 남구",        
      hour: 0,        
      min: 15,       
      img: "course6_img",        
      title: "SK하이닉스",        
      category_name: "관광코스",        
      filter: [          
        "휠체어대여"        
      ]      
    },      
    {        
      latitude: 37.599289,        
      longitude: 126.865082,        
      address: "서울광역시 남구",        
      hour: 0,        
      min: 5,        
      img: "course3_img",        
      title: "SK하이닉스",        
      category_name: "관광코스",        
      filter: [          
        "휠체어대여",          
        "점자블록"        
      ]      
    },      
    {        
      latitude: 37.5370636368,        
      longitude: 127.0013586618,        
      address: "서울특별시 용산구 이태원로42길 60",        
      hour: 1,        
      min: 0,        
      phone:"02-794-0526",        
      title: "효뜨",        
      place_url: "http://place.map.kakao.com/283930207",        
      category_detail:"음식점 > 아시아음식 > 동남아음식 > 베트남음식",        
      category_name: "음식점"      
    }    
  ],
  [{      
    latitude: 37.647,        
    longitude: 127.0818,        
    address: "집 주소",        
    title: "출발점",        
    category_name: "관광코스"      
  },      
  {        
    latitude: 37.61453,        
    longitude: 127.013106,        
    address: "서울광역시 남구",        
    hour: 0,        
    min: 15,        
    img: "course1_img",        
    title: "SK하이닉스",        
    category_name: "관광코스",       
    filter: [        
        "휠체어대여 "       
      ]      
    },      
    { 
      latitude: 37.5370636368,        
      longitude: 127.0013586618,        
      address: "서울특별시 용산구 이태원로42길 60",        
      hour: 1,        
      min: 0,        
      phone: "02-794-0526",        
      title: "효뜨",        
      place_url: "http://place.map.kakao.com/283930207",        
      category_detail: "음식점 > 아시아음식 > 동남아음식 > 베트남음식",        
      category_name: "음식점"      
    },      
    {        
      latitude: 37.58896,        
      longitude: 126.934203,        
      address: "서울광역시 남구",        
      hour: 0,        
      min: 15,       
      img: "course6_img",        
      title: "SK하이닉스",        
      category_name: "관광코스",        
      filter: [          
        "휠체어대여"        
      ]      
    },      
    {        
      latitude: 37.599289,        
      longitude: 126.865082,        
      address: "서울광역시 남구",        
      hour: 0,        
      min: 5,        
      img: "course3_img",        
      title: "SK하이닉스",        
      category_name: "관광코스",        
      filter: [          
        "휠체어대여",          
        "점자블록"        
      ]      
    },      
    {        
      latitude: 37.5370636368,        
      longitude: 127.0013586618,        
      address: "서울특별시 용산구 이태원로42길 60",        
      hour: 1,        
      min: 0,        
      phone:"02-794-0526",        
      title: "효뜨",        
      place_url: "http://place.map.kakao.com/283930207",        
      category_detail:"음식점 > 아시아음식 > 동남아음식 > 베트남음식",        
      category_name: "음식점"      
    }    
  ],
]
export default function SelectMap() {
  return (
    <div className={styles.template}>
    <div className={styles.template__tab}>
      <div className={styles.tab__info}>
        <div className={styles.info}>
          <div className={styles.info__title}>제주 여행</div>
          <div className={styles.info__date}>1월 12일 금 - 1월 15일 월</div>
        </div>          
        <button className={styles.tab__change}>
          변경
        </button>
      </div>
      <div className={styles.tab__list}>
        {
          staticData.map((item: any, index: number) => (
            <div className={styles.days}>
            <div className={styles.days__head}>
              <div className={styles.days__title}>{index + 1}일차</div>
              <div className={styles.days__day}>1월 12일 금</div>
            </div>
            <div className={styles.days__content}>
              {
                item.map((data: any) => (
                  <div>
                    {data.latitude}
                  </div>
                ))
              }
              </div>
            </div>
          ))
        }
      </div>
      <div className={styles.tab__footer}>
        <div className={styles.footer}>
          <button className={styles.footer__place}>장소 확정하기</button>
          <button className={styles.footer__back}>뒤로가기</button>
        </div>
      </div>
    </div>
    <div className={styles.template__map}>
      <KakaoMap />
    </div>
    <div className={styles.recommend}>
      <div className={styles.recommend__header}> 
        <div className={styles.recommend__title}>추천 장소</div>
        <div className={styles.recommend__hide}>추천 접기</div>
      </div>
      <div className={styles.recommend__content}>
      
      </div>
    </div>
  </div>
  )
}