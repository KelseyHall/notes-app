import { Route, Routes } from 'react-router-dom';
import { EditNotePage, ViewNotePage } from './IndividualNote';
import NotesApp from './Notes';
import { useEffect, useState } from 'react';

const Router = () => {
  const [Notes, setNotes] = useState(() => {
    const GetNotes = localStorage.getItem('SavedNotes');
    if (GetNotes) {
      return JSON.parse(GetNotes);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem('SavedNotes', JSON.stringify(Notes));
  }, [Notes]);
  return (
    <Routes>
      <Route
        path="/"
        element={<NotesApp Notes={Notes} setNotes={setNotes} />}
      />
      <Route path="ViewNote" element={<ViewNotePage />} />
      <Route
        path="EditNote"
        element={<EditNotePage Notes={Notes} setNotes={setNotes} />}
      />
    </Routes>
  );
};

export default Router;
