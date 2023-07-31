import React from "react";
import partnerData from "Data/partnerData.json"
import Cards from "./Card/index";
import styles from './partner.module.scss';

export default function Partner() {
  return (
    <div>
      <Cards partnerData={partnerData} />
      <button className={styles.button}>다음으로</button>
    </div>
  )
}