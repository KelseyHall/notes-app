import { Button, Card, Typography } from '@mui/material';
import { DeleteNote } from './Function';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box } from '@mui/system';

const DisplayNotes = ({ Notes, setNotes }) => {
  return Notes.map(({ id, Note }) => {
    return (
      <Card
        variant="outlined"
        key={id}
        sx={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          component="div"
          sx={{
            width: 'calc(60%)',
            height: '60px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {Note.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {Note.body}
          </Typography>
        </Box>
        <span>
          <Button onClick={() => DeleteNote(id, Notes, setNotes)}>
            <DeleteIcon />
          </Button>
          <Button>
            <EditOutlinedIcon />
          </Button>
        </span>
      </Card>
    );
  });
};

export default DisplayNotes;
