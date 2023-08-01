import React, { ChangeEvent } from "react";
import DateRangeSelector from "components/datePicker";
import * as api from 'api';
import { ReactComponent as Search } from 'assets/svg/plan/search_icon.svg'
import styles from './plan.module.scss';

type LocalType = {
  location: string,
  x: number,
  y: number,
}

export default function Plan() {
  const [local, setLocal] = React.useState<string>('');
  const [locationInfo, setLocationInfo] = React.useState<LocalType | null>(null);
  const [searchResults, setSearchResults] = React.useState<any[]>([]);

  const handleResultItemClick = (result: any) => {
    // 검색 결과 중 하나를 선택하면 해당 결과의 값을 local로 설정
    setLocal(result.address_name);
    setLocationInfo({
      location: result.address_name,
      x: result.address.x,
      y: result.address.y,
    })
    setSearchResults([]);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (local === '') return;
        const data = await api.plan.getAddress(local);
        setSearchResults(data.documents);
      } catch (error) {
        console.log(error);
      }
    };
    // 입력 값이 변할 때마다 fetchData 함수를 호출하되, 입력 값에 딜레이를 적용 (300ms)
    const delayedFetchData = setTimeout(fetchData, 300);
    return () => clearTimeout(delayedFetchData);
  }, [local]);

  React.useEffect(() => {
    // locationInfo가 업데이트되었을 때에만 검색 결과를 초기화
    setSearchResults([]);
  }, [locationInfo]);

  return (
    <div className={styles.container}>
      <div className={styles.template}>
        <span className={styles.template__subTitle}>출발지</span>
        <div className={styles.place}>
          <Search className={styles.place__icon} />
          <input 
            className={styles.place__input}
            value={local}
            type="text"
            placeholder="어디서 출발하시나요?"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLocal(e.target.value)}
          />
        </div>
         {/* 검색 결과를 보여주는 부분 */}
        {searchResults?.length > 0 && (
          <div className={styles.search}>
            {searchResults.slice(0, 5).map((result: any, index: number) => (
              <div
                key={index}
                className={styles.search__item}
                onClick={() => handleResultItemClick(result)}
              >
                {result?.address_name}
              </div>
            ))}
          </div>
        )}
        <span className={styles.template__subTitle}>일정</span>
        <DateRangeSelector />
      </div>
    </div>
  )
}