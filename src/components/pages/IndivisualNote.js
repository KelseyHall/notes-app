import { Typography } from '@mui/material';

export const ViewNote = (Note) => {
  <Container>
    <Typography variant="h2">{Note.Title}</Typography>
    <Typography variant="body1">{Note.Body}</Typography>
  </Container>;
};
export const EditNote = () => {};
