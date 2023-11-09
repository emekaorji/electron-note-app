import getClassName from 'functions/getClassName';
import styles from './image.module.css';

const Image = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <>
      <div className={styles.imageContainer + getClassName(className)}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

export default Image;
