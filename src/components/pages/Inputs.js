import { Button, TextField } from '@mui/material';
import { addNewNote } from '../Function';

export const AddNoteForm = ({ setNotes }) => {
  return (
    <form onSubmit={(e) => addNewNote(e, setNotes)}>
      <TextField
        id="standard-basic"
        name="addNoteTitleForm"
        variant="filled"
        size="small"
        label="Title"
      />
      <TextField
        id="standard-basic"
        name="addNoteBodyForm"
        variant="filled"
        size="small"
        label="body"
      />
      <Button type="submit">Add Note</Button>
    </form>
  );
};
