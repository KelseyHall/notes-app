import {
  Button,
  TextField,
  TextareaAutosize,
  FormControl,
} from '@mui/material';
import { addNewNote, EditNote } from '../Function';
import { useLocation } from 'react-router-dom';

export const AddNoteForm = ({ setNotes }) => {
  return (
    <FormControl
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
      <Button type="submit">Add Note</Button>
    </FormControl>
  );
};
export const EditNoteForm = () => {
  const data = useLocation();
  const { Note } = data.state;
  return (
    <FormControl
      sx={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => EditNote(e)}
    >
      <TextField
        id="standard-basic"
        name="addNoteTitleForm"
        variant="filled"
        size="small"
        label="Title"
        defaultValue={Note.title}
      />
      <TextField
        multiline
        id="outlined-multiline-flexible"
        name="addNoteBodyForm"
        variant="filled"
        size="small"
        label="body"
        defaultValue={Note.body}
      />
      <Button type="submit">Edit Note</Button>
    </FormControl>
  );
};
