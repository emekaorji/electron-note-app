import getClassName from 'functions/getClassName';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './primaryLink.module.css';

type PrimaryLinkProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
  iconSize?: number | string;
  iconPosition?: 'left' | 'right';
  href: string;
  className?: string;
  iconClassName?: string;
  transparent?: boolean;
  preserveIcon?: boolean;
};

const PrimaryLink = ({
  children,
  icon,
  iconSize = '1.2em',
  iconPosition = 'left',
  href,
  className,
  iconClassName,
  transparent = false,
  preserveIcon = false,
  ...props
}: PrimaryLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (!icon)
    return (
      <>
        <Link
          to={href}
          className={
            styles.link +
            getClassName(className) +
            getClassName(transparent, styles.transparent)
          }
          {...props}
        >
          {children}
        </Link>
      </>
    );

  return (
    <>
      <Link
        to={href}
        className={
          styles.link +
          getClassName(className) +
          getClassName(transparent, styles.transparent) +
          getClassName(preserveIcon, styles.preserveIcon)
        }
        {...props}
      >
        {iconPosition === 'left' && (
          <div
            style={{ '--iconSize': iconSize } as React.CSSProperties}
            className={styles.linkIcon + getClassName(iconClassName)}
          >
            {icon}
          </div>
        )}
        <div className={styles.linkText}>{children}</div>
        {iconPosition === 'right' && (
          <div
            style={{ '--iconSize': iconSize } as React.CSSProperties}
            className={styles.linkIcon + getClassName(iconClassName)}
          >
            {icon}
          </div>
        )}
      </Link>
    </>
  );
};

export default PrimaryLink;
