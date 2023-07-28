import React from "react";
import styles from './SelectIntroduce.module.scss';

type SelectIntroduceProps = {
  subTitle: string,
  title: string,
  content: string,
}

export default function SelectIntroduce({ subTitle, title, content}: SelectIntroduceProps) {
  return (
    <div className={styles.introduce}>
      <span className={styles.introduce__subTitle}>{subTitle}</span>
      <span className={styles.introduce__title}>{title}</span>
      <span className={styles.introduce__content}>{content}</span>
    </div>
  )
}