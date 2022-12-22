import { Link } from 'react-router-dom';
import icon from '../../../../assets/icon.svg';
import styles from './noteView.module.css';

const NoteView = () => {
  return (
    <div>
      <div className={styles.hello}>
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className={styles.hello}>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default NoteView;
