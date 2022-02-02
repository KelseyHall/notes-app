import { Button, Card } from '@mui/material';
import { DeleteNote } from './Function';
import DeleteIcon from '@mui/icons-material/Delete';
const DisplayNotes = ({ Notes, setNotes }) => {
  return Notes.map(({ id, Note }) => {
    return (
      <Card>
        <p key={id}>
          {Note}
          <Button onClick={() => DeleteNote(id, Notes, setNotes)}>
            <DeleteIcon />
          </Button>
        </p>
      </Card>
    );
  });
};

export default DisplayNotes;
