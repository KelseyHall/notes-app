import { Button, TextField, TextareaAutosize } from '@mui/material';
import { addNewNote, EditNote } from '../Function';
import { useLocation } from 'react-router-dom';

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
      <TextareaAutosize
        id="standard-basic"
        name="addNoteBodyForm"
        variant="filled"
        label="body"
      />
      <Button type="submit">Add Note</Button>
    </form>
  );
};
export const EditNoteForm = () => {
  const data = useLocation();
  const { Note } = data.state;
  return (
    <form onSubmit={(e) => EditNote(e)}>
      <TextField
        id="standard-basic"
        name="addNoteTitleForm"
        variant="filled"
        size="small"
        label="Title"
        defaultValue={Note.title}
      />
      <TextareaAutosize
        id="standard-basic"
        name="addNoteBodyForm"
        variant="filled"
        size="small"
        label="body"
        defaultValue={Note.body}
      />
      <Button type="submit">Edit Note</Button>
    </form>
  );
};
