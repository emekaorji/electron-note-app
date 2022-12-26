import getClassName from 'functions/getClassName';
import styles from './largeBadgeButton.module.css';

type LargeBadgeButtonProps = {
  title: string;
  className?: string;
  size?: number;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const LargeBadgeButton = ({
  title,
  className,
  size,
  color,
  onClick = () => {},
  ...props
}: LargeBadgeButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    onClick(event);
  };

  return (
    <>
      <button
        className={styles.button + getClassName(className)}
        style={{ '--color': color, '--size': size } as React.CSSProperties}
        onClick={handleClick}
        type="button"
        title={title}
        {...props}
      >
        {title}
      </button>
    </>
  );
};

export default LargeBadgeButton;
