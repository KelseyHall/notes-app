import { Typography, Container, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { EditNoteForm } from './Inputs';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';

export const ViewNotePage = () => {
  const data = useLocation();
  const { Note } = data.state;

  return (
    <Container>
      <Typography variant="h2">{Note.title}</Typography>
      <Typography variant="body1">{Note.body}</Typography>
      <Button
        component={Link}
        to={'/EditNote'}
        state={{ Note: Note }}
        sx={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <EditOutlinedIcon />
      </Button>
    </Container>
  );
};
export const EditNotePage = ({ setNotes }) => {
  return (
    <Container>
      <EditNoteForm setNotes={setNotes} />
    </Container>
  );
};
