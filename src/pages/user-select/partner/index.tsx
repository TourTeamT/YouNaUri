import React from "react";
import { Link } from "react-router-dom";
import partnerData from "Data/partnerData.json"
import Cards from "./Card/index";
import useProgressStore from "utils/store/progressStore";
import styles from './partner.module.scss';

export default function Partner() {
  const { setPlaceStep } = useProgressStore();
  return (
    <div>
      <Cards partnerData={partnerData} />
      <button className={styles.button} onClick={() => setPlaceStep(true)}>
        <Link className={styles.button__link} to="/user-select/place">다음으로</Link>
      </button>
    </div>
  )
}