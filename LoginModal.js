import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const LoginModal = (props) => {
  const [userName, setUserName] = useState('Vikram');
  const [password, setPassword] = useState('Ranjana');
  const onLogin = () => {
console.log({ userName, password});
  };

return (
<Modal
  open={props.open}
  onClose={props.onClose}
  >


  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Login
    </Typography>
    <TextField 
    label="UserName"
     sx={{ my: 1 }}
     value={userName} 
     onChange={(event) => setUserName(event.currentTarget.value)}
   />
   <TextField 
   label="Password" 
   sx={{my: 1}} 
   value={password}
    onChange={(event) => setPassword(event.currentTarget.value)}
    />
    <Box>
   <Button sx={{mx: 1}} variant="contained" onClick={onLogin}>
    Login 
   </Button>
   <Button sx={{mx: 1}} variant="contained" color="error" onClick={props.onClose}>
    Close
    </Button>
</Box>

  </Box>
</Modal>
);
};
export default LoginModal;