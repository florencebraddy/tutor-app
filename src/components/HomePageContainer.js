import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    borderStyle: "solid",
    borderRadius: "10px",
    backgroundColor: "black",
    opacity: 0.5,
    padding: "10px",
    margin: "60px",
    overflow: "auto"
  },
  info: {
    fontFamily: "Special Elite",
    fontSize: "30px",
    color: "white",
    opacity: 1
  }
}));

//we could move this to a card if we wanted to add more content on home page?
export default function HomePageContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <Typography component="div" className={classes.info}>
          <br />
          <p>
            Welcome to <b>"Cerebrum"</b>. We understand how trying times are at
            the moment, and know how important it is to continue living life as
            normal. We facilitate a platform for students and tutors to connect
            so we can all continue learning and teaching.
          </p>
          <p>
            Whether you're here to learn or to spread your wisdom, you're in
            good hands.
          </p>
          <p>Sign up today, and lets get started!</p>
          <br />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
