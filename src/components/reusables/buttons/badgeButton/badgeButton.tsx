import getClassName from 'functions/getClassName';
import React from 'react';
import styles from './badgeButton.module.css';

type BadgeButtonProps = {
  color: string;
  className?: string;
  size?: number;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const BadgeButton = ({
  color,
  className,
  size = 1,
  onClick = () => {},
  ...props
}: BadgeButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
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
        type="button"
        onClick={handleClick}
        {...props}
      />
    </>
  );
};

export default BadgeButton;
