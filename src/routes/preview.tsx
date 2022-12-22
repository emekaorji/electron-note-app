import CalendarPreview from 'components/views/calendarPreview/calendarPreview';
import NotePreview from 'components/views/notePreview/notePreview';
import { Outlet, useParams } from 'react-router-dom';

const Preview = () => {
  const { previewId } = useParams();

  return (
    <>
      {previewId === 'calendar' && <CalendarPreview />}
      {previewId === 'note' && <NotePreview />}
      <Outlet />
    </>
  );
};

export default Preview;
