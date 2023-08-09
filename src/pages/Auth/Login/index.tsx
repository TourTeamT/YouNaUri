import styles from './Login.module.scss';
import { ReactComponent as Kakao } from 'assets/svg/auth/kakao.svg';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');

    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      if (refreshToken) {
        localStorage.setItem('refresh_token', refreshToken);
      }
      navigate('/user-select/partner');
    }
  }, [location, navigate]);

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
