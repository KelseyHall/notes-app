import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import DisplayNotes from '../DisplayNotesMap';

import { AddNoteForm } from './Inputs';

const Notes = () => {
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
    <Container>
      <AddNoteForm setNotes={setNotes} />
      <DisplayNotes Notes={Notes} setNotes={setNotes} />
    </Container>
  );
};
export default Notes;
