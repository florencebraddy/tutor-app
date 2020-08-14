import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SignUp from "./SignUp";
import Modal from "@material-ui/core/Modal";
import LogIn from "./LogIn";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "sticky"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: "black",
    opacity: 0.5
  }
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

export default function NavBar() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [signin, setSignInOpen] = React.useState(false);
  const [login, setLogInOpen] = React.useState(false);

  const signUpOpen = () => {
    setSignInOpen(true);
  };

  const logInOpen = () => {
    setLogInOpen(true);
  };

  const handleClose = () => {
    setSignInOpen(false);
    setLogInOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button color="inherit" onClick={signUpOpen}>
            Sign Up
          </Button>
          <Modal
            open={signin}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SignUp />
          </Modal>
          <Button color="inherit" onClick={logInOpen}>
            Log In
          </Button>
          <Modal
            open={login}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <LogIn />
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}
