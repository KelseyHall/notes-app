import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/material/Icon';
import { Link } from 'react-router-dom';
import { auth } from './pages/AuthSignIn';

const signInOrOut = auth ? 'Sign Out' : 'Sign In';

const pages = [
  { title: 'Dashboard', link: `/` },
  { title: signInOrOut, link: `` },
];

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Container
            component={Link}
            to={'/'}
            sx={{ textDecoration: 'inherit', color: 'inherit' }}
          >
            <Typography variant="h1">My Notes</Typography>
          </Container>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', med: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {pages.map((page) => (
              <MenuItem key={page.title} component={Link} to={page.link}>
                {page.title}
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
