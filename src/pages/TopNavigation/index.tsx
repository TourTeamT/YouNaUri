import { Link } from 'react-router-dom';
import styles from './TopNavigation.module.scss';
//import { useAuth } from 'store/auth';
import { ReactComponent as Logo } from 'assets/svg/Navi/logo.svg'


export default function TopNavigation(): JSX.Element {
  //const auth = useAuth();

  const tabs = [
    {
      // name: auth ? '마이페이지' : '로그인',
      //icon: <SettingIcon />,
      // link: auth ? '/myPage' : '/login',
      name: '채똥이님',
      link: '/login',
      //UI 잡히면 위의 코드로 교체
    },
    {
      name: '로그아웃',
      link: '/search',
    },
  ];

  return (
    <nav className={styles['top-navigation']}>
      <div className={styles['top-navigation__logo']}>
        <Link to="/" className={styles['top-navigation__logo-link']}>
          <Logo />
        </Link>
      </div>

      <ul className={styles['top-navigation__links']}>
        {tabs.map((tab) => (
          <li key={tab.name}>
            <Link to={tab.link} className={styles['top-navigation__link']}>
              {/* {tab.icon} */}
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
