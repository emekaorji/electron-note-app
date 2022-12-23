import getClassName from 'functions/getClassName';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './imageLink.module.css';

type ImageLinkProps = {
  href: string;
  className?: string;
  src: string;
  alt?: string;
};

const ImageLink = ({
  href,
  className,
  src,
  alt = '',
  ...props
}: ImageLinkProps & React.LinkHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <>
      <Link
        to={href}
        className={styles.link + getClassName(className)}
        {...props}
      >
        <img src={src} alt={alt} />
      </Link>
    </>
  );
};

export default ImageLink;
