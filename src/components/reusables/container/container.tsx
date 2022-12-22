import getClassName from 'functions/getClassName';
import React from 'react';
import styles from './container.module.css';

type ContainerProps = {
  children: React.ReactNode;
  className: string | undefined;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <>
      <div className={styles.container + getClassName(className)}>
        {children}
      </div>
    </>
  );
};

export default Container;
