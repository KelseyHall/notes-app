import React from 'react';
import {
  Button,
  Container,
  DialogContent,
  Dialog,
  DialogTitle,
} from '@mui/material';

import DisplayNotes from '../DisplayNotesMap';

import { AddNoteForm } from './Inputs';

const Notes = ({ Notes, setNotes }) => {
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
