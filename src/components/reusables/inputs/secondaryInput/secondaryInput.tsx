import getClassName from 'functions/getClassName';
import React, { useEffect, useRef, useState } from 'react';
import styles from './secondaryInput.module.css';

type SecondaryInputProps = {
  className?: string;
  type?: string;
  value?: string;
  transparent?: boolean;
};

const SecondaryInput = ({
  className,
  type = 'text',
  value = '',
  transparent,
  ...props
}: SecondaryInputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [width, setWidth] = useState<string | undefined>('0ch');

  useEffect(() => {
    setWidth(`${value?.length + (value?.length > 6 ? 0 : +1)}ch`);
  }, [value]);

  return (
    <>
      <input
        className={
          styles.input +
          getClassName(className) +
          getClassName(transparent, styles.transparent)
        }
        style={{ width }}
        type={type}
        value={value}
        ref={inputRef}
        {...props}
      />
    </>
  );
};

export default SecondaryInput;
