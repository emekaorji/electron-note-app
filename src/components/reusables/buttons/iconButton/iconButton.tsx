import getClassName from 'functions/getClassName';
import styles from './iconButton.module.css';

type IconButtonProps = {
  icon: JSX.Element;
  className?: string;
};

const IconButton = ({
  icon,
  className,
  ...props
}: IconButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <>
      <button
        className={styles.button + getClassName(className)}
        type="button"
        {...props}
      >
        {icon}
      </button>
    </>
  );
};

export default IconButton;

// const Link = ({
//   textToDisplay,
//   ...props
// }: {
//   textToDisplay: string;
// } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
//   return <a {...props}>{textToDisplay}</a>;
// };
