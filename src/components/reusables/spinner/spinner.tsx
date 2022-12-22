import getClassName from 'functions/getClassName';
import React from 'react';
import styles from './spinner.module.css';

type SpinnerProps = {
  className?: string;
  iconSize?: string | number;
  color?: string;
};

const Spinner = ({
  className,
  iconSize = '1.4em',
  color = '#93bfec',
  ...props
}: SpinnerProps & React.AllHTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div
        className={styles.spinnerContainer + getClassName(className)}
        style={{ '--spinnerSize': iconSize } as React.CSSProperties}
        {...props}
      >
        <svg className={styles.spinner} viewBox="0 0 50 50">
          <circle
            className={styles.path}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dasharray"
              values="1, 150;90, 150;90, 150"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="0;-35;-124"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </>
  );
};

export default Spinner;
