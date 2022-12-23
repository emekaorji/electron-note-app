import getClassName from 'functions/getClassName';
import React from 'react';
import styles from './imageButton.module.css';

type ImageLinkProps = {
  className?: string;
  src: string;
  alt?: string;
};

const ImageLink = ({
  className,
  src,
  alt = '',
  ...props
}: ImageLinkProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button
        type="button"
        className={styles.link + getClassName(className)}
        {...props}
      >
        <img src={src} alt={alt} />
      </button>
    </>
  );
};

export default ImageLink;
