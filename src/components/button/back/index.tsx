import React from "react";
import styles from './back.module.scss';

type BackProps = {
  setState: any
}

export default function Back({ setState }: BackProps) {
  return (
    <div className={styles.button} onClick={setState}>
      뒤로가기
    </div>
  )
}