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
import { Link } from 'react-router-dom';

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
          component="div"
          sx={{
            width: 'calc(60%)',
            height: '60px',
          }}
        >
          <Link to="/ViewNote" state={{ Note: Note }}>
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
          </Link>
        </CardActionArea>

        <CardActions>
          <Button onClick={() => DeleteNote(id, Notes, setNotes)}>
            <DeleteIcon />
          </Button>
          <Button>
            <Link to="/EditNote" state={{ Note: Note }}>
              <EditOutlinedIcon />
            </Link>
          </Button>
        </CardActions>
      </Card>
    );
  });
};

export default DisplayNotes;
