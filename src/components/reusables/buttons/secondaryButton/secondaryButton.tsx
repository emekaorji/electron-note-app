import Spinner from 'components/reusables/spinner/spinner';
import ellipsify from 'functions/ellipsify';
import getClassName from 'functions/getClassName';
import React, { useMemo } from 'react';
import styles from './secondaryButton.module.css';

type SecondaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  error?: boolean;
  errorText?: string;
  transparent?: boolean;
};

const SecondaryButton = ({
  children,
  className,
  loading = false,
  error = false,
  errorText = 'Retry',
  transparent = false,
  ...props
}: SecondaryButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const content = useMemo(() => {
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return ellipsify(errorText, 13);
    }
    return children;
  }, [children, error, errorText, loading]);

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
        {content}
      </button>
    </>
  );
};

export default SecondaryButton;
