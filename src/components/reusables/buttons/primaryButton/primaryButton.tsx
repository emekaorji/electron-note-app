import InfoIcon from 'components/reusables/icons/info';
import Spinner from 'components/reusables/spinner/spinner';
import getClassName from 'functions/getClassName';
import React from 'react';
import styles from './primaryButton.module.css';

type PrimaryButtonProps = {
  children: React.ReactNode;
  icon: JSX.Element;
  iconSize?: number | string;
  iconPosition?: 'left' | 'right';
  className?: string;
  loading?: boolean;
  error?: boolean;
  errorText?: string;
  transparent?: boolean;
};

const PrimaryButton = ({
  children,
  icon,
  iconSize = '1.3em',
  iconPosition = 'left',
  className,
  loading = false,
  error = false,
  errorText = 'Retry',
  transparent = false,
  ...props
}: PrimaryButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const newIconPosition = error ? 'left' : iconPosition;

  return (
    <>
      <button
        className={
          styles.button +
          getClassName(className) +
          getClassName(error, styles.error) +
          getClassName(transparent, styles.transparent)
        }
        type="button"
        {...props}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            {newIconPosition === 'left' && (
              <div
                style={{ '--iconSize': iconSize } as React.CSSProperties}
                className={styles.buttonIcon}
              >
                {error ? <InfoIcon /> : icon}
              </div>
            )}
            <div className={styles.buttonText}>
              {error ? errorText : children}
            </div>
            {newIconPosition === 'right' && !error && (
              <div
                style={{ '--iconSize': iconSize } as React.CSSProperties}
                className={styles.buttonIcon}
              >
                {icon}
              </div>
            )}
          </>
        )}
      </button>
    </>
  );
};

export default PrimaryButton;
