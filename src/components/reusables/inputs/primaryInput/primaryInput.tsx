import getClassName from 'functions/getClassName';
import React from 'react';
import styles from './primaryInput.module.css';

type PrimaryInputProps = {
  icon: JSX.Element;
  iconSize?: number;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: string;
};

const PrimaryInput = ({
  icon,
  iconSize = 1,
  iconPosition = 'left',
  className,
  type = 'text',
}: PrimaryInputProps) => {
  return (
    <>
      <div className={styles.primaryInput + getClassName(className)}>
        {iconPosition === 'left' && (
          <div
            style={{ '--size': `${iconSize}em` } as React.CSSProperties}
            className={styles.icon}
          >
            {icon}
          </div>
        )}
        <input type={type} />
        {iconPosition === 'right' && (
          <div
            style={{ '--size': `${iconSize}` } as React.CSSProperties}
            className={styles.icon}
          >
            {icon}
          </div>
        )}
      </div>
    </>
  );
};

export default PrimaryInput;
