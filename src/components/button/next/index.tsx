import React from "react";
import styles from './next.module.scss';

type NextProps = {
  setState: any
}

export default function Next({ setState }: NextProps) {
  return (
    <div className={styles.button} onClick={setState}>
      다음으로
    </div>
  )
}