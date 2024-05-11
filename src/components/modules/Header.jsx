import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Box sx={{display: "flex", alignItems: "center"}}>
                          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
                        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Your Logo
            </Typography>
            </Box>
            <Box sx={{display: "flex", alignItems: "center", width: "full"}}>

            <Typography variant="body1" sx={{ ml: 2 }}>
              <a href="/hello" style={{ color: 'inherit', textDecoration: 'none' }}>Hello</a>
            </Typography>
            <Typography variant="body1" sx={{ ml: 2 }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Link 2</a>
            </Typography>
            <Typography variant="body1" sx={{ ml: 2 }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Link 3</a>
            </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: 2,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
                mr: 2,
                minWidth: 120,
                maxWidth: 300,
                flexGrow: 1,
              }}
            >
              <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Search…"
                sx={{ ml: 1, flex: 1, color: 'inherit' }}
              />
            </Box>

            <Button onClick={() => navigate("/login")}  color="inherit" sx={{ mr: 2 }}>Login</Button>
            <Button onClick={() => navigate("registry-choice")} color="inherit">Sign Up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Header;
