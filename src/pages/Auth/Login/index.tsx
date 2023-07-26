import styles from './Login.module.scss';
import { ReactComponent as Kakao } from 'assets/svg/auth/kakao.svg';
import { KAKAO_REDIRECT_URL } from 'config/constants';

export default function Login(): JSX.Element {

  return (
    <div className={styles.template}>
      <div className={styles['template__contents']}>
        <span className={styles['template__title']}>LOGIN</span>
        <span className={styles['template__subTitle']}>로그인하기</span>
        <span className={styles['template__text']}>'저희 서비스'를 이용하려면 로그인해주세요.</span>
        <a className={styles['template__kakao']} href={KAKAO_REDIRECT_URL}>
          <Kakao/>
          <div className={styles['template__kakaoText']}>카카오 로그인</div>
        </a>
      </div>
    </div>
  );
}
