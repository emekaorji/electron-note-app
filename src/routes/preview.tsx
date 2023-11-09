import PreviewView from 'components/views/previewView/previewView';
import { Outlet } from 'react-router-dom';

const Preview = () => {
  return (
    <>
      <PreviewView />
      <Outlet />
    </>
  );
};

export default Preview;
