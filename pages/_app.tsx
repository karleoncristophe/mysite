import App from 'next/app';
import '../styles/globals.css';
import DarkModeProvider from '../context/DarkMode';
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    );
  }
}
