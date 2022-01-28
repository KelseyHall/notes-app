import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

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
      {Notes.map(({ id, Note }) => {
        return <p key={id}>{Note}</p>;
      })}
    </Container>
  );
};
export default Notes;
