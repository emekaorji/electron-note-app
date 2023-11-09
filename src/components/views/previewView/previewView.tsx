import getClassName from 'functions/getClassName';
import { useLocation, useParams } from 'react-router-dom';
import CalendarPreview from './calendarPreview/calendarPreview';
import NotePreview from './notePreview/notePreview';
import styles from './previewView.module.css';

const fullScreenRoutes = ['/notes', '/calendar'];

const PreviewView = () => {
  const { previewId } = useParams();
  const location = useLocation();

  return (
    <>
      <div
        className={
          styles.preview +
          getClassName(
            fullScreenRoutes.includes(location.pathname),
            styles.fullScreen
          )
        }
      >
        {previewId === 'calendar' && <CalendarPreview />}
        {previewId === 'notes' && <NotePreview />}
      </div>
    </>
  );
};

export default PreviewView;
