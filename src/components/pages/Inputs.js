import { Button, TextField, Box } from '@mui/material';
import { addNewNote, EditNote } from '../Function';
import { useLocation } from 'react-router-dom';

export const AddNoteForm = ({ setNotes, handleClose }) => {
  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => addNewNote(e, setNotes)}
    >
      <TextField
        id="standard-basic"
        name="addNoteTitleForm"
        variant="filled"
        size="small"
        label="Title"
      />
      <TextField
        multiline
        maxRows={6}
        id="outlined-multiline-flexible"
        name="addNoteBodyForm"
        variant="filled"
        label="body"
      />
      <Button type="submit" onClick={handleClose}>
        Add Note
      </Button>
    </Box>
  );
};
export const EditNoteForm = ({ Notes, setNotes }) => {
  const data = useLocation();
  const { NotesData } = data.state;

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => {
        EditNote(e, NotesData, Notes, setNotes);
      }}
    >
      <TextField
        id="standard-basic"
        name="addNoteTitleForm"
        variant="filled"
        size="small"
        label="Title"
        defaultValue={NotesData.Note.title}
      />
      <TextField
        multiline
        id="outlined-multiline-flexible"
        name="addNoteBodyForm"
        variant="filled"
        size="small"
        label="body"
        defaultValue={NotesData.Note.body}
      />
      <Button type="submit">Edit Note</Button>
    </Box>
  );
};
