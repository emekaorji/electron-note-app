import { memo } from 'react';
import Editor from './editor/editor';
import Footer from './footer/footer';
import Header from './header/header';
import styles from './main.module.css';

const Main = memo(() => {
  return (
    <>
      <div className={styles.main}>
        <Header />
        <Editor />
        <Footer />
      </div>
    </>
  );
});

export default Main;
