import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import AboutView from 'components/views/aboutView/aboutView';
import AppWrapper from 'components/layout/appWrapper/appWrapper';
import Empty from 'routes/empty';
import Preview from 'routes/preview';
import Note from 'routes/note';

import '../styles/global.css';

export default function App() {
  return (
    <>
      <AppWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Empty />}>
              <Route path=":previewId" element={<Preview />}>
                <Route path=":noteId" element={<Note />} />
              </Route>
            </Route>
            <Route path="/about" element={<AboutView />} />
          </Routes>
        </Router>
      </AppWrapper>
    </>
  );
}
