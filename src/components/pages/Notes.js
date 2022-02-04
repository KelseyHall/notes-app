import React from 'react';
import {
  Button,
  Container,
  DialogContent,
  Dialog,
  DialogTitle,
} from '@mui/material';
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Button onClick={handleClickOpen}>Add New</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Note</DialogTitle>
        <DialogContent>
          <AddNoteForm setNotes={setNotes} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
      <DisplayNotes Notes={Notes} setNotes={setNotes} />
    </Container>
  );
};
export default Notes;
