import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import {
 DrawerComponent
} from '../components';

const drawerWidth = 72;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%"
  },
  sideNavbar: {
  },
    content: {
      marginLeft: drawerWidth,
      height: "100%",
      overflow: "auto",
    },
}));




const withNavBars = (Component) => (props) => {
  const classes = useStyles({ props });

  return (
    <div className={classes.root}>
      {/* Your nav bars here */}
      <div className={classes.topNavbar}>
        <DrawerComponent/>
      </div>

      {/* Content */}
      <div className={classes.content}>
        <Component {...props}>{props.children}</Component>
      </div>
    </div>
  );
};

export default withNavBars;
