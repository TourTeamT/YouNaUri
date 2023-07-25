const checkEnvVar = (name: string) => {
  const envVar = process.env[name];
  if (!envVar) {
    console.error(`환경변수 파일에 ${name}가 존재하지 않습니다!`);
    return '';
  }
  return envVar;
};

// API 공통
export const API_PATH = checkEnvVar('REACT_APP_API_PATH');
export const SERVER_LOGIN_REDIRECT_URL = checkEnvVar('REACT_APP_SERVER_LOGIN_REDIRECT_URL');

// 카카오 OAuth
export const KAKAO_CLIENT_ID = checkEnvVar('REACT_APP_KAKAO_CLIENT_ID');
export const KAKAO_REDIRECT_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${SERVER_LOGIN_REDIRECT_URL}&response_type=code`;