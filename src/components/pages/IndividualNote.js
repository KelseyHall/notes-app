import { Typography, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { EditNoteForm } from './Inputs';

export const ViewNotePage = () => {
  const data = useLocation();
  const { Note } = data.state;

  return (
    <Container>
      <Typography variant="h2">{Note.title}</Typography>
      <Typography variant="body1">{Note.body}</Typography>
    </Container>
  );
};
export const EditNotePage = () => {
  return (
    <Container>
      <EditNoteForm />
    </Container>
  );
};
