import getFormattedDate from 'functions/getFormattedDate';
import getFormattedTime from 'functions/getFormattedTime';
import DataProps from 'types/data';
import useNoteViewContext from '../../shared/hooks/useNoteViewContext';
import styles from './footer.module.css';

// type FooterProps = { updated: DataProps['updated'] | undefined };

const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { currentNote }: { currentNote: DataProps } = useNoteViewContext();

  return (
    <>
      <div className={styles.footer}>
        {getFormattedDate(currentNote?.updatedAt, 'Ddd, Dth Mmm, YYYY')} •{' '}
        {getFormattedTime(currentNote?.updatedAt, 'hh:mm P')}
      </div>
    </>
  );
};

export default Footer;
