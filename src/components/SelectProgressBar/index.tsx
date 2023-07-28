import React from "react";
import { ReactComponent as ProgressCheckCircle } from 'assets/svg/ProgressBar/ProgressCheckCircle.svg';
import { ReactComponent as ProgressNoneCheckCircle } from 'assets/svg/ProgressBar/ProgressNoneCheckCircle.svg';
import { ReactComponent as ProgressBar } from 'assets/svg/ProgressBar/ProgressBar.svg';
import styles from './SelectProgressBar.module.scss';

// 프로그래스 바에 대한 UI는 아무리 생각해도 전역변수로 설정하는게 좋을 것 같네요
// 각기 다른 페이지에서 계속 해서 바의 컬러를 변경해주어야하니 간단하게 쓸만한 전역 상태 라이브러리 사용이 좋겠습니다
// Justand, recoil 중 하나 정도는 선택해볼 생각인데 혹시 써보고 싶거나 원하시는거 있으시면 이야기 주세요

export default function SelectProgressBar() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}> 
        <ProgressCheckCircle /> 
      </div>
      <ProgressBar className={styles.bar} />
      <div className={styles.circle}> 
        <ProgressCheckCircle /> 
      </div>
      <ProgressBar className={styles.bar} />
      <div className={styles.circle}> 
        <ProgressCheckCircle /> 
      </div>
      <ProgressBar className={styles.bar} />
      <div className={styles.circle}> 
        <ProgressCheckCircle /> 
      </div>
    </div>
  )
}
