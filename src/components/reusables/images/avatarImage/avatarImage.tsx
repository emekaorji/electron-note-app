import getClassName from 'functions/getClassName';
import { memo, useRef, useState } from 'react';
import styles from './avatarImage.module.css';

type AvatarImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const getInitials = (text: string): string => {
  const [first, second] = text.split(/\s+/);

  const firstInitial: string = first.at(0) || 'C';
  let secondInitial: string;

  if (second) {
    secondInitial = second.at(0) || 'B';
  } else {
    secondInitial = first.at(1) || 'B';
  }

  return `${firstInitial}${secondInitial}`.toUpperCase();
};

const AvatarImage = memo(
  ({
    src,
    alt,
    className,
    ...props
  }: AvatarImageProps &
    React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [reloadSignal, setReloadSignal] = useState('');

    const NUMBER_OF_TIMES_RELOADED = useRef(1);

    const initials = getInitials(alt);

    const handleImageLoad = () => setLoading(false);
    const handleImageError = () => {
      if (NUMBER_OF_TIMES_RELOADED.current > 4) return;

      setTimeout(() => {
        const time = new Date().getTime();
        NUMBER_OF_TIMES_RELOADED.current += 1;
        setReloadSignal(`?t=${time}`);
        setLoading(true);

        // eslint-disable-next-line no-console
        console.log('image is reloading');
      }, 10000);
    };

    return (
      <>
        <div
          className={
            styles.imageContainer +
            getClassName(className) +
            getClassName(!loading, styles.loaded)
          }
          title={alt}
        >
          {src && (
            <img
              src={`${src}${reloadSignal}`}
              alt=""
              onLoad={handleImageLoad}
              onError={handleImageError}
              className={styles.image}
              {...props}
            />
          )}
          {(loading || src === '') && initials}
        </div>
      </>
    );
  }
);

export default AvatarImage;
