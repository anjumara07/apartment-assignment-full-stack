import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from "react-redux";
import {logoutRequest} from '../Login/action'
import { useNavigate } from "react-router-dom";

export const ButtonAppBar = ()=> {

  const isLoggedIn = useSelector((store) => store.reducer.isLoggedIn)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
      dispatch(logoutRequest());
      navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to={'/'}><MenuIcon /></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Apartment Table
          </Typography>
          {isLoggedIn? <div className="pointer" onClick={handleLogout}>Logout</div> : <div className="pointer" >Login</div> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
