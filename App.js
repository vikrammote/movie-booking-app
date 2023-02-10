
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginModal from './LoginModal';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useEffect } from "react";


export default function ButtonAppBar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <>
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Booking App
          </Typography>
          <Button color="inherit" onClick={() => setIsLoginModalOpen(true)}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
<LoginModal
 open={isLoginModalOpen} 
 onClose={() => setIsLoginModalOpen(false)}
/>
</>
  );
}