import getClassName from 'functions/getClassName';
import { Link } from 'react-router-dom';
import styles from './smallLink.module.css';

type SmallLinkProps = {
  icon: JSX.Element;
  href: string;
  className?: string;
};

const SmallLink = ({
  icon,
  href,
  className,
  ...props
}: SmallLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  return (
    <>
      <Link
        to={href}
        className={styles.button + getClassName(className)}
        {...props}
      >
        {icon}
      </Link>
    </>
  );
};

export default SmallLink;
