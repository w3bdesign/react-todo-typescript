import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core"


const Header: React.FC = () => (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        //className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
       
      </IconButton>
      <Typography variant="h6" 
      //className={classes.title}
      >
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
 
);

export default Header
