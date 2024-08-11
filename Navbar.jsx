import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';

import {Link} from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Navbar = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
      
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <h3>EmployeeApp</h3>
          </Typography>

        
        <Link to={'/'}>
                <Button 
                style={{ color: 'white',  fontSize: '1.5rem',       
                    display: 'flex',          
                    alignItems: 'center',     
                  }}
                >
                    
                <HomeIcon fontSize="large"/>
                </Button>
                </Link>
         
          <Link to={'/add'}>
          <Button style={{ color: 'white'}}>
            
          <AddBoxIcon fontSize="large"/>
          </Button>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
    </> 
  )
}

export default Navbar
