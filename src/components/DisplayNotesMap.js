import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { DeleteNote } from './Function';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

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
        <CardActionArea
          onClick={(e) => console.log(e)}
          component="div"
          sx={{
            width: 'calc(60%)',
            height: '60px',
          }}
        >
          <CardContent>
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
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button onClick={() => DeleteNote(id, Notes, setNotes)}>
            <DeleteIcon />
          </Button>
          <Button>
            <EditOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    );
  });
};

export default DisplayNotes;
