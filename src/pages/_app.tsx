import './globals.css'; // 글로벌 CSS 파일 불러오기
import { AppProps } from 'next/app';
const MyApp = ({ Component, pageProps }: AppProps)=> {
  return <Component {...pageProps} />;
}
export default MyApp;