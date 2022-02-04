import { Route, Routes } from 'react-router-dom';
import { EditNotePage, ViewNotePage } from './IndividualNote';
import Notes from './Notes';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="ViewNote" element={<ViewNotePage />} />
      <Route path="EditNote" element={<EditNotePage />} />
    </Routes>
  );
};

export default Router;
