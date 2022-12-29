import LargeBadgeButton from 'components/reusables/buttons/largeBadgeButton/largeBadgeButton';
import colors from 'data/colors';
import DataProps from 'types/data';
import Controls from './controls/controls';
import Title from './title/title';
import styles from './header.module.css';
import useNoteViewContext from '../shared/hooks/useNoteViewContext';

const Header = () => {
  /* @ts-ignore */
  const { currentNote }: { currentNote: DataProps } = useNoteViewContext();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <div className={styles.labels}>
            {currentNote?.labels?.map((label) => (
              <LargeBadgeButton
                key={label.name}
                color={colors[label.color]}
                title={label.name}
              />
            ))}
          </div>
          <Title />
        </div>
        <Controls collaborators={currentNote?.collaborators} />
      </div>
    </>
  );
};

export default Header;
