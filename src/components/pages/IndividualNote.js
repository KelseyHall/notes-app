import { Typography, Container, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { EditNoteForm } from './Inputs';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';

export const ViewNotePage = () => {
  const data = useLocation();
  const { NotesData } = data.state;

  return (
    <Container>
      <Typography variant="h2">{NotesData.Note.title}</Typography>
      <Typography variant="body1">{NotesData.Note.body}</Typography>
      <Button
        component={Link}
        to={'/EditNote'}
        state={{ NotesData: NotesData }}
        sx={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <EditOutlinedIcon />
      </Button>
    </Container>
  );
};
export const EditNotePage = ({ Notes, setNotes }) => {
  return (
    <Container>
      <EditNoteForm Notes={Notes} setNotes={setNotes} />
    </Container>
  );
};
