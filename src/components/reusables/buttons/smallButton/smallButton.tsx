import getClassName from 'functions/getClassName';
import styles from './smallButton.module.css';

type SmallButtonProps = {
  icon: JSX.Element;
  className?: string;
};

const SmallButton = ({
  icon,
  className,
  ...props
}: SmallButtonProps &
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

export default SmallButton;
