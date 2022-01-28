import { Button, TextField } from '@mui/material';
import { addNewNote } from '../Function';

export const AddNoteForm = ({ setNotes }) => {
  return (
    <form onSubmit={(e) => addNewNote(e, setNotes)}>
      <TextField
        id="standard-basic"
        name="addNoteForm"
        variant="filled"
        size="small"
      />
      <Button type="submit">Add Note</Button>
    </form>
  );
};
