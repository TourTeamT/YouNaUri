import styles from './Login.module.scss';
import { ReactComponent as Kakao } from 'assets/svg/auth/kakao.svg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Login(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');

    if (code) {
      axios.get('http://localhost:3000', { params: { code: code } })
        .then(function (response) {
          console.log(response);
          console.log("나와라쫌");
          localStorage.setItem('access_token', response.data.access_token);
        })
        .catch(function (error) {
          console.log(error);
        });
        }
  }, [location]);

  return (
    <div className={styles.body}>
      <div className={styles.template}>
        <div className={styles['template__contents']}>
          <span className={styles['template__title']}>LOGIN</span>
          <span className={styles['template__subTitle']}>로그인하기</span>
          <span className={styles['template__text']}>'저희 서비스'를 이용하려면 로그인해주세요.</span>
          <a className={styles['template__kakao']} href={'http://3.37.87.24:3000/kakao-login/login'}>
            <Kakao/>
            <div className={styles['template__kakaoText']}>카카오 로그인</div>
          </a>
        </div>
      </div>
    </div>
  );
}
