import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const NavBar = ({ options, setSearch }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
            Zymvol App
          </Typography>
          <div>
            {options.map(option => (
              <Button
                key={option}
                color="inherit"
                component={Link}
                to={`/r/${option}`}
                onClick={() => setSearch(option)}
                sx={{ color: '#fff' }}
              >
                {option}
              </Button>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
