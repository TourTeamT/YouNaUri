import React from "react";
import { ReactComponent as ProgressCheckCircle } from 'assets/svg/ProgressBar/ProgressCheckCircle.svg';
import { ReactComponent as ProgressNoneCheckCircle } from 'assets/svg/ProgressBar/ProgressNoneCheckCircle.svg';
import { ReactComponent as ProgressBar } from 'assets/svg/ProgressBar/ProgressBar.svg';
import { ReactComponent as NoneProgressbar } from 'assets/svg/ProgressBar/NoneProgressBar.svg';
import useProgressStore from "utils/store/progressStore";
import styles from './SelectProgressBar.module.scss';

export default function SelectProgressBar() {
  const {
    partnerSelect,
    placeStep,
    placeSelect,
    planStep,
    planSelect,
    timeStep,
    timeSelect,
  } = useProgressStore();

  return (
    <div className={styles.container}>
      <div className={styles.circle}> 
      { partnerSelect ? <ProgressCheckCircle /> : <ProgressNoneCheckCircle /> }
      </div>
      {
        placeStep ? (
          <ProgressBar 
            className={styles.bar} 
          />
        ) : (
          <NoneProgressbar 
            className={styles.bar} 
          />
        )
      }
      <div className={styles.circle}> 
      { placeSelect ? <ProgressCheckCircle /> : <ProgressNoneCheckCircle /> }
      </div>
      {
        planStep ? (
          <ProgressBar 
            className={styles.bar} 
          />
        ) : (
          <NoneProgressbar 
            className={styles.bar} 
          />
        )
      }
      <div className={styles.circle}> 
      { planSelect ? <ProgressCheckCircle /> : <ProgressNoneCheckCircle /> }
      </div>
      {
        timeStep ? (
          <ProgressBar 
            className={styles.bar} 
          />
        ) : (
          <NoneProgressbar 
            className={styles.bar} 
          />
        )
      }
      <div className={styles.circle}> 
      { timeSelect ? <ProgressCheckCircle /> : <ProgressNoneCheckCircle /> }
      </div>
    </div>
  )
}
